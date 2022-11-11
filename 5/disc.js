import {
  Mesh,
  PlaneGeometry,
  RawShaderMaterial,
  GLSL3,
} from "../third_party/three.module.js";

const vertexShader = `precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

const fragmentShader = `precision highp float;

in vec2 vUv;

uniform float time;

out vec4 color;

// https://www.shadertoy.com/view/wdcSzr

float fog(in vec2 uv) {
  vec2 q=2.0*uv;

  for(float i=1.0;i<40.0;i*=1.1){
    vec2 o=q;
    o.x+=(0.5/i)*cos(i*q.y+time*0.297+0.03*i)+1.3;		
    o.y+=(0.5/i)*cos(i*q.x+time*0.414+0.03*(i+10.0))+1.9;
    q=o;
  }

  vec3 col=vec3(0.5*sin(3.0*q.x)+0.5,0.5*sin(3.0*q.y)+0.5,sin(1.3*q.x+1.7*q.y));
  float f=0.43*(col.x+col.y+col.z);

  return length(col.rgb);
}

void main() {
  float a = 1. - .5 * length(vUv);
  a = clamp(a, 0., 1.);
  a = pow(a, 2.);
  color= vec4(1., 1., 1., a);
  color.rgb *= .5 + .5 * fog(vUv);
}`;

const disc = new Mesh(
  new PlaneGeometry(4, 4),
  new RawShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader,
    fragmentShader,
    glslVersion: GLSL3,
    transparent: true,
  })
);

export { disc };
