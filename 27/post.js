import {
  RawShaderMaterial,
  RGBAFormat,
  UnsignedByteType,
  LinearFilter,
  ClampToEdgeWrapping,
  GLSL3,
} from "../third_party/three.module.js";
import { shader as orthoVertexShader } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as vignette } from "../shaders/vignette.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as chromaticAberration } from "../shaders/chromatic-aberration.js";
import { getFBO } from "../modules/fbo.js";

const finalFragmentShader = `
precision highp float;

uniform sampler2D inputTexture;

uniform float vignetteBoost;
uniform float vignetteReduction;

uniform float time;

in vec2 vUv;

out vec4 fragColor;

${vignette}

${noise}

void main() {
  vec4 color = texture(inputTexture, vUv);
  fragColor = color;
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += color.a * .01 * noise(gl_FragCoord.xy, time/100.);
  fragColor.a = 1.;
}
`;

const colorFragmentShader = `precision highp float;

uniform sampler2D inputTexture;
uniform float time;

in vec2 vUv;

out vec4 fragColor;

${chromaticAberration}
${noise}

void main() {
  vec2 uv = .8 * (vUv - .5) + .5;
  fragColor = chromaticAberration(inputTexture, uv, .1, (vUv-.5) );
  fragColor += .05 * noise(gl_FragCoord.xy, time/100.);
  fragColor.a = 1.;
}`;

class Post {
  constructor(renderer, params = {}) {
    this.renderer = renderer;

    this.colorFBO = getFBO(1, 1, { samples: 4 });

    this.finalShader = new RawShaderMaterial({
      uniforms: {
        vignetteBoost: { value: params.vignetteBoost || 1.3 },
        vignetteReduction: { value: params.vignetteReduction || 1.2 },
        inputTexture: { value: null },
        blur0Texture: { value: null },
        blur1Texture: { value: null },
        blur2Texture: { value: null },
        blur3Texture: { value: null },
        blur4Texture: { value: null },
        time: { value: 0 },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: finalFragmentShader,
      glslVersion: GLSL3,
    });
    this.finalPass = new ShaderPass(this.finalShader, {
      format: RGBAFormat,
      type: UnsignedByteType,
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      wrapS: ClampToEdgeWrapping,
      wrapT: ClampToEdgeWrapping,
    });

    const rgbShader = new RawShaderMaterial({
      uniforms: {
        inputTexture: { value: this.finalPass.texture },
        time: { value: 0 },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: colorFragmentShader,
      glslVersion: GLSL3,
    });
    this.rgbPass = new ShaderPass(rgbShader);
  }

  setSize(w0, h0, dpr) {
    const w = w0 * dpr;
    const h = h0 * dpr;
    this.colorFBO.setSize(w, h);
    this.finalPass.setSize(w, h);
    this.rgbPass.setSize(w, h);
  }

  render(scene, camera) {
    this.renderer.setRenderTarget(this.colorFBO);
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);

    this.finalPass.shader.uniforms.inputTexture.value = this.colorFBO.texture;

    this.finalPass.render(this.renderer);

    this.rgbPass.render(this.renderer, true);
  }
}

export { Post };
