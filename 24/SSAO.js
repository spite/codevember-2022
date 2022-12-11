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
  Color,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as hsl } from "../shaders/hsl.js";
import { shader as screen } from "../shaders/screen.js";

const vertexShader = `precision highp float;

in vec3 position;
in mat4 instanceMatrix;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform sampler2D gradientTexture;
uniform float types;

uniform sampler2D positionTexture;
uniform sampler2D velocityTexture;

out vec3 vColor;
out vec4 vMVPosition;

mat4 lookAt(vec3 eye, vec3 at, vec3 up) {
  vec3 zaxis = normalize(at - eye);
  vec3 xaxis = normalize(cross(zaxis, up));
  vec3 yaxis = cross(xaxis, zaxis);

  // negate(zaxis);
  zaxis = -zaxis;

  mat4 viewMatrix = mat4(
    xaxis.x, xaxis.y, xaxis.z, -dot(xaxis, eye),
    yaxis.x, yaxis.y, yaxis.z, -dot(yaxis, eye),
    zaxis.x, zaxis.y, zaxis.z, -dot(zaxis, eye),
    0, 0, 0, 1
  );

  return viewMatrix;
}

void main() {
  float x = instanceMatrix[0][0];
  float y = instanceMatrix[1][0];
  vec2 particleUv = vec2(x, y) / vec2(textureSize(positionTexture, 0));
  vec4 velocity = texture(velocityTexture, particleUv);
  vec4 particle = texture(positionTexture, particleUv);
  float scale = .5 + .5 * velocity.w;
  mat4 rot = lookAt(particle.xyz, particle.xyz + velocity.xyz, vec3(0., 1., 0.));
  vMVPosition = modelViewMatrix * vec4((rot * vec4(position * scale * 2., 1.)).xyz + particle.xyz, 1.);
  gl_Position = projectionMatrix * vMVPosition;
  vColor = texture(gradientTexture, vec2((particle.w + .5)  / types, .5)).xyz;
}`;

const fragmentShader = `precision highp float;

layout(location = 0) out vec4 position;
layout(location = 1) out vec4 normal;
layout(location = 2) out vec4 color;

uniform float near;
uniform float far;
uniform vec3 bkgColor;

in vec3 vColor;
in vec4 vMVPosition;
in vec3 lDir;

float linearizeDepth(float z) {
  return (2.0 * near) / (far + near - z * (far - near));	
}

void main() {
  vec3 X = dFdx(vMVPosition.xyz);
  vec3 Y = dFdy(vMVPosition.xyz);
  vec3 n = normalize(cross(X,Y));

  float diffuse = .5 + .5 * max(dot(n, normalize(vec3(1.))), 0.);
  vec3 c = vColor;
  c += .1 * n.y;
  color = vec4(vec3(c * diffuse), 1.);

  float d = linearizeDepth(length( vMVPosition.xyz ));
  position = vec4(vMVPosition.xyz, d);
  normal = vec4(n, 1.);
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

${hsl}

${screen}

vec3 czm_saturation(vec3 rgb, float adjustment)
{
    // Algorithm from Chapter 16 of OpenGL Shading Language
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

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

    float s = 1.;
    acCol += texture(colorMap, vUv + s * k1 * kRadius );
    acCol += texture(colorMap, vUv + s * k2 * kRadius * 0.75 );
    acCol += texture(colorMap, vUv + s * k1 * kRadius * 0.5 );
    acCol += texture(colorMap, vUv + s * k2 * kRadius * 0.25 );
  }

  occlusion /= 16.0;
  occlusion = clamp( occlusion, 0.0, 1.0 );

  acCol /= 16.;

  fragColor = vec4(acCol.rgb, occlusion);
}`;

const combineFs = `precision highp float;

in vec2 vUv;

uniform sampler2D colorMap;
uniform sampler2D ssaoMap;
uniform vec3 bkgColor;

out vec4 color;

${hsl}
${screen}

vec3 czm_saturation(vec3 rgb, float adjustment) {
  // Algorithm from Chapter 16 of OpenGL Shading Language
  const vec3 W = vec3(0.2125, 0.7154, 0.0721);
  vec3 intensity = vec3(dot(rgb, W));
  return mix(intensity, rgb, adjustment);
}

void main() {
  vec4 c = texture(colorMap, vUv);
  vec4 s = texture(ssaoMap, vUv);
  float occlusion = s.a;

  c.rgb = screen(c.rgb, s.rgb, .1);
	vec3 hsl = rgb2hsv(c.rgb);
	hsl.z *= 1.-1.5*occlusion;//* (1.-hsl.z);
  hsl.z = clamp(hsl.z, 0., 1.);
  vec3 finalColor = hsv2rgb(hsl);

	color = vec4(finalColor.rgb, 1. );
}`;

class SSAO {
  constructor() {
    this.renderTarget = new WebGLMultipleRenderTargets(1, 1, 3);
    for (const texture of this.renderTarget.texture) {
      texture.minFilter = NearestFilter;
      texture.magFilter = NearestFilter;
      texture.type = FloatType;
    }

    this.shader = new RawShaderMaterial({
      uniforms: {
        far: { value: 0 },
        near: { value: 0 },
        positionTexture: { value: null },
        velocityTexture: { value: null },
        gradientTexture: { value: null },
        types: { value: 0 },
        bkgColor: { value: new Color() },
      },
      vertexShader,
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
    this.quad = new Mesh(new PlaneGeometry(1, 1), this.shader);
    this.quad.scale.set(1, 1, 1);
    this.scene.add(this.quad);

    this.positions = this.renderTarget.texture[0];
    this.normals = this.renderTarget.texture[1];
    this.color = this.renderTarget.texture[2];

    const s = 2;

    this.ssaoShader = new RawShaderMaterial({
      uniforms: {
        colorMap: { value: this.color },
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
    this.ssaoPass = new ShaderPass(this.ssaoShader, {});

    this.combineShader = new RawShaderMaterial({
      uniforms: {
        colorMap: { value: this.color },
        ssaoMap: { value: this.ssaoPass.texture },
        bkgColor: { value: new Color() },
      },
      vertexShader: orthoVs,
      fragmentShader: combineFs,
      glslVersion: GLSL3,
    });
    this.combinePass = new ShaderPass(this.combineShader, {});
  }

  setSize(width, height, dpr) {
    const w = width * dpr;
    const h = height * dpr;
    this.renderTarget.setSize(w, h);
    this.quad.scale.set(w, h, 1);
    this.camera.left = -w / 2;
    this.camera.right = w / 2;
    this.camera.top = h / 2;
    this.camera.bottom = -h / 2;
    this.camera.updateProjectionMatrix();
    this.ssaoPass.setSize(w / 4, h / 4);
    this.combinePass.setSize(w, h);
  }

  get output() {
    return this.ssaoPass.texture;
  }

  render(renderer, scene, camera) {
    this.shader.uniforms.near.value = camera.near;
    this.shader.uniforms.far.value = camera.far;

    renderer.setRenderTarget(this.renderTarget);
    scene.overrideMaterial = this.shader;
    renderer.render(scene, camera);
    scene.overrideMaterial = null;
    renderer.setRenderTarget(null);

    this.ssaoPass.render(renderer);
    this.combinePass.render(renderer, true);
  }
}

export { SSAO };
