import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  InstancedMesh,
  Matrix4,
  Group,
  Object3D,
  Vector3,
  PCFSoftShadowMap,
  DirectionalLight,
  sRGBEncoding,
  HemisphereLight,
  ACESFilmicToneMapping,
  DynamicDrawUsage,
  Vector2,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  Sphere,
} from "../third_party/three.module.js";
import { fragments } from "./sphere.js";
import { Easings } from "../modules/easings.js";

import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
import { randomInRange, mod, parabola } from "../modules/Maf.js";
// import { DeviceOrientationControls } from "../third_party/DeviceOrientationControls.js";
// import { capture } from "../modules/capture.js";

renderer.shadowMap.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.toneMapping = ACESFilmicToneMapping;

// mesh.castShadow = mesh.receiveShadow = true;

const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xffffff, 0.5);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(-1, 1.75, 1);
dirLight.position.multiplyScalar(30);
scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const r = 4;
dirLight.shadow.camera.left = -r;
dirLight.shadow.camera.right = r;
dirLight.shadow.camera.top = r;
dirLight.shadow.camera.bottom = -r;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 100;

for (const fragment of fragments) {
  scene.add(fragment);
  fragment.castShadow = fragment.receiveShadow = true;

  fragment.origin = fragment.position.clone();
  fragment.dist = randomInRange(0.1, 1.5);
  fragment.rot = {
    x: (randomInRange(-Math.PI, Math.PI) / 2) * fragment.dist,
    y: (randomInRange(-Math.PI, Math.PI) / 2) * fragment.dist,
    z: (randomInRange(-Math.PI, Math.PI) / 2) * fragment.dist,
  };
}

camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

// mesh.scale.set(0.1, 0.1, 0.1);
const controls = getControls();
// // controls.enableZoom = false;
// // controls.enablePan = false;

// scene.add(mesh);

async function init() {
  render();
}

let frames = 0;

let time = 0;
let prevTime = performance.now();
const center = new Vector3();

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt;

    const a = parabola(mod(time / 2000, 1), 1); //0.5 + 0.5 * Math.cos(time / 1000);
    const b = Easings.InOutQuint(a);
    const dir = new Vector3();

    for (const fragment of fragments) {
      dir
        .copy(fragment.origin)
        .normalize()
        .multiplyScalar(fragment.dist * b);
      fragment.position.copy(fragment.origin).add(dir);
      fragment.rotation.set(
        fragment.rot.x * b,
        fragment.rot.y * b,
        fragment.rot.z * b
      );
    }
  }
  renderer.render(scene, camera);
  // ssao.render(renderer, scene, camera);
  // post.render(ssao.output);

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

renderer.setClearColor(0x101010, 1);

function myResize(w, h, dPR) {
  // ssao.setSize(w, h, dPR);
  // post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
