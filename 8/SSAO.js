import { ShaderPass } from "../modules/ShaderPass.js";
import {
  GLSL3,
  RawShaderMaterial,
  WebGLMultipleRenderTargets,
  NearestFilter,
  FloatType,
  Scene,
  Mesh,
  Vector2,
  PlaneGeometry,
  OrthographicCamera,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as hsl } from "../shaders/hsl.js";
import { shader as screen } from "../shaders/screen.js";
import { getFBO } from "../modules/fbo.js";

const singleVs = `precision highp float;

in vec3 position;
in vec3 normal;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

out vec3 vNormal;
out vec3 vPosition;

void main() {
  vNormal = normal;
  // mat3 m = mat3( instanceMatrix );
	// vNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	// vNormal = m * vNormal;
  vNormal = normalMatrix * vNormal;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vPosition = mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;;
}`;

const instancedVs = `precision highp float;

in vec3 position;
in vec3 normal;
in mat4 instanceMatrix;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

out vec3 vNormal;
out vec3 vPosition;

void main() {
  vNormal = normal;
  mat3 m = mat3( instanceMatrix );
	vNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	vNormal = m * vNormal;
  vNormal = normalMatrix * vNormal;

  vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vPosition = mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;;
}`;

const fragmentShader = `precision highp float;

layout(location = 0) out vec4 position;
layout(location = 1) out vec4 normal;

uniform float near;
uniform float far;

in vec3 vNormal;
in vec3 vPosition;
in vec3 lDir;

float linearizeDepth(float z) {
  return (2.0 * near) / (far + near - z * (far - near));	
}

${hsl}

void main() {
  float d = linearizeDepth(length( vPosition ));
  position = vec4(vPosition, d);
  normal = vec4(normalize(vNormal), 1.);
}
`;

const ssaoFs = `precision highp float;

uniform sampler2D colorMap; 
uniform sampler2D positionMap;
uniform sampler2D normalMap;
uniform float bias;
uniform float radius;
uniform vec2 attenuation;
uniform float time;

in vec2 vUv;

out vec4 fragColor;

float sampleBuffer( vec3 position, vec3 normal, vec2 uv) {

  vec3 samplePosition = texture(positionMap, uv ).xyz;

  vec3 dir = samplePosition - position;
  float intensity = max( dot( normalize( dir ), normal ) - bias, 0.0 );

  float dist = length( dir );
  float factor = 1.0 / ( attenuation.x + ( attenuation.y * dist ) );

  return intensity * factor;
}

float random(vec2 n, float offset ){
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

#define M_PI 3.1415926535897932384626433832795

void main() {
  vec2 size = vec2(textureSize(colorMap, 0));
  vec2 inc = 1. / size;

  vec4 posDepth = texture(positionMap, vUv );
  vec3 position = posDepth.xyz;
  vec3 normal = normalize(texture(normalMap, vUv ).xyz);
  vec2 randVec = normalize( vec2( random( vUv, 1. ), random( vUv.yx, 1. ) ) );

  float depth = posDepth.w;

  float kRadius = radius * ( 1.0 - depth );

  vec4 acCol = vec4(0.);

  vec2 k[ 4 ];
  k[ 0 ] = vec2(  0.0,  1.0 );
  k[ 1 ] = vec2(  1.0,  0.0 );
  k[ 2 ] = vec2(  0.0, -1.0 );
  k[ 3 ] = vec2( -1.0,  0.0 );

  const float v = M_PI / 4.;

  float occlusion = 0.0;
  for( int i = 0; i < 4; ++i ){
    vec2 k1 = reflect( k[ i ], randVec );
    vec2 k2 = vec2( k1.x * v - k1.y * v, k1.x * v + k1.y * v );
    k1 *= inc;
    k2 *= inc;

    occlusion += sampleBuffer( position, normal, vUv + k1 * kRadius );
    occlusion += sampleBuffer( position, normal, vUv + k2 * kRadius * 0.75 );
    occlusion += sampleBuffer( position, normal, vUv + k1 * kRadius * 0.5 );
    occlusion += sampleBuffer( position, normal, vUv + k2 * kRadius * 0.25 );
  }

  occlusion /= 16.0;
  occlusion = clamp( occlusion, 0.0, 1.0 );

  vec4 color = texture(colorMap, vUv);
  vec3 finalColor = color.rgb * (1.-.5*occlusion);

	fragColor = vec4(finalColor.rgb, 1. );
}`;

class SSAO {
  constructor() {
    this.renderTarget = new WebGLMultipleRenderTargets(1, 1, 2);
    for (const texture of this.renderTarget.texture) {
      texture.minFilter = NearestFilter;
      texture.magFilter = NearestFilter;
      texture.type = FloatType;
    }

    this.instancedShader = new RawShaderMaterial({
      uniforms: {
        far: { value: 0 },
        near: { value: 0 },
      },
      vertexShader: instancedVs,
      fragmentShader,
      glslVersion: GLSL3,
    });

    this.singleShader = new RawShaderMaterial({
      uniforms: {
        far: { value: 0 },
        near: { value: 0 },
      },
      vertexShader: singleVs,
      fragmentShader,
      glslVersion: GLSL3,
    });

    this.scene = new Scene();
    this.camera = new OrthographicCamera(
      1 / -2,
      1 / 2,
      1 / 2,
      1 / -2,
      0.00001,
      1000
    );
    this.quad = new Mesh(new PlaneGeometry(1, 1), this.instancedShader);
    this.quad.scale.set(1, 1, 1);
    this.scene.add(this.quad);

    this.colorFBO = getFBO(1, 1, true);

    this.positions = this.renderTarget.texture[0];
    this.normals = this.renderTarget.texture[1];

    const s = 2;

    this.ssaoShader = new RawShaderMaterial({
      uniforms: {
        colorMap: { value: this.colorFBO.texture },
        positionMap: { value: this.positions },
        normalMap: { value: this.normals },
        bias: { value: 0.05 },
        radius: { value: 20 },
        attenuation: { value: new Vector2(0.5, 5).multiplyScalar(s) },
        time: { value: 0 },
      },
      vertexShader: orthoVs,
      fragmentShader: ssaoFs,
      glslVersion: GLSL3,
    });
    this.pass = new ShaderPass(this.ssaoShader, {});
  }

  setSize(width, height, dpr) {
    const w = width * dpr;
    const h = height * dpr;
    this.renderTarget.setSize(w / 2, h / 2);
    this.quad.scale.set(w, h, 1);
    this.camera.left = -w / 2;
    this.camera.right = w / 2;
    this.camera.top = h / 2;
    this.camera.bottom = -h / 2;
    this.camera.updateProjectionMatrix();
    this.pass.setSize(w, h);
    this.colorFBO.setSize(w, h);
  }

  get output() {
    return this.pass.texture;
  }

  render(renderer, scene, camera) {
    this.instancedShader.uniforms.near.value = camera.near;
    this.instancedShader.uniforms.far.value = camera.far;

    renderer.setRenderTarget(this.colorFBO);
    renderer.render(scene, camera);

    renderer.setRenderTarget(this.renderTarget);
    scene.traverse((o) => {
      if (o.isInstancedMesh) {
        o.userData.material = o.material;
        o.material = this.instancedShader;
      } else if (o.isMesh) {
        o.userData.material = o.material;
        o.material = this.singleShader;
      }
    });
    renderer.render(scene, camera);

    scene.traverse((o) => {
      if (o.isMesh || o.isInstancedMesh) {
        o.material = o.userData.material;
      }
    });
    renderer.setRenderTarget(null);

    this.pass.render(renderer);
  }
}

export { SSAO };
