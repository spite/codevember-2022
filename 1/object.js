import {
  GLSL3,
  TorusGeometry,
  Mesh,
  RawShaderMaterial,
  DataTexture,
  RGBAFormat,
  LinearFilter,
  TextureLoader,
  TorusKnotGeometry,
  BackSide,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { randomInRange } from "../modules/Maf.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform float time;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec4 vPosition;
out vec4 mvPosition;
out vec3 vNormal;
out vec2 vUv;

${noiseCommon}
${noise3d}

void main() {
  vUv = uv;
  vNormal = normalMatrix * normal;
  float n = .5 + noise3d(position + time / 10000.) * .5;
  vec3 p = position;// + normal * n * .25;
  vPosition = vec4(p, 1.);
  mvPosition = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mvPosition;
}`;

const fragmentShader = `precision highp float;

in vec4 mvPosition;
in vec4 vPosition;
in vec3 vNormal;
in vec2 vUv;

uniform float seed;
uniform float time;
uniform sampler2D noiseTexture;
uniform sampler2D matCapMap;
uniform bool matcap;

out vec4 color;

${noiseCommon}
${noise2d}

// https://www.shadertoy.com/view/4djGRh

#define NUM_CELLS 4.0
#define TILES 1.0

vec2 Hash2(vec2 p) {
  float t = fract(time/1000.*.0003);
  return texture(noiseTexture, p*vec2(.135+t, .2325-t), -100.0).xy;
}

float Cells(in vec2 p, in float numCells) {
  p *= numCells;
  float d = 1.0e10;
  for (int xo = -1; xo <= 1; xo++) {
    for (int yo = -1; yo <= 1; yo++) {
      vec2 tp = floor(p) + vec2(xo, yo);
      tp = p - tp - Hash2(mod(tp, numCells / TILES));
      d = min(d, dot(tp, tp));
    }
  }
  return sqrt(d);
}

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {

  // calculate matcap coordinates.
  vec3 n = normalize(vNormal);
  vec3 eye = normalize(mvPosition.xyz);
  vec3 r = reflect( eye, n );
  float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
  vec2 vN = r.xy / m + .5;
  // lookup matcap.
  vec4 mat = texture(matCapMap, vN);

  float rim = dot(n, -eye);

  vec2 uv = vUv;
  float t = seed + time/10000.;
  float cr = .5 + .5 * Cells(uv + .9 * t, NUM_CELLS);
  float cg = .5 + .5 * Cells(uv + 1.1 * t, NUM_CELLS);
  float cb = .5 + .5 * Cells(uv + .8 * t, NUM_CELLS);
  
  vec3 col = vec3(cr, cg, cb);
  col = pow(col, vec3(4.));
  float v = length(col);

  color = 2.*vec4(col, 1.);
  if(matcap) {
    color.rgb *= vec3(1.) * clamp(pow(luma(mat.rgb), 3.), 0., 1.);
  }
}`;

// const geometry = new TorusGeometry(1, 0.5, 40, 200);
const geometry = new TorusKnotGeometry(1, 0.4, 200, 40, 1, 3);
//const geometry = new TorusKnotGeometry(1, 0.4, 200, 40, 1, 2);

const loader = new TextureLoader();
const noiseTexture = loader.load("../assets/noise.png");
const matcapTexture = loader.load("../assets/matcap.png");

const material = new RawShaderMaterial({
  uniforms: {
    time: { value: 0 },
    seed: { value: randomInRange(-1000, 1000) },
    noiseTexture: { value: noiseTexture },
    matCapMap: { value: matcapTexture },
    matcap: { value: true },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
});

const mesh = new Mesh(geometry, material);

export { mesh };
