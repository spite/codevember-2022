import {
  Color,
  DataTexture,
  DoubleSide,
  GLSL3,
  LinearFilter,
  RawShaderMaterial,
  RGBAFormat,
  TextureLoader,
  UnsignedByteType,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as screen } from "../shaders/screen.js";
import { shader as worley } from "../shaders/worley.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { randomInRange } from "../modules/Maf.js";
import { shader as hsl } from "../shaders/hsl.js";

const palettes = [
  ["#f2ead6", "#327172", "#2d3e58", "#f47e72", "#f2cab1"],
  ["#bd1603", "#3aa4ac", "#fabf55", "#b80b01", "#a70a01"],
  ["#369d9b", "#50a69d", "#f08a19", "#b00a01", "#fcbe8a"],
  ["#720b04", "#480d07", "#d3e6dd", "#fdad6c", "#51a79d"],
  ["#480d07", "#d2470c", "#f6f6e9", "#49aab0", "#fac25c"],
  ["#a4c3a1", "#d44c0d", "#8ac7c6", "#f9d07f", "#480d07"],
  ["#fe8930", "#480d07", "#b4d9d3", "#480d07", "#379e9b"],
  ["#028b99", "#f8da95", "#720b04", "#480d07", "#d44c0d"],
  ["#480d07", "#c5e0d9", "#cb3609", "#730b04", "#fe8326"],
  ["#67ae9e", "#d2e6dd", "#d8550f", "#480d07", "#a8d4d0"],
  ["#ee7f1c", "#d01a05", "#e7540f", "#660701", "#e81e05"],
  ["#6c0802", "#380000", "#f7f1ac", "#9d1003", "#390000"],
  ["#f62f64", "#f97698", "#b98baf", "#a43c62", "#9877a8"],
  ["#fddde5", "#c2364d", "#fa98b2", "#be8fb1", "#e5a8ba"],
  ["#0654c5", "#f8810b", "#1a2c73", "#d03702", "#d03401"],
  ["#0b3481", "#f36003", "#0d75d5", "#e8b396", "#0b2a77"],
  ["#a6a387", "#739998", "#bb530b", "#3e4a48", "#cd1409"],
  ["#dc6a1c", "#6e9695", "#b1b4a4", "#93afad", "#9f9772"],
  ["#3c1711", "#63160f", "#733833", "#492a11", "#9f9772"],
  ["#206262", "#bb530b", "#9f9772", "#195d5d", "#a8261d"],
  ["#295151", "#a12820", "#444845", "#414947", "#511610"],
  ["#356f70", "#81332d", "#9e2921", "#583010", "#d9deda"],
  ["#ab4d0c", "#2b6969", "#db6c1e", "#603210", "#326e6e"],
  ["#512d11", "#b1b4a4", "#81150d", "#b7bdb3", "#bcb09b"],
  ["#8e70a5", "#824379", "#feebb9", "#f54026", "#836aa3"],
  ["#ecacbc", "#7863a0", "#ecacbc", "#9a78a8", "#f43729"],
  ["#ecacbc", "#f76919", "#9172a6", "#f986a5", "#ecacbc"],
  ["#c493b2", "#ecacbc", "#fcab03", "#f87296", "#fa99b3"],
  ["#bc8eb0", "#923f6d", "#5a4a93", "#f64e21", "#ecacbc"],
];

