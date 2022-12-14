import { GLTFLoader } from "../third_party/GLTFLoader.js";
import { OBJLoader } from "../third_party/OBJLoader.js";
import {
  IcosahedronGeometry,
  Matrix4,
  Vector3,
} from "../third_party/three.module.js";
import { simplex3 } from "../third_party/perlin.js";
import { weld, toIndexed } from "../modules/geometry-index.js";

async function loadOBJ(file) {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadGLTF(file) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(file, resolve, null, reject);
  });
}

async function loadSuzanne() {
  const scene = await loadGLTF("../assets/suzanne.glb");
  const geometry = scene.scenes[0].children[0].geometry;
  const mat = new Matrix4().makeRotationX(-Math.PI / 2);
  geometry.applyMatrix4(mat);
  geometry.scale(0.75, 0.75, 0.75);
  return geometry;
}

async function loadSuzanneHard() {
  const scene = await loadGLTF("../assets/suzanne-hard.glb");
  const geometry = scene.scenes[0].children[0].geometry;
  const mat = new Matrix4().makeRotationX(-Math.PI / 2);
  geometry.applyMatrix4(mat);
  geometry.scale(0.75, 0.75, 0.75);
  return geometry;
}

async function loadTorusHard() {
  const scene = await loadGLTF("../assets/torus-hard.glb");
  const geometry = scene.scenes[0].children[0].geometry;
  const mat = new Matrix4().makeRotationX(-Math.PI / 2);
  geometry.applyMatrix4(mat);
  geometry.scale(0.75, 0.75, 0.75);
  return geometry;
}

async function loadBunny() {
  const scene = await loadGLTF("../assets/stanford_bunny.glb");
  const geometry = scene.scenes[0].children[0].geometry;
  geometry.center();
  const mat = new Matrix4().makeRotationX(Math.PI / 2);
  geometry.applyMatrix4(mat);
  return geometry;
}

async function loadDragon() {
  const scene = await loadGLTF("../assets/dragon.glb");
  const geometry = scene.scenes[0].children[0].geometry;
  geometry.center();
  const mat = new Matrix4().makeRotationX(Math.PI / 2);
  geometry.applyMatrix4(mat);
  geometry.scale(2, 2, 2);
  return geometry;
}
async function loadIcosahedron() {
  const model = await loadOBJ("../assets/icosahedron.obj");
  const geometry = model.children[0].geometry;
  geometry.center();
  const scale = 0.5;
  geometry.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geometry;
}

async function loadDodecahedron() {
  const model = await loadOBJ("../assets/dodecahedron.obj");
  const geometry = model.children[0].geometry;
  geometry.center();
  const scale = 0.6;
  geometry.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geometry;
}

async function loadBox() {
  const model = await loadOBJ("../assets/box.obj");
  const geometry = model.children[0].geometry;
  geometry.center();
  const scale = 0.6;
  geometry.applyMatrix4(new Matrix4().makeScale(scale, scale, scale));
  return geometry;
}

function generateBlob() {
  const geometry = weld(toIndexed(new IcosahedronGeometry(1, 30)));
  const vertices = geometry.attributes.position.array;
  const v = new Vector3();
  const scale = 0.1;
  const noise = 1;
  for (let i = 0; i < vertices.length; i += 3) {
    v.set(vertices[i], vertices[i + 1], vertices[i + 2]);
    v.normalize().multiplyScalar(noise);
    const n =
      scale * (simplex3(v.x, v.y, v.z) + simplex3(2 * v.x, 2 * v.y, 2 * v.z));
    v.multiplyScalar(1 + n);
    vertices[i] = v.x;
    vertices[i + 1] = v.y;
    vertices[i + 2] = v.z;
  }
  geometry.scale(0.75, 0.75, 0.75);
  geometry.computeVertexNormals();
  return geometry;
}

export {
  loadSuzanne,
  loadIcosahedron,
  loadDodecahedron,
  loadBox,
  loadDragon,
  loadBunny,
  generateBlob,
  loadTorusHard,
  loadSuzanneHard,
};
