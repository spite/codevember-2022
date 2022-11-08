import {
  Mesh,
  BufferGeometry,
  Vector3,
  BufferAttribute,
  DoubleSide,
  MeshStandardMaterial,
  MeshNormalMaterial,
} from "../third_party/three.module.js";
import Delaunator from "../third_party/delaunator.js";
import { randomInRange } from "../modules/Maf.js";
import { weld } from "../modules/geometry-index.js";

// https://www.redblobgames.com/x/1842-delaunay-voronoi-sphere/

function project(vector) {
  return {
    x: vector.x / (1 - vector.z),
    y: vector.y / (1 - vector.z),
  };
}

function generateSphere(numVertices) {
  const points = [];
  const vertices = [];
  const p = new Vector3();
  for (let i = 0; i < numVertices; i++) {
    p.set(
      randomInRange(-1, 1),
      randomInRange(-1, 1),
      randomInRange(-1, 1)
    ).normalize();

    const proj = project(p);

    points.push(proj.x, proj.y);
    vertices.push(p.clone());
  }
  const d = new Delaunator(points);
  const geometry = new BufferGeometry();

  p.set(0, 0, 1);
  vertices.push(p.clone());

  const nId = numVertices;

  const oldBuffer = d.triangles;
  const l = d.hull.length;
  const newBuffer = new ArrayBuffer(d.triangles.byteLength + l * 3 * 4);
  const triangles = new Uint32Array(newBuffer);
  triangles.set(oldBuffer);

  let offset = oldBuffer.length;
  for (let i = 0; i < l; i++) {
    triangles[offset] = nId;
    triangles[offset + 1] = d.hull[(i + 1) % l];
    triangles[offset + 2] = d.hull[i];
    offset += 3;
  }

  geometry.setFromPoints(vertices);
  geometry.setIndex(Array.from(triangles));
  geometry.computeVertexNormals();
  return geometry; //.toNonIndexed();
}

function removeFace(faces, face) {
  for (let i = 0; i < faces.length; i++) {
    const f = faces[i];
    if (f[0] === face[0] && f[1] === face[1] && f[2] === face[2]) {
      faces.splice(i, 1);
      return;
    }
  }
  throw `Couldn't find face ${face}`;
}

function getAdjacentFace(faces, splitFaces) {
  const availableFaces = faces.filter((e) => {
    for (const f of splitFaces) {
      const res = e.filter((x) => f.indexOf(x) !== -1);
      if (res.length == 2) {
        return true;
      }
    }
    return false;
  });

  if (availableFaces.length) {
    const pos = Math.floor(Math.random() * availableFaces.length);
    const face = availableFaces[pos];
    removeFace(faces, face);
    return face;
  } else {
    return null;
  }
}

function getRandomFace(faces) {
  const pos = Math.floor(Math.random() * faces.length);
  const face = faces.splice(pos, 1);
  return face[0];
}

function breakApart(geometry, verticesPerChunk) {
  const faces = [];

  const numFaces = geometry.index.count / 3;
  for (let i = 0; i < numFaces * 3; i += 3) {
    faces.push([
      geometry.index.array[i],
      geometry.index.array[i + 1],
      geometry.index.array[i + 2],
    ]);
  }

  const geometries = [];

  while (faces.length) {
    const splitFaces = [];
    const first = getRandomFace(faces);
    splitFaces.push(first);
    for (let i = 0; i < verticesPerChunk; i++) {
      const adjacentFace = getAdjacentFace(faces, splitFaces);
      if (adjacentFace) {
        splitFaces.push(adjacentFace);
      }
    }

    const geo = new BufferGeometry();
    const indices = [];

    const map = new Map();
    const invMap = new Map();
    let i = 0;
    for (const face of splitFaces) {
      for (let id of face) {
        if (!map.has(id)) {
          map.set(id, i);
          invMap.set(i, id);
          i++;
        }
        indices.push(map.get(id));
      }
    }

    geo.setIndex(indices);

    const vertices = [];
    const originalVertices = geometry.attributes.position.array;
    const avg = new Vector3();
    for (const entry of invMap) {
      vertices[entry[0] * 3] = originalVertices[entry[1] * 3];
      vertices[entry[0] * 3 + 1] = originalVertices[entry[1] * 3 + 1];
      vertices[entry[0] * 3 + 2] = originalVertices[entry[1] * 3 + 2];
      avg.x += vertices[entry[0] * 3];
      avg.y += vertices[entry[0] * 3 + 1];
      avg.z += vertices[entry[0] * 3 + 2];
    }
    avg.divideScalar(vertices.length / 3);
    geo.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(vertices), 3)
    );
    geo.__center = avg;

    geometries.push(geo);
  }
  return geometries;
}

