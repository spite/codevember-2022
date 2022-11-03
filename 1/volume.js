import {
  Vector3,
  LinearFilter,
  FloatType,
  Data3DTexture,
  RedFormat,
  BackSide,
  RawShaderMaterial,
} from "../third_party/three.module.js";
import { perlin3 } from "../third_party/perlin.js";
import { randomInRange, clamp } from "../modules/Maf.js";

const vertexShader = `#version 300 es
in vec3 position;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPos;

out vec3 vPosition;
out vec3 vOrigin;
out vec3 vDirection;

void main() {
  vec4 worldPosition = modelViewMatrix * vec4(position, 1.);

  vPosition = position;
  vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPos, 1.)).xyz;
  vDirection = position - vOrigin;

  gl_Position = projectionMatrix * worldPosition;
}
`;

const newLocal = `#version 300 es
precision highp float;
precision highp sampler3D;

// #define WRITE_DEPTH
#define ACCUMULATE

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

in vec3 vPosition;
in vec3 vOrigin;
in vec3 vDirection;

out vec4 color;

uniform sampler3D map;
uniform sampler3D normalMap;
uniform float time;
uniform bool accumulate;

uniform float cut;
uniform float range;
uniform float opacity;
uniform float steps;

vec2 hitBox(vec3 orig, vec3 dir) {
  const vec3 box_min = vec3(-.5);
  const vec3 box_max = vec3(.5);
  vec3 inv_dir = 1.0 / dir;
  vec3 tmin_tmp = (box_min - orig) * inv_dir;
  vec3 tmax_tmp = (box_max - orig) * inv_dir;
  vec3 tmin = min(tmin_tmp, tmax_tmp);
  vec3 tmax = max(tmin_tmp, tmax_tmp);
  float t0 = max(tmin.x, max(tmin.y, tmin.z));
  float t1 = min(tmax.x, min(tmax.y, tmax.z));
  return vec2(t0, t1);
}

float sample1( vec3 p ) {
  return texture( map, p ).r;
}

vec3 sample2( vec3 p ) {
  return texture( normalMap, p ).rgb;
}

/*
float sphere( vec3 p, float r ) {
  return length( p ) - r;
}

float distort( vec3 p, float a ) {
  return min( 0.02, sin( p.x * a ) + sin( p.y * a ) + sin( p.z * a ) );
}

float w( vec3 p ) {
  return max( sphere( p, 0.5 ), distort( p * 6.0 + time * 0.5, 3.0 ) );
}

vec3 wn(vec3 p) {
  vec2 e = vec2( .001, 0. );
  return normalize(vec3(
    w( p + e.xyy ) - w( p - e.xyy ),
    w( p + e.yxy ) - w( p - e.yxy ),
    w( p + e.yyx ) - w( p - e.yyx )
  ) );
}
*/

#define epsilon .0001

vec3 normal( vec3 coord ) {

  if(coord.x < epsilon){
    return vec3(1.,0.,0.);
  }
  if(coord.x > 1.- epsilon){
    return vec3(-1.,0.,0.);
  }
  if(coord.y < epsilon){
    return vec3(0.,1.,0.);
  }
  if(coord.y > 1.- epsilon){
    return vec3(0.,-1.,0.);
  }
  if(coord.z < epsilon){
    return vec3(0.,0.,1.);
  }
  if(coord.z > 1.- epsilon){
    return vec3(0.,0.,-1.);
  }

  float step = 0.01;
  float x = sample1( coord + vec3( -step, 0.0, 0.0 ) ) - sample1( coord + vec3( +step, 0.0, 0.0 ) );
  float y = sample1( coord + vec3( 0.0, -step, 0.0 ) ) - sample1( coord + vec3( 0.0, +step, 0.0 ) );
  float z = sample1( coord + vec3( 0.0, 0.0, -step ) ) - sample1( coord + vec3( 0.0, 0.0, +step ) );

  return normalize( vec3( x, y, z ) );

}

float hash1( uint n ) 
{
  // integer hash copied from Hugo Elias
  n = (n << 13U) ^ n;
  n = n * (n * n * 15731U + 789221U) + 1376312589U;
  return float( n & uint(0x7fffffffU))/float(0x7fffffff);
}

float noise(in vec2 uv, in float time) {
  uvec2 p = uvec2(uv);
  return hash1( p.x + 1920U*p.y + (1920U*1080U)*uint(time) );
}

void main(){
  vec3 rayDir = normalize(vDirection);
  vec2 bounds = hitBox(vOrigin, rayDir);
  if (bounds.x > bounds.y) discard;
  bounds.x = max(bounds.x, 0.);

  vec3 p = vOrigin + bounds.x * rayDir;
  vec3 inc = 1.0 / abs(rayDir);
  float delta = min(inc.x, min(inc.y, inc.z));
  delta /= steps;

  vec4 ac = vec4(0.,0.,0.,0.);

  for (float t = bounds.x; t < bounds.y; t += delta) {
    float d = sample1(p + .5);
    d = smoothstep(cut - range, cut + range, d) * opacity;
    vec3 col = vec3(1.);
    ac.rgb +=  (1.0 - ac.a) * d * col;
    ac.a += (1.0 - ac.a) * d;
    if(ac.a>=.95){
      break;
    }
    float n = (noise(gl_FragCoord.xy + t, time)-.5)/steps;
    rayDir.x += .01 * (noise(gl_FragCoord.xy + t, time) -.5);
    rayDir.y += .01 * (noise(gl_FragCoord.xy + t, time) -.5);
    
    p += rayDir * (delta + n);
  }

  ac += .1 * (noise(gl_FragCoord.xy, time)-.5);

  color = ac;
  
  if ( color.a == 0. ) discard;
 
}
`;
const fragmentShader = newLocal;

