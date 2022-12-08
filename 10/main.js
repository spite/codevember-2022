import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  Mesh,
  Matrix4,
  MeshNormalMaterial,
  IcosahedronGeometry,
  BoxGeometry,
  BackSide,
  MeshBasicMaterial,
  RawShaderMaterial,
  GLSL3,
  Vector3,
  FrontSide,
  Matrix3,
  Euler,
  TorusGeometry,
} from "../third_party/three.module.js";
import { GLTFLoader } from "../third_party/GLTFLoader.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise } from "../shaders/noise.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";

import { Post } from "./post.js";
import { randomInRange, map } from "../modules/Maf.js";

// import { capture } from "../modules/capture.js";

const post = new Post(renderer);

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;

uniform bool isRoom;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec3 vNormal;
out vec3 vPosition;

void main() {
  vNormal = mat3(modelMatrix) * normal;
  vec4 mvp = modelViewMatrix * vec4(position, 1.);
  vPosition = (modelMatrix * vec4(position, 1.)).xyz;
  gl_Position = projectionMatrix * mvp;
}`;

const fragmentShader = `precision highp float;

struct Light {
	vec3 position;
	vec3 color;
  float radius;
};

in vec3 vNormal;
in vec3 vPosition;

uniform vec3 cubePos;
uniform mat3 cubeRotationMatrix;
uniform bool front;
uniform bool isRoom;
uniform float seed;

uniform Light lights[3];

out vec4 color;

${noiseCommon}
${noise}

