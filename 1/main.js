import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import { PoissonSphere3D } from "../modules/poisson.js";
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
} from "../third_party/three.module.js";
import { TAU } from "../modules/Maf.js";
import { GLTFLoader } from "../third_party/GLTFLoader.js";
import { SSAO } from "./SSAO.js";
import { Post } from "./post.js";
import { DeviceOrientationControls } from "../third_party/DeviceOrientationControls.js";
import { material, data, generatePerlin } from "./volume.js";
// import { capture } from "../modules/capture.js";

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

let mesh;
async function init() {
  const geo = new BoxGeometry(1, 1, 1);
  mesh = new Mesh(geo, material);
  scene.add(mesh);

  const debug = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({
      wireframe: true,
      color: 0xff00ff,
      opacity: 0.5,
      transparent: true,
    })
  );
  // scene.add(debug);

  render();
}

let frames = 0;

function render() {
  const time = performance.now();
  mesh.material.uniforms.cameraPos.value.copy(camera.position);
  mesh.material.uniforms.time.value = time;

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
  for (const p of particles) {
    const rotx = Math.round(randomInRange(0, 10));
    const roty = Math.round(randomInRange(0, 10));
    p.toRotx = rotx;
    p.toRoty = roty;
    p.toSize = randomInRange(0.5, 2.5);
    p.toPosition
      .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1))
      .normalize()
      .multiplyScalar(15);
  }
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
