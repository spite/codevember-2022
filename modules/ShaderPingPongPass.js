import {
  OrthographicCamera,
  Scene,
  Mesh,
  PlaneGeometry,
} from "../third_party/three.module.js";
import { getFBO } from "./fbo.js";

class ShaderPingPongPass {
  constructor(shader, options = {}) {
    this.shader = shader;
    this.orthoScene = new Scene();
    this.fbo = getFBO(1, 1, options);
    this.fbos = [this.fbo, this.fbo.clone()];
    this.currentFBO = 0;
    this.orthoCamera = new OrthographicCamera(-1, -1, -1, -1, 0, 1);
    this.orthoQuad = new Mesh(new PlaneGeometry(2, 2), this.shader);
    this.orthoQuad.scale.set(1, 1, 1);
    this.orthoScene.add(this.orthoQuad);
  }

  render(renderer, final) {
    if (!final) {
      renderer.setRenderTarget(this.fbos[1 - this.currentFBO]);
    }
    renderer.render(this.orthoScene, this.orthoCamera);
    renderer.setRenderTarget(null);
    this.currentFBO = 1 - this.currentFBO;
  }

  get current() {
    return this.fbos[this.currentFBO];
  }

  get prev() {
    return this.fbos[1 - this.currentFBO];
  }

  get texture() {
    return this.current.texture;
  }

  setSize(width, height) {
    this.orthoQuad.scale.set(width, height, 1);
    this.fbos[0].setSize(width, height);
    this.fbos[1].setSize(width, height);
  }
}

export { ShaderPingPongPass };
