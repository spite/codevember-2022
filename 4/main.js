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
} from "../third_party/three.module.js";
import { generate } from "./sphere.js";
import { Easings } from "../modules/easings.js";
import { getFBO } from "../modules/fbo.js";

import { Post } from "./post.js";
import { randomInRange, mod, clamp, parabola } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

const material = new MeshStandardMaterial({
  wireframe: !true,
});
material.flatShading = true;

const post = new Post(renderer);

renderer.shadowMap.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.toneMapping = ACESFilmicToneMapping;

const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xffffff, 0.5);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(-1, 1.75, 1);
dirLight.position.multiplyScalar(30);
scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.bias = -0.0001;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const r = 5;
dirLight.shadow.camera.left = -r;
dirLight.shadow.camera.right = r;
dirLight.shadow.camera.top = r;
dirLight.shadow.camera.bottom = -r;
dirLight.shadow.camera.near = 62.5;
dirLight.shadow.camera.far = 72.5;

const camHelper = new CameraHelper(dirLight.shadow.camera);
// scene.add(camHelper);

const glowSphere = new Mesh(
  new IcosahedronGeometry(0.7, 5),
  new MeshBasicMaterial({ color: 0xffffff })
);
scene.add(glowSphere);

function randomizeTransforms() {
  for (const fragment of fragments) {
    fragment.dist = randomInRange(0.1, 3.5);
    fragment.rot = {
      x: (randomInRange(-Math.PI, Math.PI) / 2) * fragment.dist,
      y: (randomInRange(-Math.PI, Math.PI) / 2) * fragment.dist,
      z: (randomInRange(-Math.PI, Math.PI) / 2) * fragment.dist,
    };
  }
}

const group = new Group();
scene.add(group);

camera.position.set(10, 10, 10).setLength(8);
camera.lookAt(scene.position);

const controls = getControls();
controls.minDistance = 3;
controls.maxDistance = 100;
// controls.enablePan = false;

const colorFBO = getFBO(1, 1, { samples: 4 });
const zoomFBO = getFBO(1, 1, { samples: 4 });
let fragments = [];

function add() {
  const vertices = Math.round(randomInRange(100, 500));
  const verticesPerChunk = Math.round(
    randomInRange(0.25 * vertices, 0.5 * vertices)
  );
  fragments = generate(vertices, verticesPerChunk);
  for (const fragment of fragments) {
    group.add(fragment);
    fragment.castShadow = fragment.receiveShadow = true;
    fragment.origin = fragment.position.clone();
  }
}

function remove() {
  for (const fragment of fragments) {
    group.remove(fragment);
  }
}

function init() {
  add();
  randomizeTransforms();
  render();
}

let frames = 0;

let time = 0;
let prevTime = performance.now();

const particle = new Mesh(
  new IcosahedronGeometry(0.1, 4),
  new MeshBasicMaterial({ color: 0xffffff })
);
scene.add(particle);

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running || invalidate) {
    if (!invalidate) {
      time += dt;
    }

    group.rotation.x = time / 5000;
    group.rotation.y = time / 3000;

    const a = parabola(mod(time / 2000, 1), 1);
    const b = Easings.InOutQuint(a);
    const dir = new Vector3();
    const rumble = new Vector3();

    if (!invalidate) {
      if (a < 0.1) {
        randomizeTransforms();
      }
    }
    invalidate = false;

    for (const fragment of fragments) {
      dir
        .copy(fragment.origin)
        .normalize()
        .multiplyScalar(fragment.dist * b);
      fragment.position.copy(fragment.origin).add(dir);
      rumble
        .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, -1))
        .setLength(0.05)
        .multiplyScalar(b);
      fragment.position.add(rumble);
      fragment.rotation.set(
        fragment.rot.x * b,
        fragment.rot.y * b,
        fragment.rot.z * b
      );
    }
  }

  // renderer.render(scene, camera);

  particle.visible = false;
  renderer.setClearColor(0, 1);
  for (const fragment of fragments) {
    fragment.material = new MeshBasicMaterial({ color: 0 });
  }
  renderer.setRenderTarget(zoomFBO);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  particle.visible = true;
  renderer.setClearColor(0x202224, 1);
  for (const fragment of fragments) {
    fragment.material = material;
  }
  renderer.setRenderTarget(colorFBO);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  post.render(colorFBO.texture, zoomFBO.texture);

  // capture(renderer.domElement);

  // if (frames > 10 * 60 && window.capturer.capturing) {
  //   window.capturer.stop();
  //   window.capturer.save();
  // }
  // frames++;

  renderer.setAnimationLoop(render);
}

function randomize() {
  randomizeTransforms();
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
    remove();
    add();
    randomize();
    invalidate = true;
  }

  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyF") {
    goFullscreen();
  }
});

document.querySelector("#randomizeBtn").addEventListener("click", (e) => {
  remove();
  add();
  randomize();
  invalidate = true;
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
