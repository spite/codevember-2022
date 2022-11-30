import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  mesh,
  update,
  curlPass,
  arrowGeometry,
  lineGeometry,
} from "./wind-block.js";

import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
import { randomInRange } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

const ssao = new SSAO(renderer);
const post = new Post(renderer);

camera.near = 3;
camera.far = 10;
camera.updateProjectionMatrix();
camera.position.set(1, 1, 1).setLength(8);

scene.add(mesh);

const debugFs = `precision highp float;
precision highp sampler3D;

in vec2 vUv;

uniform sampler3D map;

out vec4 color;

void main() {
  color = texture(map, vec3(vUv, .5));
}`;

const controls = getControls();
controls.minDistance = 5;
controls.maxDistance = 10;
controls.enablePan = false;

async function init() {
  render();
}

let frames = 0;

let time = 0;
let prevTime = performance.now();

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  const r = 2;
  camera.near = camera.position.length() - r;
  camera.far = camera.position.length() + r;
  camera.updateProjectionMatrix();

  if (running || invalidate) {
    if (!invalidate) {
      time += dt;
      mesh.rotation.y += dt / 10000;
    }
    update(renderer, time / 10000);
    ssao.shader.uniforms.time.value = time / 1000;

    ssao.shader.uniforms.directionsTex.value = curlPass.texture;
    ssao.interpolate(time / 1000);
    invalidate = false;
  }
  ssao.render(scene, camera);
  post.render(ssao.output);

  // capture(renderer.domElement);

  // if (frames > 10 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }
  // frames++;

  renderer.setAnimationLoop(render);
}

let invalidate = false;
const geometries = [arrowGeometry, lineGeometry];
function randomize() {
  mesh.geometry = geometries[Math.floor(Math.random() * geometries.length)];
  ssao.shader.uniforms.scale.value.set(
    randomInRange(0.8, 1.2),
    randomInRange(0.8, 2)
  );
  ssao.shader.uniforms.threshold.value = randomInRange(1, 3);
  ssao.randomizeColors();
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
  ssao.setSize(w, h, dPR);
  post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
