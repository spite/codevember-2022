import {
  GLSL3,
  TorusGeometry,
  Mesh,
  RawShaderMaterial,
  DataTexture,
  RGBAFormat,
  LinearFilter,
} from "../third_party/three.module.js";
import { shader as noiseCommon } from "../shaders/noise-common.js";
import { shader as noise3d } from "../shaders/noise3d.js";
import { shader as noise2d } from "../shaders/noise2d.js";
import { natural, natural2 } from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform float time;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec4 vPosition;
out vec2 vUv;

${noiseCommon}
${noise3d}

void main() {
  vUv = uv;
  float n = .5 + noise3d(position + time) * .5;
  vec3 p = position + normal * n * .25;
  vPosition = vec4(p, 1.);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
}`;

const fragmentShader = `precision highp float;

in vec4 vPosition;
in vec2 vUv;

uniform float time;
uniform sampler2D gradient;

out vec4 color;

${noiseCommon}
${noise2d}

void main() {
  vec3 p = vPosition.xyz * .5;
  vec2 uv = vUv * 5.;

  float r = .5 + .5 * snoise(uv + .9 * time );
  float g = .5 + .5 * snoise(uv + 1.1 * time);
  float b = .5 + .5 * snoise(uv + .8 * time);

  float n = .5 + .5 * snoise(( uv + time ) );
  n = pow( .001, n );

  float n2 = .5 + .5 * snoise(  ( uv + 4. * time ) );
  n2 = smoothstep(.25, .75, n2);
  
  // vec3 rgbColor = vec3(n2);// * clamp(length(vPosition.xyz), 0., 1.);
  vec3 rgbColor = n2 * vec3( r, g, b );// * clamp(length(vPosition.xyz), 0., 1.);

  color = vec4( rgbColor, 1.);
}`;

const geometry = new TorusGeometry(1, 0.5, 40, 200);

function generateGradient(palette) {
  const gradient = new GradientLinear(palette);
  const selection = [
    gradient.getAt(Math.random()),
    gradient.getAt(Math.random()),
    gradient.getAt(Math.random()),
  ];
  const data = new Uint8Array(selection.length * 4);
  for (let i = 0; i < selection.length; i++) {
    const c = selection[i];
    data[i * 3] = c.r * 255;
    data[i * 3 + 1] = c.g * 255;
    data[i * 3 + 2] = c.b * 255;
    data[i * 3 + 3] = 255;
  }
  const colorTexture = new DataTexture(
    data,
    selection.length,
    1,
    RGBAFormat,
    undefined,
    undefined,
    undefined,
    undefined,
    LinearFilter,
    LinearFilter
  );
  colorTexture.needsUpdate = true;
  return colorTexture;
}

const material = new RawShaderMaterial({
  uniforms: {
    time: { value: 0 },
    gradient: { value: generateGradient(natural) },
  },
  vertexShader,
  fragmentShader,
  glslVersion: GLSL3,
  // wireframe: true,
});

const mesh = new Mesh(geometry, material);

export { mesh };
