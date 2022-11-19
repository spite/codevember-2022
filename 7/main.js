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
  Matrix4,
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
  FloatType,
  OrthographicCamera,
  RGBAFormat,
  PerspectiveCamera,
  LinearFilter,
  RawShaderMaterial,
  GLSL3,
} from "../third_party/three.module.js";
import { Easings } from "../modules/easings.js";
import { getFBO } from "../modules/fbo.js";
import {
  mesh,
  depthMaterial,
  simulation,
  posTexture,
  randomize as randomizeColors,
  step,
} from "./smoke.js";
import { Post } from "./post.js";
import { randomInRange, mod, clamp, parabola } from "../modules/Maf.js";
import { shader as orthoVs } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { ShaderPingPongPass } from "../modules/ShaderPingPongPass.js";
// import { capture } from "../modules/capture.js";

const shadowSize = 1024;
const depthFBO = getFBO(shadowSize, shadowSize, {
  format: RGBAFormat,
  type: FloatType,
  minFilter: LinearFilter,
  magFilter: LinearFilter,
});

const blendFs = `precision highp float;

in vec2 vUv;

uniform sampler2D inputTexture;
uniform sampler2D depthTexture;

out vec4 color;

void main() {
  vec4 base = texture(inputTexture, vUv);
  vec4 blend = texture(depthTexture, vUv);
  color = mix(base, blend, .1);
}`;

const blendDepthShader = new RawShaderMaterial({
  uniforms: {
    inputTexture: { value: depthFBO.texture },
    depthTexture: { value: depthFBO.texture },
  },
  vertexShader: orthoVs,
  fragmentShader: blendFs,
  glslVersion: GLSL3,
});
const blendPass = new ShaderPingPongPass(blendDepthShader, {
  format: RGBAFormat,
  type: FloatType,
});
blendPass.setSize(depthFBO.width, depthFBO.height);

let s = 5;
const shadowCamera = new OrthographicCamera(-s, s, s, -s, -20, 20);
shadowCamera.position.set(0, 10, 10);
shadowCamera.lookAt(scene.position);

const light = new Mesh(
  new IcosahedronGeometry(0.1, 5),
  new MeshBasicMaterial({ color: 0xffffff })
);
light.position.copy(shadowCamera.position);
scene.add(light);

scene.add(mesh);
const debug = new Mesh(
  new PlaneGeometry(10, 10),
  new MeshBasicMaterial({
    map: null,
  })
);
scene.add(debug);

const post = new Post(renderer);

const group = new Group();
scene.add(group);

camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

const controls = getControls();
// controls.minDistance = 3;
// controls.maxDistance = 100;
// controls.enablePan = false;

function init() {
  render();
}

const biasMatrix = new Matrix4()
  .set(
    0.5,
    0.0,
    0.0,
    0.0,
    0.0,
    0.5,
    0.0,
    0.0,
    0.0,
    0.0,
    0.5,
    0.0,
    0.5,
    0.5,
    0.5,
    1.0
  )
  .transpose();

let frames = 0;

let time = 0;
let prevTime = performance.now();

function render() {
  const t = performance.now();
  const dt = t - prevTime;
  prevTime = t;

  if (running) {
    time += dt;

    step(renderer, dt / 32);
    simulation.shader.uniforms.shock.value = shock;
    if (shock) {
      shock = false;
    }
    depthMaterial.uniforms.time.value = randomInRange(-1000, 1000);
    depthMaterial.uniforms.positions.value = simulation.texture;
    mesh.material.uniforms.positions.value = simulation.texture;

    blendPass.render(renderer);
    blendPass.shader.uniforms.inputTexture.value = blendPass.current.texture;
    mesh.material.uniforms.shadowBuffer.value = blendPass.texture;
  }

  mesh.material.uniforms.shadowMatrix.value.copy(biasMatrix);
  mesh.material.uniforms.shadowMatrix.value.multiply(
    shadowCamera.projectionMatrix
  );
  mesh.material.uniforms.shadowMatrix.value.multiply(
    shadowCamera.matrixWorldInverse
  );
  mesh.material.uniforms.shadowMatrix.value.multiply(mesh.matrixWorld);

  debug.visible = false;
  light.visible = false;
  scene.overrideMaterial = depthMaterial;
  renderer.setRenderTarget(depthFBO);
  renderer.setClearColor(0, 1);
  renderer.render(scene, shadowCamera);
  renderer.setRenderTarget(null);
  debug.material.map = blendPass.texture;

  debug.visible = false;
  light.visible = true;
  scene.overrideMaterial = null;
  renderer.setClearColor(0x202020, 1);
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

let shock = false;
function randomize() {
  randomizeColors();
  shock = true;
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
