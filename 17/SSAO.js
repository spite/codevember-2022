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
  DataTexture,
  RGBAFormat,
  UnsignedByteType,
  LinearFilter,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as hsl } from "../shaders/hsl.js";
import { shader as screen } from "../shaders/screen.js";
import { mod } from "../modules/Maf.js";

const refs = [
  [2967132, 3170409, 4671067, 15911601],
  [13461288, 8879740, 9083045, 14340540],
  [8544560, 9333301, 16699532, 16765583],
  [3103077, 10006951, 15965066, 15904924, 15911601],
  [3033437, 9809829, 15961727, 13489090, 15911087],
  [5587489, 11110993, 13868883, 16765583],
  [10517571, 13343827, 15840097, 16765583],
  [10179625, 9068616, 15178571, 13946298],
  [2966619, 3103334, 15911601, 15911601],
  [4530186, 7550731, 14650692, 15771228],
  [4721927, 4721927, 4918278, 5901318, 16558112, 9817289],
  [7604996, 15433495, 16498260, 9817289, 16567714],
  [3473408, 5374977, 10651460, 15559189, 13088113],
  [4719360, 11370015, 14962958, 15357455, 16249260],
  [4721927, 1676705, 13648395, 16681522, 14473124],
  [4721927, 4721927, 1085854, 4235676, 16496709],
  [4721927, 3711915, 7123102, 16679975, 16507333],
  [4721927, 7801604, 16559661, 16309143, 16113829],
  [7691087, 16486192, 12359802],
  [5508637, 12345129, 16692073, 16563839],
  [7284775, 9923966, 9468310, 15234599, 16692073],
  [5589910, 16137325, 13671093, 15510716, 16709346],
  [7035549, 16423860, 15510716],
  [9715564, 16561152, 15216436],
  [5786517, 9926311, 15510716, 15510716],
  [7692704, 9532070, 15510716, 16704934, 16492991],
  [7626911, 16489480, 16420109, 15510716],
  [1188974, 815571, 1082845, 1149663, 15759921, 15059646],
  [1462196, 11024936, 881876, 16015874, 15059645],
  [548041, 548297, 11575599],
  [7553371, 749009, 15822621, 13489380],
  [734337, 2833534, 1216225, 16016899],
  [6701927, 938400, 482248, 12804628],
  [665717, 5719413, 3689108, 682191, 11575599, 11575599],
  [869523, 1008307, 748240, 9345469],
  [2504571, 10959401, 11575599, 15059388],
  [1145290, 815058, 11575599, 5135764],
  [733053, 3556996, 16353806, 16556308, 15441779],
  [8143997, 16143391, 16206455, 15510716, 15510716],
  [9322608, 13906753, 15543857, 10714538, 16134758, 16424630],
  [7692704, 8875172, 12554161, 16633689, 16279180, 15510716],
  [9388143, 9138085, 16072486, 16562634],
];

function randomizePalette() {
  const ref = refs[Math.floor(Math.random() * refs.length)];
  let colors = ref.map((v) => new Color().setHex(v));

  const bkg = colors[0].clone();
  const t = new Color();
  bkg.getHSL(t);
  // t.h -= 0.1;
  t.s /= 2;
  t.l /= 2;
  bkg.setHSL(t.h, t.s, t.l);

  const gradientData = new Uint8Array(colors.length * 4);
  for (let i = 0; i < colors.length; i++) {
    const c = colors[i];
    gradientData[i * 4] = c.r * 255;
    gradientData[i * 4 + 1] = c.g * 255;
    gradientData[i * 4 + 2] = c.b * 255;
    gradientData[i * 4 * 3] = 1 * 255;
  }
  const gradientTex = new DataTexture(
    gradientData,
    colors.length,
    1,
    RGBAFormat,
    UnsignedByteType,
    undefined,
    undefined,
    undefined,
    LinearFilter,
    LinearFilter
  );
  gradientTex.needsUpdate = true;
  return { bkg, gradientTex };
}