const size = 128;
const width = size;
const height = size;
const depth = size;
export const data = new Float32Array(width * height * depth);

function perlin(x, y, z) {
  return 0.5 + 0.5 * perlin3(x, y, z);
}

const normal = new Vector3();

function perlinNormal(x, y, z) {
  const step = 0.001;
  normal.x = perlin(x - step, y, z) - perlin(x + step, y, z);
  normal.y = perlin(x, y - step, z) - perlin(x, y + step, z);
  normal.z = perlin(x, y, z - step) - perlin(x, y, z + step);

  normal.normalize();
  return normal;
}

export function generatePerlin(data, ox, oy, oz) {
  let ptr = 0;
  const s = 0.025;

  for (let z = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        data[ptr] = perlin(ox + s * x, oy + s * y, oz + s * z);
        ptr++;
      }
    }
  }
}

function generateSphere(data, ox = 0, oy = 0, oz = 0) {
  let ptr = 0;
  const s = 0.025;

  const v = new Vector3();
  const c = new Vector3(width, height, depth).multiplyScalar(0.5);
  for (let z = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        v.set(x, y, z);
        v.sub(c);
        const d = v.length();
        if (d > 0.5 * width) {
          data[ptr] = 0;
        } else {
          data[ptr] = perlin(ox + s * x, oy + s * y, oz + s * z);
        }
        ptr++;
      }
    }
  }
}

Vector3.prototype.abs = function () {
  this.x = Math.abs(this.x);
  this.y = Math.abs(this.y);
  this.z = Math.abs(this.z);
  return this;
};

Vector3.prototype.max = function (v) {
  this.x = Math.max(this.x, v.x);
  this.y = Math.max(this.y, v.y);
  this.z = Math.max(this.z, v.z);
  return this;
};

function sdSphere(p, s) {
  return p.length() - s;
}

function vmax(v) {
  return Math.max(Math.max(v.x, v.y), v.z);
}

const q = new Vector3();
const q2 = new Vector3();
const zero = new Vector3(0, 0, 0);
function sdBox(p, b) {
  q.copy(p).abs().sub(b);
  q2.copy(q);
  return (
    q2.max(zero).length() + Math.min(Math.max(q.x, Math.max(q.y, q.z)), 0.0)
  );
}

function sdRoundBox(p, b, r) {
  q.copy(p).abs().sub(b);
  const l =
    q.max(zero).length() + Math.min(Math.max(q.x, Math.max(q.y, q.z)), 0.0) - r;

  return l;
}

