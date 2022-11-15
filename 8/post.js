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
import { shader as noise } from "../shaders/noise.js";
import { shader as levels } from "../shaders/levels.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";

import { BloomPass } from "../modules/bloomPass.js";

const colorFragmentShader = `precision highp float;

uniform sampler2D colorTexture;
uniform sampler2D shadowTexture;
uniform float time;

in vec2 vUv;

out vec4 fragColor;

${noise}
${noiseCommon}
${levels}

float random(vec2 n, float offset ){
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

void main() {
  fragColor = texture(colorTexture, vUv);
  fragColor.rgb = finalLevels(fragColor.rgb, vec3(.2), vec3(1.), vec3(.8));
  fragColor += .05 * noise(gl_FragCoord.xy, time);
  fragColor.a = 1.;
}`;

class Post {
  constructor(renderer, params = {}) {
    this.renderer = renderer;

    this.colorShader = new RawShaderMaterial({
      uniforms: {
        colorTexture: { value: null },
        shadowTexture: { value: null },
        time: { value: 0 },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: colorFragmentShader,
      glslVersion: GLSL3,
    });

    this.colorPass = new ShaderPass(this.colorShader, {
      format: RGBAFormat,
      type: UnsignedByteType,
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      wrapS: ClampToEdgeWrapping,
      wrapT: ClampToEdgeWrapping,
    });
  }

  setSize(w, h) {
    this.colorPass.setSize(w, h);
  }

  render(colorFBO) {
    this.colorPass.shader.uniforms.colorTexture.value = colorFBO;
    this.colorPass.render(this.renderer, true);
  }
}

export { Post };
