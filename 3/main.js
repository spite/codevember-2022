import {
  scene,
  getControls,
  renderer,
  camera,
  addResize,
  resize,
} from "../modules/renderer.js";
import {
  Matrix4,
  Vector3,
  PCFSoftShadowMap,
  DirectionalLight,
  sRGBEncoding,
  HemisphereLight,
  Mesh,
  Plane,
  PlaneHelper,
  TorusKnotBufferGeometry,
  MeshStandardMaterial,
  ACESFilmicToneMapping,
  CameraHelper,
  Color,
} from "../third_party/three.module.js";
import { randomInRange, clamp } from "../modules/Maf.js";
import { Easings } from "../modules/easings.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { Post } from "./post.js";
import { initHdrEnv } from "../modules/hdri.js";
import { natural, natural2, seaside } from "../modules/palettes.js";
// import { capture } from "../modules/capture.js";

const gradient = new GradientLinear(natural);
const gradient2 = new GradientLinear(natural2);
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

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const r = 2;
dirLight.shadow.camera.left = -r;
dirLight.shadow.camera.right = r;
dirLight.shadow.camera.top = r;
dirLight.shadow.camera.bottom = -r;
dirLight.shadow.camera.near = 65;
dirLight.shadow.camera.far = 70;

const camHelper = new CameraHelper(dirLight.shadow.camera);
// scene.add(camHelper);

const controls = getControls();
// controls.enableZoom = false;
// controls.enablePan = false;

let frames = 0;

const reflectedPlane = new Plane(
  new Vector3(
    randomInRange(-1, 1),
    randomInRange(-1, 1),
    randomInRange(-1, 1)
  ).normalize(),
  0
);
const helper = new PlaneHelper(reflectedPlane, 2);
// scene.add(helper);

const reflectedPlaneNeg = new Plane();

const meshes = [];
function initMeshes(envMap) {
  const material = new MeshStandardMaterial({
    roughness: 0,
    metalness: 0,
    color: gradient2.getAt(Math.random()),
    envMap,
  });

  const mesh = new Mesh(
    new TorusKnotBufferGeometry(0.5, 0.075, 200, 30), //, 3, 2),
    material
  );
  mesh.matrixAutoUpdate = false;
  scene.add(mesh);
  mesh.castShadow = mesh.receiveShadow = true;
  meshes.push(mesh);

  const mesh2 = mesh.clone();
  mesh2.material = mesh.material.clone();
  mesh2.matrixAutoUpdate = false;
  scene.add(mesh2);
  meshes.push(mesh2);

  meshes[0].material.clippingPlanes = [reflectedPlane];
  meshes[0].material.clipShadows = true;
  meshes[1].material.clippingPlanes = [reflectedPlaneNeg];
  meshes[1].material.clipShadows = true;
  renderer.localClippingEnabled = true;
}

camera.near = 0.1;
camera.far = 10;

async function init() {
  const envMap = await initHdrEnv("studio_small_03_1k.hdr", renderer);
  initMeshes(envMap);
  resize();
  randomize();
  render();
}

let prevTime = performance.now();
let time = 0;
const mat = new Matrix4();

function makeReflectionMatrix(n, mat) {
  mat.set(
    1 - 2 * n.x * n.x,
    -2 * n.y * n.x,
    -2 * n.z * n.x,
    0,
    -2 * n.y * n.x,
    1 - 2 * n.y * n.y,
    -2 * n.y * n.z,
    0,
    -2 * n.z * n.x,
    -2 * n.y * n.z,
    1 - 2 * n.z * n.z,
    0,
    0,
    0,
    0,
    1
  );
}

function updateMeshes() {
  meshes[0].updateMatrix();
  meshes[1].matrix.copy(mat).multiply(meshes[0].matrix);
}

const nextNormal = new Vector3();
const currentNormal = new Vector3();

const slVec = new Vector3();
const tmp = new Vector3();
const slerp = (start, end, t) => {
  const dot = clamp(start.dot(end), -1, 1);
  const theta = Math.acos(dot) * t;
  tmp.copy(start).multiplyScalar(dot);
  slVec.copy(end).sub(tmp).normalize();

  tmp.copy(start).multiplyScalar(Math.cos(theta));
  slVec.multiplyScalar(Math.sin(theta));
  slVec.add(tmp).normalize();
  return slVec;
};

let interpolation = 0;

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt;

    curBkgColor.lerp(nextBkgColor, interpolation);
    renderer.setClearColor(curBkgColor);

    meshes[0].material.color.lerp(nextObjColor1, interpolation);
    meshes[1].material.color.lerp(nextObjColor2, interpolation);

    const t = slerp(
      currentNormal,
      nextNormal,
      Easings.InOutQuad(clamp(interpolation, 0, 1), 1)
    );
    reflectedPlane.normal.copy(t);
    reflectedPlaneNeg.normal.copy(reflectedPlane.normal).multiplyScalar(-1);

    interpolation += dt * 0.0001;

    const mesh = meshes[0];
    mesh.position
      .set(Math.cos(time / 1000), Math.cos(time / 1100), Math.cos(time / 900))
      .multiplyScalar(0.25);
    mesh.rotation.x = time / 900;
    mesh.rotation.y = time / 1000;
    mesh.rotation.z = time / 800;

    reflectedPlaneNeg.normal.copy(reflectedPlane.normal).multiplyScalar(-1);

    makeReflectionMatrix(reflectedPlane.normal, mat);

    updateMeshes();

    if (interpolation > 1) {
      randomize();
    }
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

const curBkgColor = new Color(0x101010);
const nextBkgColor = new Color();
const nextObjColor1 = new Color();
const nextObjColor2 = new Color();

function randomizeColors() {
  nextBkgColor.copy(gradient.getAt(Math.random()), 1);
  nextObjColor1.copy(gradient2.getAt(Math.random()), 1);
  nextObjColor2.copy(gradient2.getAt(Math.random()), 1);
}

function randomize() {
  randomizeColors();

  currentNormal.copy(reflectedPlane.normal);
  interpolation = 0;

  nextNormal
    .set(randomInRange(-1, 1), randomInRange(-1, 1), randomInRange(-1, 1))
    .normalize();

  reflectedPlane.normal.copy(currentNormal);

  reflectedPlaneNeg.normal.copy(reflectedPlane.normal).multiplyScalar(-1);

  makeReflectionMatrix(reflectedPlane.normal, mat);
  updateMeshes();
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
  post.setSize(w, h, dPR);
}
addResize(myResize);

resize();
init();

// window.start = () => {
//   frames = 0;
//   window.capturer.start();
// };