const r = 1; //randomInRange(0.1 * width, 0.25 * width);
const w = width - 2 * r;
const h = height - 2 * r;
const d = depth - 2 * r;
const pos = new Vector3(
  randomInRange(-w / 2, w / 2),
  randomInRange(-h / 2, h / 2),
  randomInRange(-d / 2, d / 2)
);
pos.set(0, 0, 0);
const bPos = [];
const r2 = 20;
const w2 = width - 2 * r2;
const h2 = height - 2 * r2;
const d2 = depth - 2 * r2;
for (let i = 0; i < 20; i++) {
  const p = new Vector3(
    randomInRange(-w2 / 2, w2 / 2),
    randomInRange(-h2 / 2, h2 / 2),
    randomInRange(-d2 / 2, d2 / 2)
  );
  bPos.push(p);
}
// pos.set(-10, -15, -10);
const b = new Vector3(
  randomInRange(3, 10),
  randomInRange(3, 10),
  randomInRange(3, 10)
);
b.set(5, 5, 5);

function field(p) {
  const sphere = sdSphere(p.clone().sub(pos), r);
  let box = 100000;
  for (const pos of bPos) {
    // const bd = sdBox(q.copy(p).sub(pos), b);
    const bd = sdSphere(q.copy(p).sub(pos), 5);
    box = Math.min(box, bd);
  }

  if (sphere < box) {
    return { d: sphere, id: 0 };
  } else {
    return { d: box, id: 1 };
  }
  // return Math.min(sphere, box);
}

const EPSILON = 0.001;
const MAXDIST = 100;
const MAXSTEPS = 100;

const p = new Vector3();
function raymarch(ro, rd) {
  let d = EPSILON;
  let t = 0.0;
  let res;
  for (let i = 0; i < MAXSTEPS; ++i) {
    p.copy(rd).multiplyScalar(d).add(ro);
    res = field(p);
    t = res.d;
    if (t < EPSILON || d >= MAXDIST) break;
    d += t;
  }
  if (res.id === 0) {
    const l = ro.length();
    return l;
  }
  return 0;
}

const dir = new Vector3();
function march(p) {
  dir.copy(pos).sub(p).normalize();
  return raymarch(p, dir);
}

function generateLightField(data, points) {
  let ptr = 0;

  const v = new Vector3();
  const c = new Vector3(width, height, depth).multiplyScalar(0.5);

  const p = new Vector3();
  for (let z = 0; z < depth; z++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        v.set(x, y, z).sub(c);
        // p.copy(pos).sub(v);
        // const d = sdSphere(p, r);
        //        const d = sdBox(p, b);
        const d = march(v);
        data[ptr] = (1 - sdSphere(v, 60)) * d; //Math.min(d, ); //Math.sqrt(-d / r);

        ptr++;
      }
    }
  }
}

// await voxelise(data, size);
// generatePerlin(data, 0, 0, 0);
// generateSphere(data);
function generatePoints(data) {
  const lights = [];
  for (let i = 0; i < 10; i++) {
    const r = randomInRange(0.1 * width, 0.25 * width);
    const w = width - 2 * r;
    const h = height - 2 * r;
    const d = depth - 2 * r;
    const pos = new Vector3(
      randomInRange(-w / 2, w / 2),
      randomInRange(-h / 2, h / 2),
      randomInRange(-d / 2, d / 2)
    );
    lights.push({ pos, r });
  }
  generateLightField(data, lights);
}

generatePoints(data);

const texture = new Data3DTexture(data, width, height, depth);
texture.format = RedFormat;
texture.type = FloatType;
texture.minFilter = LinearFilter;
texture.magFilter = LinearFilter;
texture.unpackAlignment = 1;
texture.needsUpdate = true;

export const material = new RawShaderMaterial({
  uniforms: {
    map: { value: texture },
    // normalMap: { value: texture2 },
    cameraPos: { value: new Vector3() },
    time: { value: 0.0 },
    cut: { value: 0.6 },
    range: { value: 0.01 },
    opacity: { value: 0.02 },
    steps: { value: 100 },
    accumulate: { value: true },
  },
  vertexShader,
  fragmentShader,
  side: BackSide,
  transparent: true,
});