const vertexShader = `precision highp float;
precision highp sampler3D;

in vec3 position;
in mat4 instanceMatrix;
in vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform sampler3D directionsTex;

out float v;
out vec3 col;
out float depth;
out vec3 vPosition;

mat2 rotate2d(float angle) {
  return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

#define PI 3.1415926535897932384626433832795

float atan2(in float y, in float x) {
  bool s = (abs(x) > abs(y));
  return mix(PI/2.0 - atan(x,y), atan(y,x), s);
}

void main() {
  vec4 pos = instanceMatrix * vec4(vec3(0.), 1.0);
  vec3 size = vec3(textureSize(directionsTex, 0));
  vec4 data = texture(directionsTex, pos.xyz/size);
  vec3 dir = data.xyz;
  col = dir + 1.;
  vec3 ppos = vec3(position.xy, 0.);
  v = ppos.x + .5 + data.w; 
  pos.xyz -= (size)/ 2.;
  vec4 mvPosition = modelViewMatrix * pos;
  dir = ((modelViewMatrix * vec4(dir, 0.)).xyz);
  float a = atan2(dir.x, dir.y);
  float s = .2;
  vec4 mvP =  (mvPosition + vec4(rotate2d(a) * ppos.xy * s, 0., 0.));
  vPosition = mvP.xyz;
  gl_Position = projectionMatrix * mvP;
  depth = clamp(gl_Position.z / gl_Position.w, 0., 1.);
}`;

const fragmentShader = `precision highp float;

in float v;
in vec3 col;
in float depth;
in vec3 vPosition;

uniform float time;
uniform float near;
uniform float far;

uniform sampler2D gradientFrom; 
uniform sampler2D gradientTo;
uniform vec3 bkgColorFrom;
uniform vec3 bkgColorTo;
uniform float interpolate;

layout(location = 0) out vec4 position;
layout(location = 1) out vec4 normal;
layout(location = 2) out vec4 color;

float linearizeDepth(float z) {
  return (2.0 * near) / (far + near - z * (far - near));	
}

void main() {
  float c = mod(v+time, 1.);
  
  if(c<length(col)-1.5) {
    discard;
  }
  
  if(col.x<0. || col.y <0. || col.z < 0.) {
    discard;
  }

  vec2 uv = vec2(length(col)/4., .5);
  vec3 from = texture(gradientFrom, uv).rgb;
  vec3 to = texture(gradientTo, uv).rgb;
  vec3 mixCol = mix(from, to, interpolate);
  vec3 bkg = mix(bkgColorFrom, bkgColorTo, interpolate);

  vec3 cc = mix(mixCol, bkg, depth);
  color = vec4(cc, 1.);

  float d = linearizeDepth(vPosition.z);
  position = vec4(vPosition, d);

  vec3 X = dFdx(vPosition);
  vec3 Y = dFdy(vPosition);
  normal = vec4(normalize(cross(X,Y)), 1.);
}`;

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

  // vec4 acCol = vec4(0.);

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

    // float s = 1.;
    // acCol += texture(colorMap, vUv + s * k1 * kRadius );
    // acCol += texture(colorMap, vUv + s * k2 * kRadius * 0.75 );
    // acCol += texture(colorMap, vUv + s * k1 * kRadius * 0.5 );
    // acCol += texture(colorMap, vUv + s * k2 * kRadius * 0.25 );
  }

  occlusion /= 16.0;
  occlusion = clamp( occlusion, 0.0, 1.0 );

  // acCol /= 16.;

  // fragColor = acCol;
  fragColor = vec4(occlusion);
}`;

const combineFs = `precision highp float;

in vec2 vUv;

uniform sampler2D colorMap;
uniform sampler2D ssaoMap;
uniform vec3 bkgColor;

out vec4 color;

${hsl}

