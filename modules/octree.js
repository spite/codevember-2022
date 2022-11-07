import { Vector3 } from "../third_party/three.module.js";

class Cell {
  constructor(tree, position, size, level) {
    this.tree = tree;
    this.position = position;
    this.size = size;
    this.level = level;
    this.points = [];
    this.data = [];
    this.temp = new Vector3(); //temp vector for distance calculation
    this.children = [];
  }

  has(p) {
    if (!this.contains(p)) {
      return null;
    }
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        var duplicate = this.children[i].has(p);
        if (duplicate) {
          return duplicate;
        }
      }
      return null;
    } else {
      var minDistSqrt = this.tree.accuracy * this.tree.accuracy;
      for (var i = 0; i < this.points.length; i++) {
        var o = this.points[i];
        var distSq = p.squareDistance(o);
        if (distSq <= minDistSqrt) {
          return o;
        }
      }
      return null;
    }
  }

  add(p, data) {
    this.points.push(p);
    this.data.push(data);
    if (this.children.length > 0) {
      this.addToChildren(p, data);
    } else {
      if (this.points.length > 1 && this.level < Octree.MaxLevel) {
        this.split();
      }
    }
  }

  addToChildren(p, data) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(p)) {
        this.children[i].add(p, data);
        break;
      }
    }
  }

  contains(p) {
    return (
      p.x >= this.position.x - this.tree.accuracy &&
      p.y >= this.position.y - this.tree.accuracy &&
      p.z >= this.position.z - this.tree.accuracy &&
      p.x < this.position.x + this.size.x + this.tree.accuracy &&
      p.y < this.position.y + this.size.y + this.tree.accuracy &&
      p.z < this.position.z + this.size.z + this.tree.accuracy
    );
  }

  split() {
    var x = this.position.x;
    var y = this.position.y;
    var z = this.position.z;
    var w2 = this.size.x / 2;
    var h2 = this.size.y / 2;
    var d2 = this.size.z / 2;
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x, y, z),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x + w2, y, z),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x, y, z + d2),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x + w2, y, z + d2),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x, y + h2, z),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x + w2, y + h2, z),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x, y + h2, z + d2),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    this.children.push(
      new Cell(
        this.tree,
        Vec3.create(x + w2, y + h2, z + d2),
        Vec3.create(w2, h2, d2),
        this.level + 1
      )
    );
    for (var i = 0; i < this.points.length; i++) {
      this.addToChildren(this.points[i], this.data[i]);
    }
  }

  squareDistanceToCenter(p) {
    var dx = p.x - (this.position.x + this.size.x / 2);
    var dy = p.y - (this.position.y + this.size.y / 2);
    var dz = p.z - (this.position.z + this.size.z / 2);
    return dx * dx + dy * dy + dz * dz;
  }

  findNearestPoint(p, options) {
    var nearest = null;
    var nearestData = null;
    var bestDist = options.bestDist;

    if (this.points.length > 0 && this.children.length == 0) {
      for (var i = 0; i < this.points.length; i++) {
        var dist = this.points[i].distanceTo(p);
        if (dist <= bestDist) {
          if (dist == 0 && options.notSelf) continue;
          bestDist = dist;
          nearest = this.points[i];
          nearestData = this.data[i];
        }
      }
    }

    var children = this.children;

    var children = this.children
      .map(function (child) {
        return { child: child, dist: child.squareDistanceToCenter(p) };
      })
      .sort(function (a, b) {
        return a.dist - b.dist;
      })
      .map(function (c) {
        return c.child;
      });

    if (children.length > 0) {
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.points.length > 0) {
          if (
            p.x < child.position.x - bestDist ||
            p.x > child.position.x + child.size.x + bestDist ||
            p.y < child.position.y - bestDist ||
            p.y > child.position.y + child.size.y + bestDist ||
            p.z < child.position.z - bestDist ||
            p.z > child.position.z + child.size.z + bestDist
          ) {
            continue;
          }
          var childNearest = child.findNearestPoint(p, options);
          if (!childNearest || !childNearest.point) {
            continue;
          }
          var childNearestDist = childNearest.point.distanceTo(p);
          if (childNearestDist < bestDist) {
            nearest = childNearest.point;
            bestDist = childNearestDist;
            nearestData = childNearest.data;
          }
        }
      }
    }
    return {
      point: nearest,
      data: nearestData,
    };
  }

  findNearbyPoints(p, r, result, options) {
    if (this.points.length > 0 && this.children.length == 0) {
      for (var i = 0; i < this.points.length; i++) {
        var dist = this.points[i].distanceTo(p);
        if (dist <= r) {
          if (dist == 0 && options.notSelf) continue;
          result.points.push(this.points[i]);
          if (options.includeData) result.data.push(this.data[i]);
        }
      }
    }
    var children = this.children;

    if (children.length > 0) {
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.points.length > 0) {
          if (
            p.x < child.position.x - r ||
            p.x > child.position.x + child.size.x + r ||
            p.y < child.position.y - r ||
            p.y > child.position.y + child.size.y + r ||
            p.z < child.position.z - r ||
            p.z > child.position.z + child.size.z + r
          ) {
            continue;
          }
          child.findNearbyPoints(p, r, result, options);
        }
      }
    }
  }
}

class Octree {
  constructor(position, size, accuracy = 0) {
    this.MaxLevel = 8;
    this.maxDistance = Math.max(size.x, Math.max(size.y, size.z));
    this.accuracy = accuracy;
    this.root = new Cell(this, position, size, 0);
  }

  fromBoundingBox(bbox) {
    return new Octree(bbox.min.clone(), bbox.getSize().clone());
  }

  add(p, data) {
    this.root.add(p, data);
  }

  has(p) {
    return this.root.has(p);
  }

  findNearestPoint(p, options) {
    options.includeData = options.includeData ? options.includeData : false;
    options.bestDist = options.maxDist ? options.maxDist : Infinity;
    options.notSelf = options.notSelf ? options.notSelf : false;

    var result = this.root.findNearestPoint(p, options);
    if (result) {
      if (options.includeData) return result;
      else return result.point;
    } else {
      return null;
    }
  }

  findNearbyPoints(p, r, options) {
    options = options || {};
    var result = { points: [], data: [] };
    this.root.findNearbyPoints(p, r, result, options);
    return result;
  }

  getAllCellsAtLevel(cell, level, result) {
    if (typeof level == "undefined") {
      level = cell;
      cell = this.root;
    }
    result = result || [];
    if (cell.level == level) {
      if (cell.points.length > 0) {
        result.push(cell);
      }
      return result;
    } else {
      cell.children.forEach(
        function (child) {
          this.getAllCellsAtLevel(child, level, result);
        }.bind(this)
      );
      return result;
    }
  }
}

export { Octree };
