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
  p += vec3(time);
  return p + perlinfbm(p * vec3(.5, .25, .5) + seed, scale * 1., 4);
}

// https://www.ics.uci.edu/~majumder/VC/classes/BEmap.pdf

vec3 normal(in vec3 pos, in float d0, in vec3 n) {
  float e = .01;
  float s = .2;

  vec3 pu = cross(n, vec3(0.,1.,0.));
  vec3 p1 = pos + pu * e;
  p1 = convert(p1);
  float du = s * (fbm(p1, 10., 0, 4, 0.) - d0);
  
  vec3 pv = cross(n, p1);
  vec3 p2 = pos + pv * e; 
  p2 = convert(p2);
  float dv = s * (fbm(p2, 10., 0, 4, 0.) - d0);

  vec3 np = n + du * cross(pu, n) + dv * cross(pv, n);
  return normalize(np + .1 * d0 * random3(pos, pos.y * 123222.1212));
}

void main() {

  // vec3 n = normalize(vNormal);
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
  float m = 2.8284271247461903 * sqrt(r.z+1.);//2. * sqrt( pow( 1., 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
  vec2 vN = r.xy / m + .5;
  vec4 mat = texture(matcapTexture, vN);

  color.rgb = clamp(color.rgb, vec3(0.), vec3(1.));
  color.rgb = mix(color.rgb, vec3(0.), pow(rim, 4.));
  color.rgb = screen(color.rgb, mat.rgb, 1.);
  // color.rgb = vec3(c2-c);
}
`;

const loader = new TextureLoader();
const matcapTexture = loader.load("../assets/matcap_1k.jpg");

const material = new RawShaderMaterial({
  uniforms: {
    gradient: { value: null },
    matcapTexture: { value: matcapTexture },
    scale: { value: 1 },
    time: { value: 0 },
    seed: { value: null },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  side: DoubleSide,
});

function randomize() {
  material.uniforms.scale.value = randomInRange(0.75, 1.5);
  material.uniforms.gradient.value = randomizePalette().gradientTex;
  material.uniforms.seed.value = randomInRange(-1000, 1000);
}

randomize();

export { material, randomize };