function extrude(geometry) {
  const welded = weld(geometry);

  const geo = new BufferGeometry();

  const newPositions = new Float32Array(
    2 * welded.attributes.position.array.length
  );
  newPositions.set(welded.attributes.position.array, 0);
  const tmp = new Vector3();
  let ptr = welded.attributes.position.count * 3;
  for (let i = 0; i < welded.attributes.position.count * 3; i += 3) {
    tmp
      .set(
        welded.attributes.position.array[i],
        welded.attributes.position.array[i + 1],
        welded.attributes.position.array[i + 2]
      )
      .setLength(0.9);
    newPositions[ptr] = tmp.x;
    newPositions[ptr + 1] = tmp.y;
    newPositions[ptr + 2] = tmp.z;
    ptr += 3;
  }
  geo.setAttribute("position", new BufferAttribute(newPositions, 3));

  const numFaces = welded.index.count;
  const newIndices = new Uint16Array(2 * welded.index.count + numFaces * 3 * 2);
  newIndices.set(welded.index.array, 0);

  ptr = welded.index.count;
  const maxFace = Math.max(...welded.index.array);
  for (let i = 0; i < welded.index.count; i++) {
    newIndices[ptr] = welded.index.array[i] + maxFace + 1;
    ptr++;
  }

  for (let i = 0; i < welded.index.count; i += 3) {
    const a = welded.index.array[i];
    const b = welded.index.array[i + 1];
    const c = welded.index.array[i + 2];
    const d = a + maxFace + 1;
    const e = b + maxFace + 1;
    const f = c + maxFace + 1;
    // face 1
    newIndices[ptr] = a;
    newIndices[ptr + 1] = b;
    newIndices[ptr + 2] = d;
    newIndices[ptr + 3] = d;
    newIndices[ptr + 4] = b;
    newIndices[ptr + 5] = e;
    // face 2
    newIndices[ptr + 6] = b;
    newIndices[ptr + 7] = e;
    newIndices[ptr + 8] = c;
    newIndices[ptr + 9] = c;
    newIndices[ptr + 10] = e;
    newIndices[ptr + 11] = f;
    // face 3
    newIndices[ptr + 12] = a;
    newIndices[ptr + 13] = d;
    newIndices[ptr + 14] = c;
    newIndices[ptr + 15] = c;
    newIndices[ptr + 16] = d;
    newIndices[ptr + 17] = f;
    ptr += 18;
  }

  geo.setIndex(new BufferAttribute(newIndices, 1));
  geo.__center = geometry.__center;

  return geo;
}

const material = new MeshNormalMaterial({
  wireframe: !true,
  side: DoubleSide,
});

function generate(VERTICES = 100, VERTICES_PER_CHUNK = 20) {
  console.time("generation");
  const geometry = generateSphere(VERTICES);
  const geometries = breakApart(geometry, VERTICES_PER_CHUNK);

  material.flatShading = true;
  const center = new Vector3();
  const fragments = [];
  for (const geo of geometries) {
    const extrudedGeo = extrude(geo);
    const piece = new Mesh(extrudedGeo, material);
    piece.geometry.computeVertexNormals();
    piece.geometry.computeBoundingBox();
    piece.geometry.boundingBox.getCenter(center);
    piece.geometry.center();
    piece.position.copy(center);
    fragments.push(piece);
  }
  console.timeEnd("generation");
  return fragments;
}

export { generate };
