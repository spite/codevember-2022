import {
  OrthographicCamera,
  Scene,
  Mesh,
  WebGL3DRenderTarget,
  ClampToEdgeWrapping,
  LinearFilter,
  RGBAFormat,
  UnsignedByteType,
  PlaneGeometry,
} from "../third_party/three.module.js";

class Shader3DPingPongPass {
  constructor(shader, options = {}) {
    this.shader = shader;
    this.orthoScene = new Scene();
    this.fbo = new WebGL3DRenderTarget(1, 1, 1);
    this.fbo.texture.format = options.format || RGBAFormat;
    this.fbo.texture.type = options.type || UnsignedByteType;
    this.fbo.texture.wrapR = options.wrapR || ClampToEdgeWrapping;
    this.fbo.texture.wrapS = options.wrapS || ClampToEdgeWrapping;
    this.fbo.texture.wrapT = options.wrapT || ClampToEdgeWrapping;
    this.fbo.texture.minFilter = options.minFilter || LinearFilter;
    this.fbo.texture.magFilter = options.magFilter || LinearFilter;
    this.fbo.stencilBuffer = options.stencilBuffer || false;
    this.fbo.depthBuffer = options.depthBuffer || false;
    this.fbos = [this.fbo, this.fbo.clone()];
    this.currentFBO = 0;
    this.orthoCamera = new OrthographicCamera(-1, -1, -1, -1, 0, 1);
    this.orthoQuad = new Mesh(new PlaneGeometry(2, 2), this.shader);
    this.orthoQuad.scale.set(1, 1, 1);
    this.orthoScene.add(this.orthoQuad);
  }

  render(renderer, slice) {
    renderer.setRenderTarget(this.fbos[1 - this.currentFBO], slice);
    renderer.render(this.orthoScene, this.orthoCamera);
    renderer.setRenderTarget(null);
  }

  flip() {
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

  setSize(width, height, depth) {
    this.orthoQuad.scale.set(width, height);
    this.fbos[0].setSize(width, height, depth);
    this.fbos[1].setSize(width, height, depth);
  }
}

export { Shader3DPingPongPass };
