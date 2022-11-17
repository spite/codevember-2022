import {
  AdditiveBlending,
  Color,
  DoubleSide,
  GLSL3,
  RawShaderMaterial,
} from "../third_party/three.module.js";
import { shader as parabola } from "../shaders/parabola.js";

const vertexShader = `
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;
uniform float time;
uniform float offset;

out vec3 vPosition;
out vec2 vUv;
out float vDepth;
out float vAngle;

#define PI 3.1415926535897932384626433832795
#define TAU (2.*PI)

${parabola}

void main() {
  vUv = uv;
  vec3 p = position;
  float speed = 5.;
  float repeat = 1.;
  float s = parabola(mod(repeat*vUv.x+offset+speed*time,1.),20.);
  p *= s;
  vAngle = atan(p.x,p.y);
  vec4 mvPosition = modelViewMatrix * vec4( p, 1. );
  gl_Position = projectionMatrix * mvPosition;
  vDepth = .5 * abs(gl_Position.z);
}
`;

const fragmentShader = `
precision highp float;

uniform float time;
uniform float offset;
uniform vec3 color;
uniform float glow;

in vec2 vUv;
in float vDepth;
in float vAngle;

out vec4 fragColor;

#define PI 3.1415926535897932384626433832795
#define TAU (2.*PI)

${parabola}

void main(){
  float speed = 25.;
  float repeat = 2.;
  float f = mod(repeat*vUv.x+offset+speed*time,1.);
  fragColor = vec4(vDepth*vec3(parabola(f, 100.)/3.)*color, 1.);
}
`;

const material = new RawShaderMaterial({
  uniforms: {
    time: { value: 0 },
    glow: { value: 0 },
    offset: { value: 0 },
    color: { value: new Color(0xf97a4d) },
  },
  vertexShader,
  fragmentShader,
  // transparent: true,
  // depthWrite: false,
  depthTest: false,
  blending: AdditiveBlending,
  wireframe: false,
  side: DoubleSide,
  glslVersion: GLSL3,
});

export { material };
