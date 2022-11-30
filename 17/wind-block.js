import {
  InstancedMesh,
  BufferGeometry,
  RawShaderMaterial,
  BufferAttribute,
  GLSL3,
  Matrix4,
  DoubleSide,
  Vector3,
  Data3DTexture,
  FloatType,
  LinearFilter,
  RGBAFormat,
  RedFormat,
  RepeatWrapping,
} from "../third_party/three.module.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { randomInRange } from "../modules/Maf.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as curl } from "../shaders/curl.js";
import { Shader3DPass } from "../modules/Shader3DPass.js";

function buildLineGeometry() {
  const geometry = new BufferGeometry();

  const LINES = 1;
  const positions = new Float32Array(4 * 3 * LINES);
  const w = 0.1;
  const h = 0.02;
  let ptr = 0;
  const d = 0.5;
  for (let i = 0; i < LINES; i++) {
    const x = 0;
    const y = 0;
    const z = 0;
    positions[ptr + 0] = x - w;
    positions[ptr + 1] = y - h;
    positions[ptr + 2] = z;
    positions[ptr + 3] = x + w;
    positions[ptr + 4] = y - h;
    positions[ptr + 5] = z;
    positions[ptr + 6] = x - w;
    positions[ptr + 7] = y + h;
    positions[ptr + 8] = z;
    positions[ptr + 9] = x + w;
    positions[ptr + 10] = y + h;
    positions[ptr + 11] = z;
    ptr += 12;
  }

  const indices = [];
  ptr = 0;
  for (let i = 0; i < LINES; i++) {
    indices.push(...[ptr + 0, ptr + 1, ptr + 2]);
    indices.push(...[ptr + 3, ptr + 2, ptr + 1]);
    ptr += 4;
  }
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setIndex(indices);

  return geometry;
}

function buildArrowGeometry() {
  const geometry = new BufferGeometry();

  const LINES = 1;
  const positions = new Float32Array(3 * 3 * LINES);
  const w = 0.1;
  const h = 0.02;
  let ptr = 0;
  const d = 0.5;
  for (let i = 0; i < LINES; i++) {
    const x = 0; //randomInRange(-d, d);
    const y = 0; //randomInRange(-d, d);
    const z = 0; //randomInRange(-d, d);
    positions[ptr + 0] = x - w;
    positions[ptr + 1] = y - h;
    positions[ptr + 2] = z;
    positions[ptr + 3] = x + w;
    positions[ptr + 4] = y;
    positions[ptr + 5] = z;
    positions[ptr + 6] = x - w;
    positions[ptr + 7] = y + h;
    positions[ptr + 8] = z;
    ptr += 9;
  }

  const indices = [];
  ptr = 0;
  for (let i = 0; i < LINES; i++) {
    indices.push(...[ptr + 0, ptr + 1, ptr + 2]);
    ptr += 4;
  }
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  return geometry;
}

const arrowGeometry = buildArrowGeometry();
const lineGeometry = buildLineGeometry();
const geometry = lineGeometry;

const WIDTH = 100;
const HEIGHT = 100;
const DEPTH = 100;
const CELLS = WIDTH * HEIGHT * DEPTH;

const offsets = new Float32Array(CELLS);
let ptr = 0;
const p = new Vector3();
for (let z = 0; z < DEPTH; z++) {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      offsets[ptr] = randomInRange(-10, 10);
      ptr++;
    }
  }
}

const offsetsTex = new Data3DTexture(offsets, WIDTH, HEIGHT, DEPTH);
offsetsTex.format = RedFormat;
offsetsTex.type = FloatType;
offsetsTex.minFilter = LinearFilter;
offsetsTex.magFilter = LinearFilter;
offsetsTex.needsUpdate = true;

const vertexShader = `precision highp float;
precision highp sampler3D;

in vec3 position;
in mat4 instanceMatrix;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform sampler3D directionsTex;

out float v;
out vec3 col;
out float depth;

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
  col = dir + .5;
  vec3 ppos = vec3(position.xy, 0.);
  v = ppos.x + .5 + data.w; 
  pos.xyz -= (size)/ 2.;
  vec4 mvPosition = modelViewMatrix * pos;
  dir = ((modelViewMatrix * vec4(dir, 0.)).xyz);
  float a = atan2(dir.x, dir.y);
  float s = .2;
  gl_Position = projectionMatrix * (mvPosition + vec4(rotate2d(a) * ppos.xy * s, 0., 0.));
  depth = clamp(gl_Position.z / gl_Position.w, 0., 1.);
}`;

const fragmentShader = `precision highp float;

in float v;
in vec3 col;
in float depth;

uniform float time;

out vec4 color;

void main() {
  float c = mod(v+time, 1.);
  if(c<.5) {
    discard;
  }
  if(col.x<0. || col.y <0. || col.z < 0.) {
    discard;
  }
  
  vec3 cc = mix(vec3(255.)/255., vec3(18.)/255., depth);
  color = vec4(cc, 1.);//*vec3(1.-depth), .05);
}`;

const curlFs = `precision highp float;
precision highp sampler3D;

in vec2 vUv;

uniform float z;
uniform float time;
uniform float seed;
uniform float persistence;
uniform sampler3D offsetsTex;

out vec4 color;

${noiseCommon}
${curl}

void main() {
  vec3 coords = vec3(vUv, z);
  float offset = texture(offsetsTex, coords).r;
  vec3 dir = (curlNoise(coords * 1.5, seed + time));
  color = vec4(dir, offset);
}
`;

const curlShader = new RawShaderMaterial({
  uniforms: {
    z: { value: 0 },
    time: { value: 0 },
    persistance: { value: 1 },
    offsetsTex: { value: offsetsTex },
    seed: { value: randomInRange(-1000, 1000) },
  },
  vertexShader: orthoVs,
  fragmentShader: curlFs,
  glslVersion: GLSL3,
  depthTest: false,
});

const curlPass = new Shader3DPass(curlShader, {
  format: RGBAFormat,
  type: FloatType,
  minFilter: LinearFilter,
  magFilter: LinearFilter,
  wrapR: RepeatWrapping,
  wrapS: RepeatWrapping,
  wrapT: RepeatWrapping,
});
curlPass.setSize(WIDTH, HEIGHT, DEPTH);

const material = new RawShaderMaterial({
  uniforms: {
    directionsTex: { value: curlPass.texture },
    time: { value: 0 },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  side: DoubleSide,
  // transparent: true,
  // depthTest: false,
  // depthWrite: false,
  // blending: AdditiveBlending,
});

const mesh = new InstancedMesh(geometry, material, CELLS);
mesh.scale.set(0.033, 0.033, 0.033);
ptr = 0;
const s = 0.1;
const mat = new Matrix4();
for (let z = 0; z < DEPTH; z++) {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      mat.makeTranslation(x, y, z);
      mesh.setMatrixAt(ptr, mat);
      ptr++;
    }
  }
}

function update(renderer, time) {
  curlPass.shader.uniforms.time.value = time;
  for (let z = 0; z < DEPTH; z++) {
    curlPass.shader.uniforms.z.value = z / (DEPTH - 1);
    curlPass.render(renderer, z);
  }
}

export { mesh, update, curlPass, arrowGeometry, lineGeometry };
