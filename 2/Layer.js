import {
  RawShaderMaterial,
  GLSL3,
  Mesh,
  IcosahedronGeometry,
  DoubleSide,
} from "../third_party/three.module.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as screen } from "../shaders/screen.js";
import { shader as hsl } from "../shaders/hsl.js";

const vertexShader = `
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;
out vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );
}`;

const fragmentShader = `precision highp float;

uniform sampler2D inputMap;
uniform float level;
uniform sampler2D gradientMap;
uniform float time;

in vec2 vUv;
in vec3 vPosition;

out vec4 fragColor;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

float aastep(float threshold, float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

vec2 sphericalToUV(vec3 p) {
  // return vec2(atan(p.x, -p.z) / M_TAU + .5, p.y * .5 + .5);
  return vec2((atan(p.x, -p.z) / M_PI + 1.) / 2., asin(p.y) / M_PI + .5);
}

${noise2d}

${noise}

${screen}

${hsl}

void main() {
  vec2 uv = sphericalToUV(normalize(vPosition.yzx*vec3(-1.,1.,1.)));
  float n = snoise(uv);
  vec4 c = texture(inputMap, uv);
  c.g += .05 * (noise(gl_FragCoord.xy, time) - .5);

  float a = aastep(.5 - .5 * level, c.g);
  vec4 from = texture(gradientMap, vec2(0., 0.));
  vec4 to = texture(gradientMap, vec2(1., 0.));
  float shade = mix(0., 1., 1. - level );
  vec4 color = mix(from, to, 1. - level );
  vec3 h = rgb2hsv(color.rgb);
  h.y *= 1.-shade;
  h.z *= .25 + .75 * shade;
  color.rgb = hsv2rgb(h);
  color.rgb *= .75 + .25 * shade;
  fragColor = vec4(color.rgb, a);
}`;

const copyFs = `precision highp float;

uniform sampler2D inputMap;

in vec2 vUv;

out vec4 fragColor;

void main() {
  vec4 c = texture(inputMap, vUv);
  fragColor = c;
}`;

const geo = new IcosahedronGeometry(0.5, 7);

class Layer extends Mesh {
  constructor(renderer) {
    const material = new RawShaderMaterial({
      uniforms: {
        inputMap: { value: null },
        level: { value: 0 },
        gradientMap: { value: null },
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      glslVersion: GLSL3,
      side: DoubleSide,
      transparent: true,
    });

    super(geo, material);
    this.renderer = renderer;
  }

  set gradient(texture) {
    this.material.uniforms.gradientMap.value = texture;
  }
}

export { Layer };
