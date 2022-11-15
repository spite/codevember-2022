import {
  Vector3,
  CylinderGeometry,
  BufferGeometry,
} from "../third_party/three.module.js";

class RoundedPrismGeometry extends CylinderGeometry {
  constructor(width, height, sides, border) {
    const f = Math.sqrt(3);
    super(width / f, width / f, height, sides);

    const vertices = this.attributes.position.array;
    const v = new Vector3();
    for (let i = 0; i < vertices.length; i += 3) {
      v.set(vertices[i], vertices[i + 1], vertices[i + 2]);
      if (v.y > 0) {
        const a = Math.atan2(v.z, v.x);
        const r = Math.sqrt(v.x * v.x + v.z * v.z) - border;
        v.x = r * Math.cos(a);
        v.z = r * Math.sin(a);
      }
      if (v.y === 0) {
        v.y = width / 2 - border;
      }
      vertices[i] = v.x;
      vertices[i + 1] = v.y;
      vertices[i + 2] = v.z;
    }
    this.computeVertexNormals();
  }
}

export { RoundedPrismGeometry };
