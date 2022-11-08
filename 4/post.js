import {
  RawShaderMaterial,
  HalfFloatType,
  NearestFilter,
  RGBAFormat,
  UnsignedByteType,
  LinearFilter,
  ClampToEdgeWrapping,
  BackSide,
  FrontSide,
  Vector2,
  GLSL3,
  Vector3,
  DataTexture3D,
  RedFormat,
  FloatType,
} from "../third_party/three.module.js";
import { shader as orthoVertexShader } from "../shaders/ortho.js";
import { ShaderPass } from "../modules/ShaderPass.js";
import { shader as vignette } from "../shaders/vignette.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as screen } from "../shaders/screen.js";
import { shader as levels } from "../shaders/levels.js";
// import { shader as fxaa } from "../shaders/fxaa.js";
// import { shader as softLight } from "../shaders/soft-light.js";
// import { shader as colorDodge } from "../shaders/color-dodge.js";
// import { shader as rgbShift } from "../shaders/rgb-shift.js";
import { BloomPass } from "../modules/bloomPass.js";

// https://github.com/evanw/glfx.js/blob/master/src/filters/blur/zoomblur.js

const radialBlurFragmentShader = `precision highp float;

uniform sampler2D inputTexture;
uniform sampler2D colorTexture;

uniform vec2 center;
uniform float strength;

in vec2 vUv;

out vec4 fragColor;

${screen}

float random(vec3 scale, float seed) {
  /* use the fragment position for a different seed per-pixel */
  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main() {
  vec4 color = vec4(0.0);
  float total = 0.0;
  vec2 texSize = vec2(textureSize(inputTexture,0));
  vec2 toCenter = (center - vUv ) * texSize;

  /* randomize the lookup values to hide the fixed number of samples */
  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

  for (float t = 0.0; t <= 40.0; t++) {
    float percent = (t + offset) / 40.0;
    float weight = 4.0 * (percent - percent * percent);
    vec4 texSample = texture(inputTexture, vUv + toCenter * percent * strength / texSize);
    
    /* switch to pre-multiplied alpha to correctly blur transparent images */
    texSample.rgb *= texSample.a;
    
    color += texSample * weight;
    total += weight;
  }

  fragColor = color / total;

  /* switch back from pre-multiplied alpha */
  fragColor.rgb /= fragColor.a + 0.00001;

  // fragColor += texture(colorTexture,vUv); 
}
`;

const finalFragmentShader = `
precision highp float;

uniform vec2 resolution;
uniform sampler2D inputTexture;
uniform sampler2D zoomTexture;
uniform sampler2D blur0Texture;
uniform sampler2D blur1Texture;
uniform sampler2D blur2Texture;
uniform sampler2D blur3Texture;
uniform sampler2D blur4Texture;

uniform float vignetteBoost;
uniform float vignetteReduction;

uniform bool showRays;

uniform float time;

in vec2 vUv;

out vec4 fragColor;

${vignette}

${screen}

${noise}

${levels}

void main() {
  vec4 b0 = texture(blur0Texture, vUv);
  vec4 b1 = texture(blur1Texture, vUv);
  vec4 b2 = texture(blur2Texture, vUv);
  vec4 b3 = texture(blur3Texture, vUv);
  vec4 b4 = texture(blur4Texture, vUv);
  
  vec4 color = texture(inputTexture, vUv);
  vec4 zoom = texture(zoomTexture, vUv);

  float factor = 10.;
  vec4 b =  b0 / factor;
  b +=  2.*b1 / factor;
  b +=  4.*b2 / factor;
  b +=  8.*b3 / factor;
  b +=  16.*b4 / factor;

  fragColor = screen(color, zoom, 1.);
  fragColor = screen(fragColor, b, 1.);
  
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += .05 * noise(gl_FragCoord.xy, time);
  fragColor.rgb = finalLevels(fragColor.rgb, vec3(.1), vec3(1.), vec3(.8));
  fragColor.a = 1.;

}
`;

const colorFragmentShader = `precision highp float;

uniform sampler2D inputTexture;
uniform float time;

in vec2 vUv;

out vec4 fragColor;

${noise}

void main() {
  vec2 size = vec2(textureSize(inputTexture, 0));
  int steps = 10;
  float total = 0.;
  float fSteps = float(steps);
  vec4 accum = vec4(0.);
  for( int i = 0; i < steps; i++){
    vec2 inc = 40. * float(i) / (fSteps*size);
    vec2 dir = vUv-.5;
    vec4 r = texture(inputTexture, vUv - dir * inc);
    vec4 g = texture(inputTexture, vUv);
    vec4 b = texture(inputTexture, vUv + dir * inc);
    float w = float(steps - i)/fSteps;
    accum += vec4(r.r, g.g, b.b, 0.) * w;
    total += w;
  }
  accum /= total;
  fragColor = vec4(accum.rgb , 1.);
  fragColor += .01 * noise(gl_FragCoord.xy, time);
}`;

class Post {
  constructor(renderer, params = {}) {
    this.renderer = renderer;

    this.colorShader = new RawShaderMaterial({
      uniforms: {
        inputTexture: { value: null },
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

    this.zoomShader = new RawShaderMaterial({
      uniforms: {
        inputTexture: { value: null },
        colorTexture: { value: null },
        center: { value: new Vector2(0.5, 0.5) },
        strength: { value: 1 },
      },
      vertexShader: orthoVertexShader,
      fragmentShader: radialBlurFragmentShader,
      glslVersion: GLSL3,
    });

    this.zoomPass = new ShaderPass(this.zoomShader, {
      format: RGBAFormat,
      type: UnsignedByteType,
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      wrapS: ClampToEdgeWrapping,
      wrapT: ClampToEdgeWrapping,
    });

    this.finalShader = new RawShaderMaterial({
      uniforms: {
        resolution: { value: new Vector2(1, 1) },
        vignetteBoost: { value: params.vignetteBoost || 1 },
        vignetteReduction: { value: params.vignetteReduction || 0.6 },
        inputTexture: { value: this.colorPass.texture },
        zoomTexture: { value: this.zoomPass.texture },
        blur0Texture: { value: null },
        blur1Texture: { value: null },
        blur2Texture: { value: null },
        blur3Texture: { value: null },
        blur4Texture: { value: null },
        time: { value: 0 },
        showRays: { value: false },
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

    this.bloomPass = new BloomPass(3, 5);
  }

  setSize(w, h) {
    this.colorPass.setSize(w, h);
    this.zoomPass.setSize(w, h);
    this.finalPass.setSize(w, h);
    this.finalShader.uniforms.resolution.value.set(w, h);
    this.bloomPass.setSize(w, h);
  }

  render(colorFBO, zoomFBO) {
    this.zoomPass.shader.uniforms.inputTexture.value = zoomFBO;
    this.zoomPass.shader.uniforms.colorTexture.value = colorFBO;
    this.finalPass.shader.uniforms.inputTexture.value = colorFBO;

    this.zoomPass.render(this.renderer);

    this.bloomPass.source = zoomFBO; //  this.zoomPass.texture;
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

    this.finalPass.render(this.renderer);

    this.colorPass.shader.uniforms.inputTexture.value = this.finalPass.texture;
    this.colorPass.shader.uniforms.time.value = Math.random() * 100000;
    this.colorPass.render(this.renderer, true);
  }
}

export { Post };
