import { RawShaderMaterial, GLSL3 } from "../third_party/three.module.js";
import { shader as orthoVertexShader } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as vignette } from "../shaders/vignette.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as chromaticAberration } from "../shaders/chromatic-aberration.js";
import { shader as levels } from "../shaders/levels.js";
import { randomInRange } from "../modules/Maf.js";

const colorFragmentShader = `precision highp float;

uniform sampler2D inputTexture;
uniform float time;
uniform float vignetteBoost;
uniform float vignetteReduction;

in vec2 vUv;

out vec4 fragColor;

${chromaticAberration}
${noise}
${levels}
${vignette}

void main() {
  vec2 uv = .8 * (vUv - .5) + .5;
  fragColor = chromaticAberration(inputTexture, uv, .05, (vUv-.5) );
  // fragColor += .05 * noise(gl_FragCoord.xy, time/100.);
  fragColor.rgb = finalLevels(fragColor.rgb, vec3(.1), vec3(1.), vec3(.8));
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += .05 * noise(gl_FragCoord.xy, time);
  fragColor.a = 1.;
}`;

class Post {
  constructor(renderer, params = {}) {
    this.renderer = renderer;

    const rgbShader = new RawShaderMaterial({
      uniforms: {
        inputTexture: { value: null },
        vignetteBoost: { value: params.vignetteBoost || 1.2 },
        vignetteReduction: { value: params.vignetteReduction || 1 },
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
    this.rgbPass.setSize(w, h);
  }

  render(src) {
    this.rgbPass.shader.uniforms.time.value = randomInRange(-1000, 1000);
    this.rgbPass.shader.uniforms.inputTexture.value = src;
    this.rgbPass.render(this.renderer, true);
  }
}

export { Post };
