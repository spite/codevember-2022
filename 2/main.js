import {
  scene,
  getControls,
  renderer,
  addResize,
  resize,
  camera,
} from "../modules/renderer.js";
import {
  DataTexture,
  Raycaster,
  Mesh,
  Vector2,
  LinearFilter,
  RGBAFormat,
  PlaneGeometry,
  MeshBasicMaterial,
} from "../third_party/three.module.js";
import { ScottGray2D } from "./scott-gray.js";
import { Layer } from "./Layer.js";
import { natural, natural2 } from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { Post } from "./post.js";
import { randomInRange } from "../modules/Maf.js";
// import { capture } from "../modules/capture.js";

const controls = getControls(camera);

const post = new Post(renderer);

function generateGradient(palette) {
  const gradient = new GradientLinear(palette);
  const selection = [
    gradient.getAt(Math.random()),
    gradient.getAt(Math.random()),
    gradient.getAt(Math.random()),
  ];
  const data = new Uint8Array(selection.length * 4);
  for (let i = 0; i < selection.length; i++) {
    const c = selection[i];
    data[i * 3] = c.r * 255;
    data[i * 3 + 1] = c.g * 255;
    data[i * 3 + 2] = c.b * 255;
    data[i * 3 + 3] = 255;
  }
  const colorTexture = new DataTexture(
    data,
    selection.length,
    1,
    RGBAFormat,
    undefined,
    undefined,
    undefined,
    undefined,
    LinearFilter,
    LinearFilter
  );
  colorTexture.needsUpdate = true;
  return colorTexture;
}

renderer.setClearColor(0x287ae0, 1);

const width = 256 * 4;
const height = 256;
const scottGray = new ScottGray2D(renderer, width, height);

const raycaster = new Raycaster();
const mouse = new Vector2();
function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
renderer.domElement.addEventListener("pointermove", onMouseMove, false);
renderer.domElement.addEventListener("pointerdown", onMouseMove, false);

const LAYERS = 40;
const layers = [];
const layerStep = 0.0025;

function randomizeColors() {
  const colorTexture = generateGradient(natural);
  const colorTexture2 = generateGradient(natural2);
  const seed = randomInRange(-1000, 1000);
  const offset = randomInRange(1, 2);
  for (const layer of layers) {
    layer.gradient = colorTexture;
    layer.gradient2 = colorTexture2;
    layer.material.uniforms.seed.value = seed;
    layer.material.uniforms.scale.value = offset;
  }
}

for (let i = 0; i < LAYERS; i++) {
  const layer = new Layer(renderer);
  const z = 1 + i * layerStep;
  // layer.scale.setScalar(z);
  scene.add(layer);
  layers.push(layer);
}
randomizeColors();

let curShape = 0;
function randomizeShape() {
  let r;
  do {
    r = Math.floor(Math.random() * 3);
  } while (r === curShape);
  curShape = r;

  switch (r) {
    case 0:
      scottGray.setSize(256 * 4, 256);
      scottGray.spherical(false);
      for (const layer of layers) {
        layer.setTorus();
      }
      break;
    case 1:
      scottGray.setSize(256 * 10, 256);
      scottGray.spherical(false);
      for (const layer of layers) {
        layer.setTorusKnot();
      }
      break;
    case 2:
      scottGray.setSize(512, 512);
      scottGray.spherical(true);
      for (const layer of layers) {
        layer.setSphere();
      }
      break;
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
  if (e.code === "Space") {
    running = !running;
  }
  if (e.code === "KeyS") {
    randomizeShape();
  }
  if (e.code === "KeyC") {
    randomizeColors();
  }
  if (e.code === "KeyR") {
    scottGray.randomize();
  }
  if (e.code === "KeyF") {
    goFullscreen();
  }
});

document.querySelector("#pauseBtn").addEventListener("click", (e) => {
  running = !running;
});

document
  .querySelector("#randomizeReactionBtn")
  .addEventListener("click", (e) => {
    scottGray.randomize();
  });

document.querySelector("#randomizeColorsBtn").addEventListener("click", (e) => {
  randomizeColors();
});

document.querySelector("#randomizeShapeBtn").addEventListener("click", (e) => {
  randomizeShape();
});

document.querySelector("#fullscreenBtn").addEventListener("click", (e) => {
  goFullscreen();
});

const point = new Vector2();
const curPoint = new Vector2(0, 0);
let time = 0;
let prevTime = performance.now();

const debug = new Mesh(
  new PlaneGeometry(),
  new MeshBasicMaterial({ map: scottGray.texture })
);
debug.position.x = 1;
// scene.add(debug);

function render() {
  if (running) {
    const t = performance.now();
    const dt = (t - prevTime) / 1000;
    time += dt;
    prevTime = time;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(layers[0]);

    if (intersects.length) {
      point.copy(intersects[0].uv);
      scottGray.simulation.shader.uniforms.contact.value = true;
    } else {
      scottGray.simulation.shader.uniforms.contact.value = false;
    }
    // curPoint.lerp(point, 0.1);
    curPoint.copy(point);

    scottGray.simulation.shader.uniforms.pointer.value.copy(curPoint);

    for (let i = 0; i < 12; i++) {
      scottGray.step();
    }

    const a = Math.sin(time / 1000);

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      layer.material.uniforms.inputMap.value = scottGray.texture;
      layer.material.uniforms.level.value = 1 - i / layers.length;
      layer.material.uniforms.time.value = performance.now();
    }
  }

  post.render(scene, camera);
  // capture(renderer.domElement);
  // renderer.render(scene, camera);
  renderer.setAnimationLoop(render);
}

function myResize(w, h, dpr) {
  post.setSize(w * dpr, h * dpr);
}
addResize(myResize);

camera.position.set(0, 0, 1.25);
camera.lookAt(scene.position);

// controls.enablePan = false;
// controls.minAzimuthAngle = -0.5;
// controls.maxAzimuthAngle = 0.5;
// controls.minPolarAngle = Math.PI / 2 - 0.5;
// controls.maxPolarAngle = Math.PI / 2 + 0.5;

resize();
render();
