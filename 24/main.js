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
  PlaneGeometry,
} from "../third_party/three.module.js";

import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
// import { DeviceOrientationControls } from "../third_party/DeviceOrientationControls.js";
// import { capture } from "../modules/capture.js";
import {
  particles,
  step as stepSim,
  simShader,
  randomize as randomizeColor,
} from "./boids.js";

const ssao = new SSAO();

let reset = true;
scene.add(particles);

const debug = new Mesh(
  new PlaneGeometry(1, 1),
  new MeshBasicMaterial({
    map: particles.material.uniforms.positionTexture.value,
  })
);
// scene.add(debug);

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

async function init() {
  render();
}

let frames = 0;

let time = 0;
let prevTime = performance.now();

stepSim(renderer, true);
debug.material.map = simShader.uniforms.velocityTexture.value;

function step() {
  stepSim(renderer);
  debug.material.map = simShader.uniforms.velocityTexture.value;
}

window.step = step;

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt;
    step();
  }
  renderer.render(scene, camera);

  ssao.shader.uniforms.positionTexture.value =
    particles.material.uniforms.positionTexture.value;
  ssao.shader.uniforms.velocityTexture =
    particles.material.uniforms.velocityTexture.value;
  ssao.shader.uniforms.gradientTexture =
    particles.material.uniforms.gradientTexture.value;
  ssao.shader.uniforms.types.value = particles.material.uniforms.types.value;

  ssao.render(renderer, scene, camera);
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
  randomizeColor();
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
  // post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
