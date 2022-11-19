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
  AdditiveBlending,
  Color,
  UnsignedByteType,
  Matrix4,
  BufferGeometry,
  BufferAttribute,
  Points,
  NearestFilter,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import {
  natural,
  natural2,
  warm,
  warm2,
  warm3,
  seaside,
  circus,
  circus2,
} from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { randomInRange } from "../modules/Maf.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { shader as curl } from "../shaders/curl.js";
import { shader as hsl } from "../shaders/hsl.js";
import { mod } from "../modules/Maf.js";

const palettes = [
  natural,
  natural2,
  warm,
  warm2,
  warm3,
  seaside,
  circus,
  circus2,
];

function randomizePalette() {
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const gradient = new GradientLinear(palette);

  let colors = [];
  const steps = Math.round(randomInRange(3, 6));
  for (let i = 0; i < steps; i++) {
    const c = gradient.getAt(Math.random());
    const la = new Color();
    c.getHSL(la);
    if (la.l > 0.5) {
      la.l = 0.5;
    }
    c.setHSL(la.h, la.s, la.l);
    colors.push(c);
  }

  colors = colors.sort((a, b) => {
    const la = new Color();
    a.getHSL(la);
    const lb = new Color();
    b.getHSL(lb);
    return la.l - lb.l;
  });

  // colors = [new Color(0xff00ff), new Color(0x00ff00)];
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
    NearestFilter,
    NearestFilter
  );
  gradientTex.needsUpdate = true;
  return { bkg, gradientTex };
}

const particleVs = `precision highp float;
in vec3 position;

uniform sampler2D positions;
uniform sampler2D original;
uniform float time;
uniform sampler2D gradientFrom;
uniform sampler2D gradientTo;
uniform float interpolate;

uniform float dpr;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 vColor;
out vec3 vPosition;

${noiseCommon}
${noise3d}

float parabola(float x, float k) {
  return pow(4. * x * (1. - x), k);
}

void main() {
  vec2 coord = position.xy;
  vec4 pos = texture(positions, coord);
  vPosition = pos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.xyz, 1.);
  vec4 origin = texture(original, coord) * 2.;
  vec2 cuv = vec2(.5 + noise3d(time + origin.xyz * .5), .5);
  vec3 from = texture(gradientFrom, cuv).xyz;
  vec3 to = texture(gradientTo, cuv).xyz;
  vColor = mix(from, to, interpolate);
  float l = parabola(pos.w / 100., 1.);
  l = exp(l) / exp(1.);
  float s = 20. / gl_Position.z;
  gl_PointSize = l * s * dpr;
}`;

const particleFs = `precision highp float;
in vec3 vColor;
in vec3 vPosition;

uniform mat4 shadowMatrix;
uniform sampler2D shadowBuffer;
uniform vec3 bkgColor;

out vec4 fragColor;

float unpackDepth( const in vec4 rgba_depth ) {
  const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
  return dot(rgba_depth, bit_shift);
}

float random(vec4 seed4){
  float dot_product = dot(seed4, vec4(12.9898,78.233,45.164,94.673));
  return fract(sin(dot_product) * 43758.5453);
}

float sampleVisibility( vec3 coord ) {
  float bias = 0.00001;
  float depth = unpackDepth( texture( shadowBuffer, coord.xy));
  float dif = coord.z - depth - bias;
  float visibility  = ( dif > 0. ) ? 0. : 2.;
	return visibility;
}

${hsl}

void main() {
  vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
  if (dot(circCoord, circCoord) > 1.0) {
      discard;
  }
  
  vec4 vShadowCoord = shadowMatrix * vec4(vPosition,1.);
  vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w;

  int step = 1;
  int size = 1 * step;
  float shadow = 0.;
  for(int y=-size; y <size; y+= step) {
    for(int x=-size; x <size; x+= step) {
      shadow += sampleVisibility(shadowCoord + vec3(float(x), float(y), 0.)/ 4096.);
    } 
  }
  shadow /= float(size * size);
  shadow = clamp(shadow, 0., 1.);

  fragColor.rgb = vColor;
  vec3 hsl = rgb2hsv(fragColor.rgb);
  hsl.y += .2 * (1.-shadow);
  hsl.z -= .2 * (1.-shadow);
  fragColor.rgb = hsv2rgb(hsl);

  fragColor.rgb = mix(fragColor.rgb, bkgColor.rgb,  .5 * (1. - shadow));
  fragColor.a = 1.;

}`;

function generate(width, height) {
  const posData = new Float32Array(width * height * 4);
  let ptr = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const phi = Math.acos(2 * Math.random() - 1) - Math.PI / 2;
      const theta = 2 * Math.PI * Math.random();
      const r = randomInRange(0, 1);
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
    FloatType
  );
  posTexture.needsUpdate = true;
  return posTexture;
}

