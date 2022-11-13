import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { Group, Vector2 } from "../third_party/three.module.js";
import { group as dunes, step, randomize as randomizeDunes } from "./desert.js";
import { Post } from "./post.js";
import { randomInRange, mod, clamp, parabola } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

scene.add(dunes);

const post = new Post(renderer);

renderer.shadowMap.enabled = true;

const group = new Group();
scene.add(group);

camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

const controls = getControls();
// controls.minDistance = 3;
// controls.maxDistance = 100;
// controls.enablePan = false;

function init() {
  randomize();
  render();
}

let frames = 0;

let time = 0;
let prevTime = performance.now();
const offset = new Vector2(0, 0);
let rotation = 0;

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running || invalidate) {
    if (running) {
      time += dt;
    }

    const a = time / 200000;
    const r = 100;
    offset.set(r * Math.cos(a), r * Math.sin(a));
    rotation = a * 50;
    step(renderer, time / 20000, offset, rotation);
    invalidate = false;
  }

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

function randomize() {
  renderer.setClearColor(randomizeDunes(), 1);
  invalidate = true;
}

function goFullscreen() {
  if (renderer.domElement.webkitRequestFullscreen) {
    renderer.domElement.webkitRequestFullscreen();
  } else {
    renderer.domElement.requestFullscreen();
  }
}

let running = true;
let invalidate = false;

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
  post.setSize(w * dPR, h * dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