bool rayAABB(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {
  vec3 rayInvDir = 1.0 / rayDir;
  vec3 tbot = rayInvDir * (boxMin - rayOrigin);
  vec3 ttop = rayInvDir * (boxMax - rayOrigin);
  vec3 tmin = min(ttop, tbot);
  vec3 tmax = max(ttop, tbot);
  vec2 t = max(tmin.xx, tmin.yz);
  float t0 = max(t.x, t.y);
  t = min(tmax.xx, tmax.yz);
  float t1 = min(t.x, t.y);
  return t1 > max(t0, 0.0);
}

#define PI 3.1415926535897932384626433832795

vec3 randomDiskPoint(vec3 rand, vec3 n) {
  float r = rand.x * 0.5 + 0.5; // [-1..1) -> [0..1)
  float angle = (rand.y + 1.0) * PI; // [-1..1] -> [0..2*PI)
  float sr = sqrt(r);
  vec2 p = vec2(sr * cos(angle), sr * sin(angle));
  /*
   * Compute some arbitrary tangent space for orienting
   * our disk towards the normal. We use the camera's up vector
   * to have some fix reference vector over the whole screen.
   */
  vec3 tangent = normalize(rand);
  vec3 bitangent = cross(tangent, n);
  tangent = cross(bitangent, n);
  
  /* Make our disk orient towards the normal. */
  return tangent * p.x + bitangent * p.y;
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

vec3 shade(in Light light) {
  vec3 l = (light.position - vPosition.xyz);
  if(front) {
    l = -l;
  }

  int MAX = 16;

  float shadow = 0.;
  if(isRoom && dot(normalize(light.position-vPosition), normalize(light.position-cubePos))>0.) {
    vec3 nl = normalize(l);
    for(int i=0; i<MAX; i++) {
      vec3 r = random3(vPosition, seed + float(i));
      vec3 d = light.position + 2. * light.radius * randomDiskPoint(r, nl) - vPosition;
      d = cubeRotationMatrix * d;
      if(rayAABB(cubeRotationMatrix*vPosition, d, cubePos + vec3(-.5), cubePos + vec3(.5))){
        shadow += 1.;
      }
    }
    shadow /= float(MAX);
  }
  shadow = 1.- shadow;

  float falloff = 2. / exp(length(l));
  // float falloff = 1./pow(length(l), 2.);
  float diffuse = max(dot(normalize(vNormal), normalize(-l)), 0.);
  vec3 color = light.color * diffuse * falloff * shadow;

  return color / 3.;
}

void main() {

  for(int i=0; i<3; i++) {
    color.rgb += shade(lights[i]);
  }
  color.rgb = pow(color.rgb, vec3(.5));
  color.rgb = .1 + .9 * color.rgb;
  color.rgb += .03 * noise(gl_FragCoord.xy, 100.);

  // float gamma = 1.2;
  // color.rgb = pow(color.rgb, vec3(1.0/gamma));
// color.rgb = vec3(diffuse);

// color.rgb = vec3(1.-length(l)/5.);
  color.a = 1.;
}`;

const light1 = {
  position: new Vector3(0, 0, 0),
  color: new Vector3(2, 0, 0),
  radius: 1,
};

const light2 = {
  position: new Vector3(0, 0, 0),
  color: new Vector3(0, 2, 0),
  radius: 1,
};

const light3 = {
  position: new Vector3(0, 0, 0),
  color: new Vector3(0, 0, 2),
  radius: 1,
};

const lights = [light1, light2, light3];

const material = new RawShaderMaterial({
  uniforms: {
    lights: {
      value: lights,
    },
    cubePos: { value: new Vector3() },
    cubeRotationMatrix: { value: new Matrix3() },
    isRoom: { value: true },
    front: { value: false },
    seed: { value: 0 },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  side: BackSide,
});

const room = new Mesh(new BoxGeometry(10, 5, 10), material);
scene.add(room);

const spotLights = [];
for (const light of lights) {
  const spotLight = new Mesh(
    new IcosahedronGeometry(1, 10),
    new MeshBasicMaterial({ color: 0xff0000 })
  );
  scene.add(spotLight);
  spotLights.push({
    light,
    mesh: spotLight,
    offset: randomInRange(-1000, 1000),
    speed: randomInRange(0.9, 1.1),
  });
}

const cube = new Mesh(
  new RoundedBoxGeometry(1, 1, 1, 0.01, 1),
  material.clone()
);
cube.material.side = FrontSide;
cube.material.uniforms.front.value = true;
cube.material.uniforms.isRoom.value = false;
scene.add(cube);

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

async function init() {
  // const geo = await loadSuzanne();
  // mesh = new Mesh(geo, wornMaterial);
  // scene.add(mesh);
  render();
}

camera.position.set(10, 10, 10);
camera.position.set(0, 13, 0);
camera.lookAt(scene.position);

let frames = 0;

let time = 0;
let prevTime = performance.now();
const mat = new Matrix4();
const rot = new Euler();

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt;

    const t = time / 1000;

    for (const spotLight of spotLights) {
      const r = 2;
      const x = r * Math.cos(spotLight.speed * t + spotLight.offset);
      const y = r * Math.sin(spotLight.speed * 1.1 * t + spotLight.offset);
      const z = r * Math.cos(spotLight.speed * 0.9 * t + spotLight.offset);
      const radius = map(
        -1,
        1,
        0.05,
        0.2,
        Math.cos(spotLight.speed * 0.5 * t + spotLight.offset)
      );
      spotLight.light.position.set(x, y, z);
      spotLight.light.radius = radius;
      spotLight.mesh.position.set(x, y, z);
      spotLight.mesh.scale.set(radius, radius, radius);
      spotLight.mesh.material.color.setRGB(
        spotLight.light.color.x,
        spotLight.light.color.y,
        spotLight.light.color.z
      );
    }

    cube.rotation.set(
      (1.1 * time) / 1000,
      (1 * time) / 1000,
      (0.9 * time) / 1000
    );
    cube.updateMatrix();
    const cubeY = 0; //2 * Math.sin(1.2 * t);
    room.material.uniforms.cubePos.value.set(0, cubeY, 0);
    room.material.uniforms.seed.value = randomInRange(-1000, 1000);
    rot.set(-cube.rotation.x, -cube.rotation.y, -cube.rotation.z, "XYZ");
    mat.makeRotationFromEuler(rot);
    room.material.uniforms.cubeRotationMatrix.value.setFromMatrix4(mat);
    cube.position.set(0, cubeY, 0);
  }

  renderer.render(scene, camera);
  // post.render(scene, camera);

  // capture(renderer.domElement);

  // if (frames > 10 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }
  // frames++;

  renderer.setAnimationLoop(render);
}

function randomize() {}

function goFullscreen() {
  if (renderer.domElement.webkitRequestFullscreen) {
    renderer.domElement.webkitRequestFullscreen();
  } else {
    renderer.domElement.requestFullscreen();
  }
}

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyF") {
    goFullscreen();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  randomize();
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#fullscreenBtn").addEventListener("click", (e) => {
  goFullscreen();
});

function myResize(w, h, dPR) {
  post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