const simFs = `precision highp float;
precision highp sampler3D;

in vec2 vUv;

uniform sampler2D inputTexture;
uniform sampler2D originTexture;
uniform float persistence;
uniform float time;
uniform float dt;
uniform bool shock;

out vec4 fragColor;

${noiseCommon}
${curl}
${noise3d}

void main() {
  vec4 pos = texture(inputTexture, vUv);
  pos.xyz = pos.xyz + .01 * dt * curlNoise(pos.xyz * .1, time);
  pos.w += dt;
  if(pos.w > 0.) {
    pos.y -= pos.w / 4000.;
  }
  if(pos.w>100. || shock) {
    if(shock) {
      vec3 dir = normalize(pos.xyz);
      pos.xyz = (.1 + noise3d(pos.xyz * 20. + time)) * dir;
      pos.xyz += noise3d(pos.xyz * 2. + pos.w * time);
    } else {
      pos.xyz = texture(originTexture, vUv).xyz;
      vec3 dir = normalize(pos.xyz);
      // pos.xyz += (.1 + noise3d(pos.xyz * 20. + time)) * dir;
      pos.xyz += 2. * noise3d(pos.xyz * 2. + pos.w * time);
    }
    if(pos.w>0.) {
      pos.w -= 100.;
    }
  }
  fragColor = pos; 
}`;

const simShader = new RawShaderMaterial({
  uniforms: {
    inputTexture: { value: null },
    originTexture: { value: null },
    persistence: { value: 0.6 },
    time: { value: 0 },
    dt: { value: 0 },
    shock: { value: false },
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

const material = new RawShaderMaterial({
  uniforms: {
    positions: { value: null },
    original: { value: null },
    shadowBuffer: { value: null },
    shadowMatrix: { value: new Matrix4() },
    time: { value: 0 },
    dpr: { value: 1 },
    gradientFrom: { value: null },
    gradientTo: { value: null },
    bkgColor: { value: new Color() },
    interpolate: { value: 0 },
  },
  vertexShader: particleVs,
  fragmentShader: particleFs,
  glslVersion: GLSL3,
  transparent: true,
});

function step(renderer, dt) {
  material.uniforms.time.value += dt / 1000;
  simulation.shader.uniforms.dt.value = dt;
  simulation.shader.uniforms.time.value += dt / 100;
  simulation.render(renderer);
  simulation.shader.uniforms.inputTexture.value =
    simulation.fbos[simulation.currentFBO].texture;
}

const shadowVs = `precision highp float;
in vec3 position;

uniform sampler2D positions;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

float parabola(float x, float k) {
  return pow(4. * x * (1. - x), k);
}

${noiseCommon}
${noise3d}

void main() {
  vec2 coord = position.xy;
  vec4 pos = texture(positions, coord);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.xyz, 1.);
  float l = parabola(pos.w / 100., 1.);
  l = exp(l) / exp(1.);
  float s = 1. / gl_Position.z;
  vec2 jitter = .01 * vec2(.5 - noise3d(time + pos.xyz * .5), .5);
  gl_Position.xy += jitter;
  gl_PointSize = l * s;
}`;

const shadowFs = `precision highp float;

layout (location = 0) out vec4 fragmentColor;

in vec2 vUv;

vec4 packDepth(const in float depth) {
  const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
  const vec4 bit_mask  = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
  vec4 res = mod(depth*bit_shift*vec4(255), vec4(256))/vec4(255);
  res -= res.xxyz * bit_mask;
  return res;
}

void main() {
  vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
  if (dot(circCoord, circCoord) > 1.0) {
      discard;
  }

  fragmentColor = packDepth( gl_FragCoord.z );
}`;

const depthMaterial = new RawShaderMaterial({
  uniforms: {
    positions: { value: null },
    time: { value: 0 },
  },
  vertexShader: shadowVs,
  fragmentShader: shadowFs,
  glslVersion: GLSL3,
});

let bkgFrom;
const bkg = new Color();
let paletteFrom;
let { bkg: bkgTo, gradientTex: paletteTo } = randomizePalette();

randomizeColors();
function randomizeColors() {
  bkgFrom = bkgTo;
  paletteFrom = paletteTo;
  let { bkg: b2, gradientTex: g2 } = randomizePalette();
  bkgTo = b2;
  paletteTo = g2;
  material.uniforms.gradientFrom.value = paletteFrom;
  material.uniforms.gradientTo.value = paletteTo;
}

let prevT = 0;
function interpolate(time, renderer) {
  let t = mod(time, 20000) / 20000;
  if (t < prevT) {
    randomizeColors();
  }
  prevT = t;
  material.uniforms.interpolate.value = t;
  bkg.copy(bkgFrom).lerp(bkgTo, t);
  material.uniforms.bkgColor.value.copy(bkg);
  renderer.setClearColor(bkg, 1);
  return bkg;
}

function resizeBuffers(width, height) {
  simulation.setSize(width, height);
  const posTexture = generate(width, height);
  simShader.uniforms.originTexture.value = posTexture;
  simShader.uniforms.inputTexture.value = posTexture;
  material.uniforms.positions.value = posTexture;
  material.uniforms.original.value = posTexture;

  const geo = new BufferGeometry();
  const vertices = new Float32Array(width * height * 3);
  let ptr = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      vertices[ptr] = x / width;
      vertices[ptr + 1] = y / width;
      vertices[ptr + 2] = 0;
      ptr += 3;
    }
  }
  geo.setAttribute("position", new BufferAttribute(vertices, 3));
  const mesh = new Points(geo, material);

  return mesh;
}

export {
  depthMaterial,
  simulation,
  randomizeColors,
  interpolate,
  step,
  resizeBuffers,
};
