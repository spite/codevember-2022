import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  IcosahedronGeometry,
  Mesh,
  TorusGeometry,
  TorusKnotGeometry,
} from "../third_party/three.module.js";
import { material, randomize as randomizeColors } from "./object.js";
import {
  loadSuzanne,
  loadBox,
  loadIcosahedron,
  generateBlob,
  loadDodecahedron,
} from "../modules/models.js";

import { Post } from "./post.js";
// import { capture } from "../modules/capture.js";

const post = new Post(renderer);

camera.position.set(0, 0, 1).setLength(4);

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

let mesh;
let geometries;
let currentGeometry = null;

async function init() {
  randomizeColors(renderer);
  geometries = await Promise.all([
    loadDodecahedron(),
    loadIcosahedron(),
    loadBox(),
    generateBlob(),
    loadSuzanne(),
    new IcosahedronGeometry(0.75, 10),
    new TorusKnotGeometry(0.5, 0.15, 200, 40),
    new TorusGeometry(0.5, 0.2, 200, 40),
  ]);
  currentGeometry = geometries[0];
  mesh = new Mesh(currentGeometry, material);
  mesh.rotation.set(0.1, 0.0, 0.2);
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
  mesh.rotation.y = time / 10000;
  mesh.material.uniforms.time.value = time / 100000;
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

function goFullscreen() {
  if (renderer.domElement.webkitRequestFullscreen) {
    renderer.domElement.webkitRequestFullscreen();
  } else {
    renderer.domElement.requestFullscreen();
  }
}

function randomizeGeometry() {
  let geo;
  do {
    geo = Math.floor(Math.random() * geometries.length);
  } while (geo === currentGeometry);
  mesh.geometry = geometries[geo];
  currentGeometry = geo;
}

function randomize() {
  randomizeGeometry();
  randomizeColors(renderer);
}

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    randomize();
  }
  if (e.code === "KeyS") {
    randomizeGeometry();
  }
  if (e.code === "KeyM") {
    randomizeColors(renderer);
  }
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyF") {
    goFullscreen();
  }
});

document.querySelector("#randomizeShapeBtn").addEventListener("click", (e) => {
  randomizeGeometry();
});

document
  .querySelector("#randomizeMaterialBtn")
  .addEventListener("click", (e) => {
    randomizeColors(renderer);
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