vec3 czm_saturation(vec3 rgb, float adjustment) {
  // Algorithm from Chapter 16 of OpenGL Shading Language
  const vec3 W = vec3(0.2125, 0.7154, 0.0721);
  vec3 intensity = vec3(dot(rgb, W));
  return mix(intensity, rgb, adjustment);
}

void main() {
  vec4 c = texture(colorMap, vUv);
  vec4 s = texture(ssaoMap, vUv);
  float occlusion = s.r;

  vec3 hsl = rgb2hsv(c.rgb);
  hsl.z *= 1.-occlusion;
  color.rgb = hsv2rgb(hsl);
  color.rgb = mix(color.rgb, bkgColor.rgb, occlusion);
	color.a = 1.;
}`;

class SSAO {
  constructor(renderer) {
    this.renderer = renderer;
    this.renderTarget = new WebGLMultipleRenderTargets(1, 1, 3, { samples: 4 });
    for (const texture of this.renderTarget.texture) {
      texture.minFilter = NearestFilter;
      texture.magFilter = NearestFilter;
      texture.type = FloatType;
    }

    this.shader = new RawShaderMaterial({
      uniforms: {
        directionsTex: { value: null },
        time: { value: 0 },
        far: { value: 0 },
        near: { value: 0 },
        bkgColorFrom: { value: new Color() },
        bkgColorTo: { value: new Color() },
        gradientFrom: { value: null },
        gradientTo: { value: null },
        interpolate: { value: 0 },
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

    const { bkg, gradientTex } = randomizePalette();
    this.bkgFrom = bkg.clone();
    this.bkgTo = bkg.clone();
    this.paletteFrom = gradientTex;
    this.paletteTo = gradientTex;
    this.randomizeColors();
    this.prevT = 0;
    this.bkg = new Color();

    const s = 2;

    this.ssaoShader = new RawShaderMaterial({
      uniforms: {
        colorMap: { value: this.color },
        positionMap: { value: this.positions },
        normalMap: { value: this.normals },
        bias: { value: 0.05 },
        radius: { value: 10 },
        attenuation: { value: new Vector2(0.5, 1).multiplyScalar(s) },
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
    this.ssaoPass.setSize(w / 2, h / 2);
    this.combinePass.setSize(w, h);
  }

  get output() {
    return this.combinePass.texture;
  }

  randomizeColors() {
    this.bkgFrom = this.bkgTo;
    this.paletteFrom = this.paletteTo;
    const { bkg, gradientTex } = randomizePalette();
    this.bkgTo = bkg;
    this.paletteTo = gradientTex;
    this.shader.uniforms.bkgColorFrom.value.copy(this.bkgFrom);
    this.shader.uniforms.bkgColorTo.value.copy(this.bkgTo);
    this.shader.uniforms.gradientFrom.value = this.paletteFrom;
    this.shader.uniforms.gradientTo.value = this.paletteTo;
  }

  interpolate(time) {
    let t = mod(time, 10) / 10;
    if (t < this.prevT) {
      this.randomizeColors();
    }
    this.prevT = t;
    this.shader.uniforms.interpolate.value = t;
    this.bkg.copy(this.bkgFrom).lerp(this.bkgTo, t);
    this.renderer.setClearColor(this.bkg, 1);
    this.combineShader.uniforms.bkgColor.value.copy(this.bkg);
  }

  render(scene, camera) {
    this.renderer.setClearColor(this.bkg, 1);
    this.shader.uniforms.near.value = camera.near;
    this.shader.uniforms.far.value = camera.far;

    this.renderer.setRenderTarget(this.renderTarget);
    scene.overrideMaterial = this.shader;
    this.renderer.render(scene, camera);
    scene.overrideMaterial = null;
    this.renderer.setRenderTarget(null);

    this.ssaoPass.render(this.renderer);
    this.combinePass.render(this.renderer);
  }
}

export { SSAO };
