import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  Vector3,
  PCFSoftShadowMap,
  DirectionalLight,
  MeshStandardMaterial,
  sRGBEncoding,
  HemisphereLight,
  ACESFilmicToneMapping,
  Mesh,
  IcosahedronGeometry,
  PlaneGeometry,
  AmbientLight,
  InstancedMesh,
  Matrix4,
  FogExp2,
} from "../third_party/three.module.js";
import { Easings } from "../modules/easings.js";
import { getFBO } from "../modules/fbo.js";
import { Post } from "./post.js";
import { SSAO } from "./SSAO.js";
import { parabola, randomInRange, TAU } from "../modules/Maf.js";
import { RoundedPrismGeometry } from "./RoundedPrismGeometry.js";
// import { capture } from "../modules/capture.js";
import { perlin2 } from "../third_party/perlin.js";

const ssao = new SSAO();

const ground = new Mesh(
  new PlaneGeometry(1000, 1000),
  new MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0 })
);
ground.castShadow = ground.receiveShadow = true;
ground.geometry.rotateX(-Math.PI / 2);
scene.add(ground);

const backdrop = new Mesh(
  new IcosahedronGeometry(50, 100),
  new MeshStandardMaterial({ color: 0xffffff })
);
backdrop.geometry.scale(-1, 1, 1);
scene.add(backdrop);

scene.fog = new FogExp2(0xffffff, 0.02);

const width = 100;
const height = 100 / (Math.sqrt(3) / 2);

const geo = new RoundedPrismGeometry(1, 20, 6, 0.01);
const mesh = new InstancedMesh(
  geo,
  new MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0,
    flatShading: true,
  }),
  width * height
);
scene.add(mesh);
mesh.scale.set(0.1, 0.1, 0.1);
mesh.castShadow = mesh.receiveShadow = true;

const params = {
  distanceFactor: 2,
  timeFactor1: 1,
  perlinScale: 10,
  timeFactor2: 1,
  timeFactor3: 1.1,
  scale: 5,
};
window.params = params;

function update(time) {
  const mat = new Matrix4();
  let ptr = 0;
  const v = new Vector3();
  const f = Math.sqrt(3) / 2;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - 0.5 * width;
      const dz = y * f - 0.5 * height * f;

      const d = Math.sqrt(dx * dx + dz * dz);
      const a = Math.atan2(dx, dz);
      let h = Math.cos(d / params.distanceFactor + time * params.timeFactor1);
      h = Easings.InOutQuad(0.5 + 0.5 * h);
      h +=
        0.5 *
        perlin2(
          dx / params.perlinScale + params.timeFactor2 * time,
          dz / params.perlinScale + params.timeFactor3 * time
        );
      h *= parabola(x / width, 1) * parabola(y / height, 1);
      v.set(dx, h * params.scale - 10, dz);
      if (y % 2 === 1) {
        v.x += 0.5;
      }
      mat.makeTranslation(v.x, v.y, v.z);
      mesh.setMatrixAt(ptr, mat);
      ptr++;
    }
  }
  mesh.instanceMatrix.needsUpdate = true;
}

renderer.shadowMap.enabled = true;
renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.toneMapping = ACESFilmicToneMapping;

const post = new Post(renderer);

const ambientLight = new AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.5);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xffffff, 0.5);
dirLight.position.set(-1, 0.5, 1);
dirLight.position.multiplyScalar(3);
scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const r = 8;
dirLight.shadow.camera.left = -r;
dirLight.shadow.camera.right = r;
dirLight.shadow.camera.top = r;
dirLight.shadow.camera.bottom = -r;
dirLight.shadow.camera.near = -10;
dirLight.shadow.camera.far = 15;

camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

const controls = getControls();
// controls.minDistance = 3;
// controls.maxDistance = 100;
// controls.enablePan = false;

function init() {
  render();
}

let frames = 0;

let time = 0;
let prevTime = performance.now();
renderer.setClearColor(0xff00ff, 0);

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running || invalidate) {
    if (!invalidate) {
      time += dt;
      mesh.rotation.y += dt / 10000;
    }
    invalidate = false;
    update(time / 1000);
  }

  // renderer.render(scene, camera);

  ssao.render(renderer, scene, camera);
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

function randomize() {
  params.distanceFactor = randomInRange(2, 8);
  params.timeFactor1 = randomInRange(-3, 3);

  params.perlinScale = randomInRange(1, 100);
  params.timeFactor2 = randomInRange(-3, 3);
  params.timeFactor3 = randomInRange(-3, 3);

  params.scale = randomInRange(1, 20);

  mesh.rotation.y = randomInRange(-TAU, TAU);

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

function myResize(w, h, dPR) {
  post.setSize(w * dPR, h * dPR);
  ssao.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
