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
  RGBFormat,
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
import { natural, natural2 } from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { rad2Deg, randomInRange } from "../modules/Maf.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as curl } from "../shaders/curl.js";

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
  const bkg = gradient.getAt(Math.random(), 1);
  const t = new Color();
  bkg.getHSL(t);
  // t.h -= 0.1;
  t.s /= 2;
  t.l /= 2;
  bkg.setHSL(t.h, t.s, t.l);

  const gradientData = new Uint8Array(palette.length * 4);
  for (let i = 0; i < palette.length; i++) {
    // const c = gradient.getAt(i / palette.length);
    const c = gradient.getAt(Math.random());
    gradientData[i * 4] = c.r * 255;
    gradientData[i * 4 + 1] = c.g * 255;
    gradientData[i * 4 + 2] = c.b * 255;
    gradientData[i * 4 * 3] = 1 * 255;
  }
  const gradientTex = new DataTexture(
    gradientData,
    palette.length,
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
  vec3 point2 = (point * 1. + 123. + time ) * .8;
  float perlin1 = noise3d(point);
  float perlin2 = noise3d(point2);
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
  // vColor = texture(gradient, vec2(pos.w/100., .5)).xyz;
  // vColor /= 10.;
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

  pos.xyz = pos.xyz + .05 * normalize(curlNoise(pos.xyz * .1, time)) + .01 * vec3(snoise(pos.xy), snoise(pos.yz), snoise(pos.xz));
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
