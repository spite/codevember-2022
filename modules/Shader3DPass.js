import {
  OrthographicCamera,
  Scene,
  Mesh,
  PlaneGeometry,
  WebGL3DRenderTarget,
  ClampToEdgeWrapping,
  LinearFilter,
  RGBAFormat,
  UnsignedByteType,
} from "../third_party/three.module.js";

class Shader3DPass {
  constructor(shader, options = {}) {
    this.shader = shader;
    this.orthoScene = new Scene();
    this.fbo = new WebGL3DRenderTarget(1, 1, 1);
    this.fbo.texture.format = options.format || RGBAFormat;
    this.fbo.texture.type = options.type || UnsignedByteType;
    this.fbo.texture.wrapS = options.wrapS || ClampToEdgeWrapping;
    this.fbo.texture.wrapT = options.wrapT || ClampToEdgeWrapping;
    this.fbo.texture.minFilter = options.minFilter || LinearFilter;
    this.fbo.texture.magFilter = options.magFilter || LinearFilter;
    this.fbo.stencilBuffer = options.stencilBuffer || false;
    this.fbo.depthBuffer = options.depthBuffer || false;
    this.orthoCamera = new OrthographicCamera(-1, -1, -1, -1, 0, 1);
    this.orthoQuad = new Mesh(new PlaneGeometry(2, 2), this.shader);
    this.orthoQuad.scale.set(1, 1, 1);
    this.orthoScene.add(this.orthoQuad);
    this.texture = this.fbo.texture;
  }

  render(renderer, z) {
    renderer.setRenderTarget(this.fbo, z);
    renderer.render(this.orthoScene, this.orthoCamera);
    renderer.setRenderTarget(null);
  }

  setSize(width, height, depth) {
    this.fbo.setSize(width, height, depth);
    this.orthoQuad.scale.set(width, height, 1);
    this.orthoCamera.left = -width / 2;
    this.orthoCamera.right = width / 2;
    this.orthoCamera.top = height / 2;
    this.orthoCamera.bottom = -height / 2;
    this.orthoCamera.updateProjectionMatrix();
  }
}

export { Shader3DPass };
