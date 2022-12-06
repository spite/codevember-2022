import {
  GLSL3,
  Mesh,
  RawShaderMaterial,
  Matrix4,
  TextureLoader,
  TorusKnotGeometry,
  DoubleSide,
  TorusGeometry,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as hsl } from "../shaders/hsl.js";
import { shader as worleyNoise } from "../shaders/worley.js";
import { GLTFLoader } from "../third_party/GLTFLoader.js";
import { randomInRange } from "../modules/Maf.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec4 tangent;
in vec2 uv;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec3 vNormal;
out vec3 vPosition;
out vec3 vOPosition;
out vec2 vUv;
out vec3 vN;

void main() {
  vUv = uv;
  vOPosition = position;
  vec4 mvP = modelViewMatrix * vec4(position, 1.);
  vPosition = mvP.xyz / mvP.w;
  vNormal = normalMatrix * normal;
  vN = (modelMatrix * vec4(position, 1.)).xyz;
  gl_Position = projectionMatrix * mvP;
}`;

const fragmentShader = `precision highp float;

in vec3 vNormal;
in vec3 vOPosition;
in vec3 vPosition;
in vec2 vUv;
in vec3 vN;

uniform sampler2D matCapMap;
uniform float time;
uniform float opacity;
uniform float boost;
uniform float offset;
uniform float distort;
uniform float roughness;
uniform float rimBoost;

out vec4 color;

vec4 firstColor = vec4(1.,0.,0.,1.);
vec4 middleColor = vec4(0.,1.,0.,1.);
vec4 endColor = vec4(0.,0.,1.,1.);

vec4 gradient(in float v) {
  v = mod(v, 1.);
  float h = .5;
  vec4 col = h > v 
        ? mix(firstColor, middleColor, v/h) 
        : mix(middleColor, endColor, (v - h)/(1. - h));
  return col;
}

${noiseCommon}
${noise3d}
${worleyNoise}
${hsl}

float fbm(in vec3 p) {
  return perlinfbm(p + offset, .05, 8);
}

vec3 shiftHue(in vec3 color, float h) {
  vec3 hsl = rgb2hsv(color);
  hsl.x = mod(hsl.x + h, 1.);
  return hsv2rgb(hsl);
}

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float random(vec2 n){
	return .5 - fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}

vec3 randVector(in vec3 p) {
  return normalize(vec3(random(p.xy), random(p.yz), random(p.xz)));
}

void main() {
  vec3 eye = normalize(vPosition.xyz);
  vec3 normal = normalize(vNormal + .1 *noise3d(vNormal.xyz) + roughness * randVector(vOPosition.xyz));

  float rim = dot(normalize(normal + distort * noise3d(normal)), normalize(-vPosition.xyz));
  rim = abs(rim);
  rim = clamp(1.-pow(rim, 1.), 0., 1.);
  float noise = fbm(vN);
  color = gradient(1.-rim);

  color.rgb = shiftHue(color.rgb, (.8 + time/10. + noise) );
  color.rgb = clamp(color.rgb, vec3(0.), vec3(1.));
  color.rgb = mix(color.rgb, color.rgb * pow(rim, boost), opacity);
  color.rgb = shiftHue(color.rgb, .2 * (1.-rim));
  
  vec3 n = normalize(normal);
  vec3 r = reflect( eye, n );
  float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
  vec2 muv = r.xy / m + .5;
  vec4 mat = texture(matCapMap, muv);

  color.a = length(color.rgb);
  color.rgb += mat.rgb; 
  color.rgb = mix(color.rgb, vec3(16.)/255., pow(rim, rimBoost));
}`;

const loader = new GLTFLoader();
const texLoader = new TextureLoader();
const matcapTexture = texLoader.load("../assets/matcap_1k.jpg");

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    loader.load(file, (scene) => {
      resolve(scene);
    });
  });
}

async function loadIcosahedron() {
  const scene = await loadModel("../assets/icosahedron.glb");
  const geo = scene.scene.children[0].children[0].geometry;
  geo.center();
  const scale = 1;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geo;
}

async function loadDodecahedron() {
  const scene = await loadModel("../assets/dodecahedron.glb");
  const geo = scene.scene.children[0].children[0].geometry;
  geo.center();
  const scale = 1.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geo;
}

async function loadBox() {
  const scene = await loadModel("../assets/box.glb");
  const geo = scene.scene.children[0].children[0].geometry;
  geo.center();
  const scale = 1.3;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geo;
}

async function loadSuzanne() {
  const scene = await loadModel("../assets/suzanne.glb");
  const suzanneGeo = scene.scenes[0].children[0].geometry;
  const mat = new Matrix4().makeRotationX(-Math.PI / 2);
  suzanneGeo.applyMatrix4(mat);
  const s = 1.4;
  const scale = new Matrix4().makeScale(s, s, s);
  suzanneGeo.applyMatrix4(scale);
  return suzanneGeo;
}

async function load() {
  const [icosahedron, dodecahedron, box, suzanne] = await Promise.all([
    loadIcosahedron(),
    loadDodecahedron(),
    loadBox(),
    loadSuzanne(),
  ]);
  return {
    solid: [
      icosahedron,
      dodecahedron,
      suzanne,
      box,
      new TorusGeometry(1.3, 0.5, 40, 200),

      new TorusKnotGeometry(1, 0.3, 200, 40, 3, 1),
      new TorusKnotGeometry(1, 0.3, 200, 40, 3, 2),

      new TorusKnotGeometry(1, 0.3, 200, 40, 2, 1),
      new TorusKnotGeometry(1, 0.3, 200, 40, 2, 3),

      new TorusKnotGeometry(1, 0.3, 200, 40, 1, 2),
      new TorusKnotGeometry(1, 0.3, 200, 40, 1, 3),
      new TorusKnotGeometry(1, 0.3, 200, 40, 1, 4),
    ],
    transparent: [icosahedron, dodecahedron, box],
  };
}

async function init(geometries) {
  const material = new RawShaderMaterial({
    uniforms: {
      matCapMap: { value: matcapTexture },
      distort: { value: 0.1 },
      opacity: { value: 1 },
      boost: { value: 1 },
      time: { value: 0 },
      roughness: { value: 0 },
      offset: { value: randomInRange(-1000, 1000) },
      rimBoost: { value: 10 },
    },
    vertexShader,
    fragmentShader,
    glslVersion: GLSL3,
    side: DoubleSide,
    transparent: true,
    depthWrite: false,
  });
  const geometry = geometries.transparent[0];
  console.log(geometry);
  const mesh = new Mesh(geometry, material);
  return mesh;
}

export { load, init };
