import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { DoubleSide, FrontSide } from "../third_party/three.module.js";
import { init as initMesh, load as loadGeometries } from "./object.js";

import { Post } from "./post.js";
import { randomInRange } from "../modules/Maf.js";
// import { DeviceOrientationControls } from "../third_party/DeviceOrientationControls.js";
// import { capture } from "../modules/capture.js";

const post = new Post(renderer);

camera.position.set(0, 0, 1).setLength(8);

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

let mesh;
let geometries;
async function init() {
  geometries = await loadGeometries();
  mesh = await initMesh(geometries);
  const a = 0.3;
  mesh.rotation.set(-a, 0, a);
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
    mesh.rotation.y = time / 4000;
  }

  mesh.material.uniforms.time.value = time / 2000;
  // renderer.render(scene, camera);
  post.render(scene, camera);

  // capture(renderer.domElement);

  // if (frames > 10 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }
  // frames++;

  renderer.setAnimationLoop(render);
}

let transparent = true;
let curShape = 0;

function randomizeShape() {
  let newShape;
  if (transparent) {
    do {
      newShape = Math.floor(Math.random() * geometries.transparent.length);
    } while (newShape === curShape);
    curShape = newShape;
    mesh.geometry = geometries.transparent[newShape];
  } else {
    do {
      newShape = Math.floor(Math.random() * geometries.solid.length);
    } while (newShape === curShape);
    curShape = newShape;
    mesh.geometry = geometries.solid[newShape];
  }
}

function randomizeMaterial() {
  if (transparent) {
    mesh.material.transparent = true;
    mesh.material.depthWrite = false;
    mesh.material.side = DoubleSide;
    mesh.material.uniforms.opacity.value = randomInRange(0.75, 1);
    mesh.material.uniforms.boost.value = randomInRange(0.5, 1);
  } else {
    mesh.material.transparent = false;
    mesh.material.depthWrite = true;
    mesh.material.side = FrontSide;
    mesh.material.uniforms.opacity.value = randomInRange(0, 1);
    mesh.material.uniforms.boost.value = randomInRange(1, 3);
  }
  mesh.material.uniforms.roughness.value = randomInRange(0, 0.01);
  mesh.material.uniforms.distort.value = randomInRange(0, 0.2);
  mesh.material.uniforms.offset.value = randomInRange(-1000, 1000);
  mesh.material.uniforms.rimBoost.value = randomInRange(1, 10);
  window.uniforms = mesh.material.uniforms;
}

function goFullscreen() {
  if (renderer.domElement.webkitRequestFullscreen) {
    renderer.domElement.webkitRequestFullscreen();
  } else {
    renderer.domElement.requestFullscreen();
  }
}

function randomize() {
  transparent = Math.random() > 0.5;
  randomizeShape();
  randomizeMaterial();
}

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
  if (e.code === "KeyS") {
    randomizeShape();
  }
  if (e.code === "KeyM") {
    randomizeMaterial();
  }
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyF") {
    goFullscreen();
  }
});

document.querySelector("#randomizeShpBtn").addEventListener("click", (e) => {
  randomizeShape();
});

document.querySelector("#randomizeMtlBtn").addEventListener("click", (e) => {
  randomizeMaterial();
});

document.querySelector("#randomizeAllBtn").addEventListener("click", (e) => {
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
  post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
