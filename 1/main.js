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
  BackSide,
  FrontSide,
} from "../third_party/three.module.js";
import { Easings } from "../modules/easings.js";
import { getFBO } from "../modules/fbo.js";
import { mesh } from "./object.js";
import { Post } from "./post.js";
import { randomInRange, mod, clamp, parabola } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

scene.add(mesh);

const post = new Post(renderer);

renderer.shadowMap.enabled = true;

const group = new Group();
scene.add(group);

camera.position.set(1, 1, 1).setLength(6);
camera.lookAt(scene.position);

const controls = getControls();
controls.minDistance = 4;
controls.maxDistance = 10;
controls.enablePan = false;

const colorFBO = getFBO(1, 1, { samples: 4 });
const backZoomFBO = getFBO(1, 1, { samples: 4 });
const frontZoomFBO = getFBO(1, 1, { samples: 4 });

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

    mesh.material.uniforms.time.value = time;

    mesh.rotation.x += dt / 10000;
    mesh.rotation.y += (dt / 10000) * 0.66;

    const a = parabola(mod(time / 2000, 1), 1);
    const b = Easings.InOutQuint(a);
    const dir = new Vector3();
  }

  // renderer.render(scene, camera);

  renderer.setClearColor(0, 1);

  mesh.material.side = BackSide;
  mesh.material.uniforms.matcap.value = false;
  renderer.setRenderTarget(backZoomFBO);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  mesh.material.side = FrontSide;
  mesh.material.uniforms.matcap.value = false;
  renderer.setRenderTarget(frontZoomFBO);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  renderer.setClearColor(0x101010, 0);
  mesh.material.uniforms.matcap.value = true;
  renderer.setRenderTarget(colorFBO);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  post.render(colorFBO.texture, backZoomFBO.texture, frontZoomFBO.texture);

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
  colorFBO.setSize(w * dPR, h * dPR);
  const wz = (w * dPR) / 2;
  const hz = (h * dPR) / 2;
  backZoomFBO.setSize(wz, hz);
  frontZoomFBO.setSize(wz, hz);
  post.setSize(w * dPR, h * dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
