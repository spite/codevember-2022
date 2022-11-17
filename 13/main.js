import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { Mesh, Group, TorusKnotGeometry } from "../third_party/three.module.js";
import { material } from "./object.js";
import { Easings } from "../modules/easings.js";

import { Post } from "./post.js";
import { mod, PI, TAU } from "../modules/Maf.js";

const post = new Post(renderer);

const geo = new TorusKnotGeometry(1, 0.25, 400, 36, 3, 5);
const group = new Group();

const mesh = new Mesh(geo, material);
group.add(mesh);
const e = 0.05;
const mesh2 = new Mesh(geo, material.clone());
mesh2.material.uniforms.offset.value = e;
mesh2.material.uniforms.color.value.setHex(0x93d6ce);
group.add(mesh2);
const mesh3 = new Mesh(geo, material.clone());
mesh3.material.uniforms.offset.value = -e;
mesh3.material.uniforms.color.value.setHex(0xc1cb3f);
group.add(mesh3);

scene.add(group);

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

renderer.setClearColor(0x050505, 1);

camera.position.set(1, 1, 1);
camera.lookAt(scene.position);

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

  if (running) {
    time += dt;

    const t = mod(time, 30000) / 30000;
    mesh.material.uniforms.time.value = t;
    mesh2.material.uniforms.time.value = t;
    mesh3.material.uniforms.time.value = t;

    mesh.rotation.x = Easings.InOutQuint(t) * TAU;
    mesh2.rotation.y = Easings.InOutQuint(mod(t + 1 / 3, 1)) * TAU;
    mesh3.rotation.z = Easings.InOutQuint(mod(t + 2 / 3, 1)) * TAU;

    group.rotation.x = time / 1000;
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
  // if (e.code === "KeyR") {
  //   randomize();
  // }
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
  post.setSize(w * dPR, h * dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
