import {
  GLSL3,
  TorusGeometry,
  Mesh,
  RawShaderMaterial,
  DataTexture,
  RGBAFormat,
  LinearFilter,
  IcosahedronGeometry,
  InstancedMesh,
  FloatType,
  Matrix4,
  AdditiveBlending,
  BufferGeometry,
  BufferAttribute,
  Points,
  NearestFilter,
  PlaneGeometry,
  Object3D,
  MeshBasicMaterial,
  DoubleSide,
  Color,
  UnsignedByteType,
  Vector2,
  Group,
  Plane,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { natural, natural2 } from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { randomInRange } from "../modules/Maf.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as curl } from "../shaders/curl.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { scene } from "../modules/renderer.js";

const sand1 = [
  "#b8987a",
  "#caa87f",
  "#dfb98a",
  "#ebc99c",
  "#f3ddb0",
  "#f9e6c1",
  "#fff3d7",
];

const sand2 = ["#f2ead6", "#327172", "#2d3e58", "#f47e72", "#f2cab1"];
const sand3 = ["#f1e2c3", "#8595a4", "#8d4f2a", "#d86b28", "#eca956"];
const sand4 = [
  "#242112",
  "#684f27",
  "#9a733a",
  "#ac8f56",
  "#e5a752",
  "#fdbe6e",
  "#ffd28f",
];
const sand5 = [
  "#44200a",
  "#75380c",
  "#9e5922",
  "#b96525",
  "#da863d",
  "#f5ad63",
  "#fec37d",
];
const palettes = [sand1, sand2, sand3, sand4, sand5];

function randomizePalette() {
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const gradient = new GradientLinear(palette);

  let colors = [];
  const steps = Math.round(randomInRange(3, 6));
  for (let i = 0; i < steps; i++) {
    const c = gradient.getAt(Math.random());
    colors.push(c);
  }

  colors = colors.sort((a, b) => {
    const la = new Color();
    a.getHSL(la);
    const lb = new Color();
    b.getHSL(lb);
    return la.l - lb.l;
  });

  const bkg = colors[0].clone();

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

const heightMapFs = `precision highp float;

in vec2 vUv;

uniform float seed;
uniform float time;
uniform vec2 offset;
uniform float rotation;

uniform float heightMultiplier;
uniform float warpFactor;

out vec4 color;

${noiseCommon}
${noise2d}

#define OCTAVES 4

vec2 warp(in vec2 uv) {
  vec2 q=uv;

  for(float i=1.0;i<2.0;i*=1.1){
    vec2 o=q;
    float s = warpFactor;
    o.x += (.5/i)*cos(s*i*q.y+time/15.+0.03*i)+1.3;
    o.y += (.5/i)*cos(s*i*q.x+time/12.+0.03*(i+10.0))+1.9;
    q=o;
  }
  return q;
}

float getHeight(in vec2 p) {
  float amplitude = 1.;
  float value = 0.;
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * abs(snoise(p + seed + time / 10.));
    amplitude *= .5;
    p *= 2.;
  }

  value = abs(value);
  value = 1. - value;
  value = pow(value, 2.);
  
  return value * heightMultiplier;
}

float parabola(float x, float k) {
  return pow(4. * x * (1. - x), k);
}

float getColor(in vec2 p) {
  float amplitude = 1.;
  float value = 0.;
  for (int i = 0; i < 4; i++) {
    value += amplitude * abs(snoise(p + seed + time / 10.));
    amplitude *= .5;
    p *= 2.;
  }
  
  return value;
}

vec2 rotate(in vec2 p, in float a) {
  vec2 v = p;
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, -s, s, c);
  return m * v ;
}
void main() {
  vec2 uv = vUv;
  vec2 uv2 = warp(rotate(uv, rotation) + offset + vec2(time, 0.));
  float dx = parabola(uv.x, .5);
  float dy = parabola(uv.y, .5);
  float h = getHeight(uv2);
  h = h * dx * dy;
  color = vec4(vec3(getColor(uv2)), h);
}`;

const normalMapFs = `precision highp float;

in vec2 vUv;

uniform sampler2D heightMap;

out vec4 color;

vec4 bumpFromDepth(vec2 uv, vec2 resolution, float scale) {
  vec2 step = 1. / resolution;
    
  float height = texture(heightMap, uv).a;
    
  vec2 dxy = height - vec2(
      texture(heightMap, uv + vec2(step.x, 0.)).a, 
      texture(heightMap, uv + vec2(0., step.y)).a
  );
    
  return vec4(normalize(vec3(dxy * scale / step, 1.)), height);
}

void main() {
  color = bumpFromDepth(vUv, vec2(1000.), .1);
}`;

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat3 normalMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform sampler2D heightMap;
uniform sampler2D normalMap;
uniform float time;
uniform sampler2D gradient;

out vec3 vNormal;
out vec3 vONormal;
out vec3 vPosition;
out vec3 vViewPosition;
out vec3 vLightDir;
out vec2 vUv;
out vec3 vLightPosition;
out float vColor;

float random(vec2 n, float offset ){
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

void main() {
  vUv = uv;
  vec3 p = position;
  p.y = texture(heightMap, uv).a;
  vColor = texture(heightMap, uv).x / 2.;

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.);
  vPosition = mvPosition.xyz;
  vONormal = texture(normalMap, uv).xyz;
  vNormal = normalMatrix * vONormal;
  vViewPosition = mvPosition.xyz;
  vec3 lightPosition = vec3(10.);
  vLightDir = normalize(normalMatrix * vec3(1.));
  vLightPosition = (modelViewMatrix * vec4(lightPosition, 1.) - mvPosition).xyz;
  gl_Position = projectionMatrix * mvPosition;
}`;

const fragmentShader = `precision highp float;

in vec3 vNormal;
in vec3 vONormal;
in vec3 vPosition;
in vec3 vViewPosition;
in vec3 vLightDir;
in vec2 vUv;
in vec3 vLightPosition;
in float vColor;

uniform mat3 normalMatrix;
uniform sampler2D gradient;

out vec4 color;

float random(vec2 n, float offset ){
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

void main() {
  vec3 rand = .1 * normalize(vec3(random(vPosition.xy, 1123.), random(vPosition.xy, 223.), random(vPosition.xy, 33.)));
  vec3 n = normalize(vNormal+rand);
  vec3 on = normalize(vONormal+rand);
  vec3 e = normalize(-vPosition);
  
  vec3 nL = n ;
  vec3 l = normalize(vLightPosition);// - vPosition);
	vec3 h = normalize(l + e);

  float diffuse = max(0.0, dot(nL, l));
  diffuse = .5 + .5 * diffuse;
	float specular = max(0.0, dot(nL, h));
	float specularIntensity = 30.;
	specular = pow(specular, specularIntensity);

  float rim = clamp(0., 1., pow(abs(dot(e, on)), 2.));
  rim = 1. - pow(1.-rim, .2);
  
  vec3 hue = texture(gradient, vec2(vColor + .01 *random(n.xy, 23423.), .5)).xyz;
  color = vec4(hue * vec3(.5 * diffuse + .5 * specular + .5 *  rim), 1.);
}`;

const width = 300;
const height = 300;

const heightShader = new RawShaderMaterial({
  uniforms: {
    time: { value: 0 },
    seed: { value: randomInRange(-1000, 1000) },
    offset: { value: new Vector2() },
    rotation: { value: 0 },
    heightMultiplier: { value: 1 },
    warpFactor: { value: 1.1 },
  },
  vertexShader: orthoVs,
  fragmentShader: heightMapFs,
  glslVersion: GLSL3,
});
const heightPass = new ShaderPass(heightShader, {
  format: RGBAFormat,
  type: FloatType,
});
heightPass.setSize(width, height);

const normalShader = new RawShaderMaterial({
  uniforms: {
    heightMap: { value: heightPass.texture },
  },
  vertexShader: orthoVs,
  fragmentShader: normalMapFs,
  glslVersion: GLSL3,
});
const normalPass = new ShaderPass(normalShader, {
  format: RGBAFormat,
  type: FloatType,
});
normalPass.setSize(width, height);

const material = new RawShaderMaterial({
  uniforms: {
    heightMap: { value: heightPass.texture },
    normalMap: { value: normalPass.texture },
    gradient: { value: randomizePalette().gradientTex },
    time: { value: 0 },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  // wireframe: true,
});

function generateDiamondGridPlane(
  width,
  height,
  segmentsWidth,
  segmentsHeight
) {
  const geometry = new PlaneGeometry(
    width,
    height,
    segmentsWidth,
    segmentsHeight
  );

  const indices = [];
  const rowWidth = segmentsWidth + 1;
  for (let y = 0; y < segmentsHeight; y++) {
    for (let x = 0; x < segmentsWidth; x++) {
      const a = y * rowWidth + x;
      const b = y * rowWidth + x + 1;
      const c = (y + 1) * rowWidth + x;
      const d = (y + 1) * rowWidth + x + 1;
      if (y % 2 === 0) {
        if (x % 2 === 0) {
          indices.push(...[c, b, a]);
          indices.push(...[c, d, b]);
        } else {
          indices.push(...[d, b, a]);
          indices.push(...[c, d, a]);
        }
      } else {
        if (x % 2 === 0) {
          indices.push(...[d, b, a]);
          indices.push(...[c, d, a]);
        } else {
          indices.push(...[c, b, a]);
          indices.push(...[c, d, b]);
        }
      }
    }
  }
  geometry.setIndex(indices);
  return geometry;
}

const geometry = generateDiamondGridPlane(10, 10, width, height);
geometry.rotateX(-Math.PI / 2);
const mesh = new Mesh(geometry, material);
mesh.position.y = 1;

// const debug = new Mesh(
//   new PlaneGeometry(1, 1),
//   new MeshBasicMaterial({ map: normalPass.texture })
// );
function step(renderer, time, offset, rotation) {
  heightPass.shader.uniforms.offset.value.copy(offset);
  heightPass.shader.uniforms.rotation.value = rotation;
  heightPass.shader.uniforms.time.value = time;
  heightPass.render(renderer);
  normalPass.render(renderer);
}

const group = new Group();
group.add(mesh);

const bottom = new Mesh(
  new PlaneGeometry(10, 10),
  new MeshBasicMaterial({ color: 0 })
);
bottom.geometry.rotateX(Math.PI / 2);
bottom.position.y = 1;
group.add(bottom);

const shadow = new Mesh(
  new PlaneGeometry(10, 10),
  new MeshBasicMaterial({ color: 0 })
);
shadow.geometry.rotateX(-Math.PI / 2);
scene.add(shadow);

function randomize() {
  heightPass.shader.uniforms.heightMultiplier.value = randomInRange(1, 2);
  heightPass.shader.uniforms.warpFactor.value = randomInRange(0.8, 1.2);

  const { bkg, gradientTex } = randomizePalette();
  material.uniforms.gradient.value = gradientTex;

  const c = bottom.material.color;
  const t = new Color();
  bkg.getHSL(t);
  t.s /= 2;
  t.l /= 2;
  c.setHSL(t.h, t.s, t.l);
  bottom.material.color.copy(c);
  shadow.material.color.copy(c);

  return bkg;
}

export { group, step, randomize };
