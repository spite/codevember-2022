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
  DynamicDrawUsage,
  Vector2,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  TorusKnotGeometry,
  IcosahedronGeometry,
  TorusGeometry,
} from "../third_party/three.module.js";
import { material, randomize as randomizeColors } from "./object.js";
import {
  loadSuzanne,
  loadIcosahedron,
  generateBlob,
} from "../modules/models.js";

import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
// import { DeviceOrientationControls } from "../third_party/DeviceOrientationControls.js";
// import { capture } from "../modules/capture.js";

camera.position.set(1, 1, 1).setLength(6);

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

let mesh;

async function init() {
  // const geometry = await loadIcosahedron();
  // const geometry = generateBlob();
  // const geometry = await loadSuzanne();
  // const geometry = new IcosahedronGeometry(1, 10);
  // const geometry = new TorusKnotGeometry(1, 0.3, 200, 40);
  const geometry = new TorusGeometry(1, 0.4, 200, 40);
  mesh = new Mesh(geometry, material);
  scene.add(mesh);

  render();
}

let frames = 0;

let time = 0;
let prevTime = performance.now();

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt;
  }
  mesh.material.uniforms.time.value = time / 10000;
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

function randomize() {
  randomizeColors();
}

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
