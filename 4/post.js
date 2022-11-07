import {
  RawShaderMaterial,
  RGBAFormat,
  UnsignedByteType,
  LinearFilter,
  ClampToEdgeWrapping,
  Vector2,
  GLSL3,
} from "../third_party/three.module.js";
import { shader as orthoVertexShader } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as vignette } from "../shaders/vignette.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as screen } from "../shaders/screen.js";
import { BloomPass } from "../modules/bloomPass.js";
import { shader as chromaticAberration } from "../shaders/chromatic-aberration.js";

const finalFragmentShader = `
precision highp float;

uniform vec2 resolution;
uniform sampler2D inputTexture;

uniform sampler2D blur0Texture;
uniform sampler2D blur1Texture;
uniform sampler2D blur2Texture;
uniform sampler2D blur3Texture;
uniform sampler2D blur4Texture;

uniform float vignetteBoost;
uniform float vignetteReduction;

uniform float time;

in vec2 vUv;

out vec4 fragColor;

${vignette}

${noise}

${screen}

void main() {
  vec4 b0 = texture(blur0Texture, vUv);
  vec4 b1 = texture(blur1Texture, vUv);
  vec4 b2 = texture(blur2Texture, vUv);
  vec4 b3 = texture(blur3Texture, vUv);
  vec4 b4 = texture(blur4Texture, vUv);
  
  vec4 color = texture(inputTexture, vUv);

  vec4 b =  b0 / 10.;
  b +=  2.*b1 / 10.;
  b +=  4.*b2 / 10.;
  b +=  8.*b3 / 10.;
  b +=  16.*b4 / 10.;

  fragColor = color + b;
  float f = .25;
  b  = clamp(b-f, vec4(0.), vec4(1.))*(1./(1.-f));
  fragColor = screen(color, b, 1.);
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += .05 * noise(gl_FragCoord.xy, time);
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

    this.finalShader = new RawShaderMaterial({
      uniforms: {
        resolution: { value: new Vector2(1, 1) },
        vignetteBoost: { value: params.vignetteBoost || 1.2 },
        vignetteReduction: { value: params.vignetteReduction || 1 },
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

    this.bloomPass = new BloomPass(3, 5);
  }

  setSize(w0, h0, dpr) {
    const w = w0 * dpr;
    const h = h0 * dpr;
    this.finalPass.setSize(w, h);
    this.finalShader.uniforms.resolution.value.set(w, h);
    this.bloomPass.setSize(w, h);
    this.rgbPass.setSize(w, h);
  }

  render(src) {
    this.bloomPass.source = src;
    this.finalPass.shader.uniforms.inputTexture.value = src;
    this.bloomPass.render(this.renderer);

    this.finalPass.shader.uniforms.blur0Texture.value =
      this.bloomPass.blurPasses[0].texture;
    this.finalPass.shader.uniforms.blur1Texture.value =
      this.bloomPass.blurPasses[1].texture;
    this.finalPass.shader.uniforms.blur2Texture.value =
      this.bloomPass.blurPasses[2].texture;
    this.finalPass.shader.uniforms.blur3Texture.value =
      this.bloomPass.blurPasses[3].texture;
    this.finalPass.shader.uniforms.blur4Texture.value =
      this.bloomPass.blurPasses[4].texture;
    this.finalPass.shader.uniforms.time.value = Math.random() * 100000;
    this.rgbPass.shader.uniforms.time.value = Math.random() * 100000;

    this.finalPass.render(this.renderer);

    this.rgbPass.render(this.renderer, true);
  }
}

export { Post };
