import {
  RawShaderMaterial,
  GLSL3,
  Mesh,
  IcosahedronGeometry,
  DoubleSide,
  TorusKnotGeometry,
  TorusGeometry,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { shader as noise } from "../shaders/noise.js";
import { shader as screen } from "../shaders/screen.js";
import { shader as hsl } from "../shaders/hsl.js";

const vertexShader = `
precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float level;

out vec2 vUv;
out vec3 vPosition;
out vec3 vViewPosition;
out vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalMatrix * normal;
  vPosition = position - .025 * normal * level;
  vec4 mvPosition = modelViewMatrix * vec4( vPosition, 1.0 );
  vViewPosition = -mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
}`;

const fragmentShader = `precision highp float;

uniform sampler2D inputMap;
uniform float level;
uniform sampler2D gradientMap1;
uniform sampler2D gradientMap2;
uniform float time;
uniform float scale;
uniform float seed;
uniform bool sphericalUvs;

in vec2 vUv;
in vec3 vPosition;
in vec3 vViewPosition;
in vec3 vNormal;

out vec4 fragColor;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

float aastep(float threshold, float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

vec2 sphericalToUV(vec3 p) {
  return vec2((atan(p.x, -p.z) / M_PI + 1.) / 2., asin(p.y) / M_PI + .5);
}

${noiseCommon}

${noise3d}

${noise2d}

${noise}

${screen}

${hsl}

void main() {
  vec2 uv = vUv;
  if(sphericalUvs) {
    uv = sphericalToUV(normalize(vPosition.yzx*vec3(-1.,1.,1.)));
  }

  float n = smoothstep(.45, .55, .5 * noise3d(vPosition * scale * 5. + seed) + .5);
  vec4 c = texture(inputMap, uv);
  c.g += .01;
  c.g += .05 * (noise(gl_FragCoord.xy, time) - .5) * c.g;

  float a = aastep(.5 - .5 * level, c.g) - .5 * level;
  float shade = mix(0., 1., 1. - level );
  vec4 color1 = texture(gradientMap1, vec2(c.g, 0.));
  vec4 color2 = texture(gradientMap2, vec2(c.g, 0.));
  vec4 color = mix(color1, color2, n);
  vec3 h = rgb2hsv(color.rgb);
  h.y = clamp(h.y +.5, 0., 1.)  ;
  h.z *= shade;
  color.rgb = hsv2rgb(h);

  vec3 e = normalize( vViewPosition );
  float rim = pow(abs(dot(e,vNormal)),.5);
  color.rgb = mix(vec3(40., 122., 224.) / 255., color.rgb, rim * (1.-c.g));

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

const geo1 = new TorusGeometry(0.25, 0.1, 100, 30);
const geo2 = new TorusKnotGeometry(0.25, 0.1, 100, 30).scale(0.75, 0.75, 0.75);
const geo3 = new IcosahedronGeometry(0.25, 4);

class Layer extends Mesh {
  constructor(renderer) {
    const material = new RawShaderMaterial({
      uniforms: {
        inputMap: { value: null },
        level: { value: 0 },
        gradientMap1: { value: null },
        gradientMap2: { value: null },
        time: { value: 0 },
        seed: { value: 0 },
        scale: { value: 0 },
        sphericalUvs: { value: false },
      },
      vertexShader,
      fragmentShader,
      glslVersion: GLSL3,
      side: DoubleSide,
      transparent: true,
    });

    super(geo1, material);
    this.renderer = renderer;
  }

  set gradient(texture) {
    this.material.uniforms.gradientMap1.value = texture;
  }

  set gradient2(texture) {
    this.material.uniforms.gradientMap2.value = texture;
  }

  setTorus() {
    this.geometry = geo1;
  }

  setTorusKnot() {
    this.geometry = geo2;
  }

  setSphere() {
    this.geometry = geo3;
  }
}

export { Layer };