function randomizePalette() {
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const gradient = new GradientLinear(palette);

  let colors = [];
  const steps = Math.round(randomInRange(3, 12));
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

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec3 vNormal;
out vec3 vONormal;
out vec3 vPosition;
out vec4 mvPosition;

void main() {
  vONormal = normal;
  vPosition = position;
  vNormal = normalMatrix * normal;
  mvPosition = modelViewMatrix * vec4(position, 1.); 
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `precision highp float;

in vec3 vNormal;
in vec3 vPosition;
in vec4 mvPosition;
in vec3 vONormal;

uniform sampler2D gradient;
uniform sampler2D matcapTexture;
uniform float seed;
uniform float scale;
uniform float time;
uniform float epsilon;
uniform float bumpScale;
uniform vec3 bkgColor;
uniform float roughness;

out vec4 color;

${noiseCommon}
${worley}
${hsl}
${screen}

float fbm(vec3 p, float freq, int start, int end, float noise) {
  float G = exp2(-.85);
  float amp = 1.;
  for (int i = 0; i < start; ++i) {
    freq *= 2.;
    amp *= G;
  }
  for (int i = start; i < end; ++i) {
    noise += amp * gradientNoise(p * freq * vec3(.1, 2., .1), freq);
    freq *= 2.;
    amp *= G;
  }
  return noise;
}

float random(vec3 scale, float seed) {
  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

vec3 random3(vec3 p, in float seed) {
  return vec3(
    random(p, seed),
    random(p + vec3(31, 72, 54), seed),
    random(p + vec3(156, 87, 99), seed)
  );
}

vec3 convert(in vec3 p) {
  return p + perlinfbm(p * vec3(.5, .25, .5) + seed + time, scale * 1., 4);
}

// https://www.ics.uci.edu/~majumder/VC/classes/BEmap.pdf

vec3 normal(in vec3 pos, in float d0, in vec3 n) {
  float e = epsilon;
  float s = bumpScale;

  vec3 pu = cross(n, vec3(0.,1.,0.));
  vec3 p1 = pos + pu * e;
  p1 = convert(p1);
  float du = s * (fbm(p1, 10., 0, 4, 0.) - d0);
  
  vec3 pv = cross(n, p1);
  vec3 p2 = pos + pv * e; 
  p2 = convert(p2);
  float dv = s * (fbm(p2, 10., 0, 4, 0.) - d0);

  vec3 np = n + du * cross(pu, n) + dv * cross(pv, n);
  return normalize(np + roughness * d0 * random3(pos, pos.y * 123222.1212));
}

void main() {

  vec3 eye = normalize(mvPosition.xyz);

  vec3 p = convert(vPosition);

  float c = fbm(p, scale * 10., 0, 2, 0.);
  float c2 = fbm(p, scale * 10., 2, 4, c);
  float c3 = fbm(p, scale * 10., 4, 8, c2);

  vec3 n = normal(vPosition, c3, normalize(vNormal));

  vec3 ld = normalize(vec3(0.,1.,0.));
  float rim = 1.- dot(n, -eye);
  float diffuse = .5 + .5 * dot(n, ld);

  vec3 hue = texture(gradient, vec2(.5 + .5 * c, .5)).xyz;
  vec3 hsv = rgb2hsv(hue);
  hsv.x += .1 * (.5 + .5 * c2);
  hsv.x = mod(hsv.x, 1.);
  hsv.z = .5 + .5 * c3;
  hsv.z += rim;
  hsv.y += rim;
  hue = hsv2rgb(hsv);
  hue += rim;
  color = vec4(hue * diffuse, 1.);

  vec3 r = reflect(eye, n);
  float m = sqrt(8.) * sqrt(r.z+1.);//2. * sqrt( pow( 1., 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
  vec2 vN = r.xy / m + .5;
  vec4 mat = texture(matcapTexture, vN);

  color.rgb = clamp(color.rgb, vec3(0.), vec3(1.));
  color.rgb = mix(color.rgb, bkgColor , pow(rim, 4.));
  color.rgb = screen(color.rgb, mat.rgb, 1.);
}
`;

const loader = new TextureLoader();
const matcapTexture = loader.load("../assets/matcap_1k.jpg");

const material = new RawShaderMaterial({
  uniforms: {
    gradient: { value: null },
    matcapTexture: { value: matcapTexture },
    epsilon: { value: 0.001 },
    bkgColor: { value: new Color() },
    bumpScale: { value: 0.2 },
    scale: { value: 1 },
    time: { value: 0 },
    seed: { value: null },
    roughness: { value: 0 },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  side: DoubleSide,
});

function randomize(renderer) {
  material.uniforms.scale.value = randomInRange(0.75, 1.5);
  const { bkg, gradientTex } = randomizePalette();
  renderer.setClearColor(bkg, 1);
  material.uniforms.bkgColor.value.copy(bkg);
  material.uniforms.gradient.value = gradientTex;
  material.uniforms.seed.value = randomInRange(-1000, 1000);
  material.uniforms.epsilon.value = randomInRange(0.001, 0.01);
  material.uniforms.epsilon.bumpScale = randomInRange(0.1, 0.2);
  material.uniforms.roughness.value = randomInRange(0, 0.15);
}

export { material, randomize };
