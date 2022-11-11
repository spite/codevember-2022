import {
  scene,
  renderer,
  camera,
  addResize,
  resize,
  getControls,
} from "../modules/renderer.js";
import {
  Matrix4,
  Mesh,
  MeshBasicMaterial,
} from "../third_party/three.module.js";
import { disc } from "./disc.js";
import { OBJLoader } from "../third_party/OBJLoader.js";
import { getFBO } from "../modules/fbo.js";
import { Post } from "./post.js";
// import { capture } from "../modules/capture.js";

const controls = getControls();

const post = new Post(renderer);

renderer.shadowMap.enabled = true;

scene.add(disc);

camera.position.set(0, 0, 10);
camera.lookAt(scene.position);

const colorFBO = getFBO(1, 1, { samples: 4 });
const zoomFBO = getFBO(1, 1, { samples: 4 });

async function loadModel(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadIcosahedron() {
  const model = await loadModel("../assets/icosahedron.obj");
  const geo = model.children[0].geometry;
  geo.center();
  const scale = 0.5;
  geo.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geo;
}

let sun;
let planet;
async function init() {
  const geo = await loadIcosahedron();
  planet = new Mesh(geo, new MeshBasicMaterial({ color: 0 }));
  scene.add(planet);
  planet.position.z = 2;

  sun = new Mesh(geo, new MeshBasicMaterial({ color: 0xffffff }));
  sun.scale.setScalar(1.2);
  scene.add(sun);

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

    disc.lookAt(camera.position);
    disc.material.uniforms.time.value = time / 500;

    // camera.position.set(0, 0, 10 + 2 * Math.cos(time / 2000));

    planet.position.x = 0.1 * Math.cos(time / 1500);
    planet.position.y = 0.1 * Math.cos(time / 1250);
    planet.position.z = 2 + Math.cos(time / 1000);

    planet.rotation.x += dt / 5000;
    planet.rotation.y += (dt / 5000) * 0.66;

    sun.rotation.x += (dt / 5000) * 0.37;
    sun.rotation.y += (dt / 5000) * 0.26;
  }

  // renderer.render(scene, camera);

  renderer.setRenderTarget(colorFBO);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  post.render(colorFBO.texture);

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

let running = true;

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyF") {
    goFullscreen();
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document.querySelector("#fullscreenBtn").addEventListener("click", (e) => {
  goFullscreen();
});

function myResize(w, h, dPR) {
  colorFBO.setSize(w * dPR, h * dPR);
  zoomFBO.setSize(w * dPR, h * dPR);
  post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
