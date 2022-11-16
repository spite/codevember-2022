import {
  GLSL3,
  RawShaderMaterial,
  DataTexture,
  RGBAFormat,
  LinearFilter,
  FloatType,
  Color,
  AdditiveBlending,
  BufferGeometry,
  BufferAttribute,
  Points,
  NearestFilter,
  UnsignedByteType,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { randomInRange } from "../modules/Maf.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as curl } from "../shaders/curl.js";

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

  //console.log(`[${colors.map((c) => c.getHex()).join(", ")}]`);

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

const heightFn = `
float getHeight(in vec3 point) {
  vec3 point2 = (point * 1. + 123. + time) * .8;
  float perlin1 = noise3d(point + offset);
  float perlin2 = noise3d(point2 - offset);
  return mix(perlin1, perlin2, .5);
}

vec3 getPoint(in vec3 p, out float n) {
  n = getHeight(p*1.);
  return p + normalize(p)* n * 5.;
}`;

const particleVs = `precision highp float;
in vec3 position;

uniform sampler2D positions;
uniform sampler2D gradient;
uniform float dpr;
uniform float time;
uniform vec3 bkgColor;
uniform float offset;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 vColor;
out float vLife;

${noiseCommon}
${noise3d}

${heightFn}

void main() {
  vec2 coord = position.xy;
  vec4 pos = texture(positions, coord);
  float n;
  vec3 dunePos = getPoint(pos.xyz, n);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(dunePos.xyz, 1.);
  vColor = bkgColor;
  gl_PointSize = 6. * dpr;
}`;

const movingParticleVs = `precision highp float;
in vec3 position;

uniform sampler2D positions;
uniform sampler2D gradient;
uniform float dpr;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 vColor;
out float vLife;

float parabola(in float x, in float k) {
  return pow(4. * x * (1. - x), k);
}

void main() {
  vec2 coord = position.xy;
  vec4 pos = texture(positions, coord);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.xyz, 1.);
  vColor = texture(gradient, vec2(pos.w/100., .5)).xyz;
  gl_PointSize = (1. - (pos.w / 100.)) * 6. * dpr * position.z;
}`;

const particleFs = `precision highp float;
in float vLife;
in vec3 vColor;

out vec4 fragColor;

void main() {
  vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
  if (dot(circCoord, circCoord) > 1.0) {
      discard;
  }
  fragColor = vec4(vColor, .15);
}`;

const width = 512;
const height = 512;
const posData = new Float32Array(width * height * 4);
let ptr = 0;
const r = 1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const phi = Math.acos(2 * Math.random() - 1) - Math.PI / 2;
    const theta = 2 * Math.PI * Math.random();
    posData[ptr] = r * Math.cos(phi) * Math.cos(theta);
    posData[ptr + 1] = r * Math.cos(phi) * Math.sin(theta);
    posData[ptr + 2] = r * Math.sin(phi);
    posData[ptr + 3] = randomInRange(0, 100);
    ptr += 4;
  }
}
const posTexture = new DataTexture(
  posData,
  width,
  height,
  RGBAFormat,
  FloatType,
  undefined,
  undefined,
  undefined,
  NearestFilter,
  NearestFilter
);
posTexture.needsUpdate = true;

const simFs = `precision highp float;
precision highp sampler3D;

in vec2 vUv;

uniform sampler2D inputTexture;
uniform sampler2D originTexture;
uniform float persistence;
uniform float time;
uniform float dt;
uniform float offset;

out vec4 fragColor;

${noiseCommon}
${curl}
${noise3d}
${noise2d}
${heightFn}

void main() {
  vec4 pos = texture(inputTexture, vUv);
  float n;

  pos.w += dt;
  if(pos.w>100.) {
    pos.w -= 100.;
    pos.xyz = texture(originTexture, vUv).xyz;
    pos.xyz = getPoint(normalize(pos.xyz), n);
  }

  pos.xyz = pos.xyz + .05 * normalize(curlNoise(pos.xyz * .1 + offset, time)) + .01 * vec3(snoise(pos.xy), snoise(pos.yz), snoise(pos.xz));
  vec3 t = getPoint(normalize(pos.xyz), n);
  if(length(t.xyz) > length(pos.xyz)) {
    pos.xyz = t.xyz;
  }
 
  fragColor = pos;
}`;

const simShader = new RawShaderMaterial({
  uniforms: {
    inputTexture: { value: posTexture },
    originTexture: { value: posTexture },
    persistence: { value: 1 },
    time: { value: 0 },
    offset: { value: 0 },
    dt: { value: 0 },
  },
  vertexShader: orthoVs,
  fragmentShader: simFs,
  glslVersion: GLSL3,
});

const simulation = new ShaderPingPongPass(simShader, {
  format: RGBAFormat,
  type: FloatType,
  minFilter: NearestFilter,
  magFilter: NearestFilter,
});
simulation.setSize(width, height);

const material = new RawShaderMaterial({
  uniforms: {
    positions: { value: posTexture },
    gradient: { value: null },
    time: { value: 0 },
    offset: { value: 0 },
    dpr: { value: 1 },
    bkgColor: { value: new Color() },
  },
  vertexShader: particleVs,
  fragmentShader: particleFs,
  glslVersion: GLSL3,
  transparent: true,
  blending: AdditiveBlending,
});

const geo = new BufferGeometry();
const vertices = new Float32Array(width * height * 3);
ptr = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    vertices[ptr] = x / width;
    vertices[ptr + 1] = y / width;
    vertices[ptr + 2] = randomInRange(1, 2);
    ptr += 3;
  }
}
geo.setAttribute("position", new BufferAttribute(vertices, 3));
const mesh = new Points(geo, material);

const material2 = new RawShaderMaterial({
  uniforms: {
    positions: { value: posTexture },
    gradient: { value: null },
    dpr: { value: 1 },
  },
  vertexShader: movingParticleVs,
  fragmentShader: particleFs,
  glslVersion: GLSL3,
  transparent: true,
  blending: AdditiveBlending,
});
const geo2 = new BufferGeometry();
const vertices2 = new Float32Array(width * height * 3);
ptr = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    vertices2[ptr] = x / width;
    vertices2[ptr + 1] = y / width;
    vertices2[ptr + 2] = randomInRange(1, 2);
    ptr += 3;
  }
}
geo2.setAttribute("position", new BufferAttribute(vertices2, 3));
const mesh2 = new Points(geo2, material2);

function step(renderer, t, dt) {
  simulation.shader.uniforms.dt.value = dt;
  simulation.shader.uniforms.time.value = t;
  mesh.material.uniforms.time.value = t;
  simulation.render(renderer);
  simulation.shader.uniforms.inputTexture.value =
    simulation.fbos[simulation.currentFBO].texture;
}

function randomizeColors() {
  const { bkg, gradientTex } = randomizePalette();
  material.uniforms.bkgColor.value.copy(bkg);
  material.uniforms.gradient.value = material2.uniforms.gradient.value =
    gradientTex;
  return bkg;
}

export { mesh, mesh2, simulation, posTexture, step, randomizeColors };
