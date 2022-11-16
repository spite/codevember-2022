import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  CameraHelper,
  Vector3,
  DoubleSide,
  PCFSoftShadowMap,
  DirectionalLight,
  MeshStandardMaterial,
  sRGBEncoding,
  HemisphereLight,
  ACESFilmicToneMapping,
  Mesh,
  MeshBasicMaterial,
  IcosahedronGeometry,
  Group,
  PlaneGeometry,
} from "../third_party/three.module.js";
import { Easings } from "../modules/easings.js";
import { getFBO } from "../modules/fbo.js";
import {
  mesh,
  mesh2,
  simulation,
  posTexture,
  step,
  randomizeColors,
} from "./wisp.js";
import { Post } from "./post.js";
import { randomInRange, mod, clamp, parabola } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

const group = new Group();
mesh.scale.setScalar(0.9);
group.add(mesh);
group.add(mesh2);
scene.add(group);
// const debug = new Mesh(
//   new PlaneGeometry(10, 10),
//   new MeshBasicMaterial({
//     map: post,
//   })
// );
// scene.add(debug);

const post = new Post(renderer);

renderer.shadowMap.enabled = true;

camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

const controls = getControls();
controls.minDistance = 3;
controls.maxDistance = 100;
controls.enablePan = false;

function init() {
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

    group.rotation.x += dt / 10000;
    group.rotation.y += (dt / 10000) * 0.66;

    step(renderer, time / 1000, dt / 16);
    mesh2.material.uniforms.positions.value = simulation.texture;
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

randomize();

function randomize() {
  const bkg = randomizeColors();
  renderer.setClearColor(bkg, 1);
  const offset = randomInRange(-1000, 1000);
  mesh.material.uniforms.offset.value = offset;
  simulation.shader.uniforms.offset.value = offset;
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
