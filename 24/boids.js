import { mod, randomInRange, TAU } from "../modules/Maf.js";
import {
  Scene,
  ClampToEdgeWrapping,
  DataTexture,
  FloatType,
  GLSL3,
  IcosahedronGeometry,
  InstancedMesh,
  Matrix4,
  Color,
  UnsignedByteType,
  Mesh,
  NearestFilter,
  OrthographicCamera,
  PlaneGeometry,
  RawShaderMaterial,
  RGBAFormat,
  Vector3,
  WebGLMultipleRenderTargets,
  BoxGeometry,
} from "../third_party/three.module.js";
import {
  natural,
  natural2,
  warm,
  warm2,
  warm3,
  seaside,
  circus,
  circus2,
} from "../modules/palettes.js";
import { GradientLinear } from "../modules/gradient-linear.js";
import { renderer } from "../modules/renderer.js";
import { RoundedBoxGeometry } from "../third_party/RoundedBoxGeometry.js";

const palettes = [
  natural,
  natural2,
  warm,
  warm2,
  warm3,
  seaside,
  circus,
  circus2,
];

const types = 8;

function randomizePalette() {
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const gradient = new GradientLinear(palette);

  let colors = [];
  const steps = types;
  for (let i = 0; i < steps; i++) {
    const c = gradient.getAt(Math.random());
    const la = new Color();
    c.getHSL(la);
    if (la.l > 0.5) {
      la.l = 0.5;
    }
    c.setHSL(la.h, la.s, la.l);
    colors.push(c);
  }

  colors = colors.sort((a, b) => {
    const la = new Color();
    a.getHSL(la);
    const lb = new Color();
    b.getHSL(lb);
    return la.l - lb.l;
  });

  // colors = [new Color(0xff00ff), new Color(0x00ff00)];
  const bkg = colors[0].clone();
  const t = new Color();
  bkg.getHSL(t);
  // t.h -= 0.1;
  t.s /= 2;
  t.l /= 2;
  bkg.setHSL(t.h, t.s, t.l);

  //console.log(`[${colors.map((c) => c.getHex()).join(", ")}]`);

  const gradientData = new Uint8Array(colors.length * 4);
  for (let i = 0; i < colors.length; i++) {
    const c = colors[i];
    gradientData[i * 4] = c.r * 255;
    gradientData[i * 4 + 1] = c.g * 255;
    gradientData[i * 4 + 2] = c.b * 255;
    gradientData[i * 4 * 3] = 1 * 255;
  }
  const gradientTex = new DataTexture(
    gradientData,
    colors.length,
    1,
    RGBAFormat,
    UnsignedByteType,
    undefined,
    undefined,
    undefined,
    NearestFilter,
    NearestFilter
  );
  gradientTex.needsUpdate = true;
  return { bkg, gradientTex };
}

const particleVs = `precision highp float;

in vec3 position;
in vec3 normal;
in mat4 instanceMatrix;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform sampler2D gradientTexture;
uniform float types;

uniform sampler2D positionTexture;
uniform sampler2D velocityTexture;

out vec3 vNormal;
out vec3 vColor;
out vec4 vMVPosition;

float parabola(in float x, in float k) {
  return pow(4. * x * (1. - x), k);
}

mat4 lookAt(vec3 eye, vec3 at, vec3 up) {
  vec3 zaxis = normalize(at - eye);    
  vec3 xaxis = normalize(cross(zaxis, up));
  vec3 yaxis = cross(xaxis, zaxis);

  // negate(zaxis);
  zaxis = -zaxis;

  mat4 viewMatrix = mat4(
    xaxis.x, xaxis.y, xaxis.z, -dot(xaxis, eye),
    yaxis.x, yaxis.y, yaxis.z, -dot(yaxis, eye),
    zaxis.x, zaxis.y, zaxis.z, -dot(zaxis, eye),
    0, 0, 0, 1
  );

  return viewMatrix;
}

void main() {
  float x = instanceMatrix[0][0];
  float y = instanceMatrix[1][0];
  vec2 particleUv = vec2(x, y) / vec2(textureSize(positionTexture, 0));
  vec4 velocity = texture(velocityTexture, particleUv);
  vec4 particle = texture(positionTexture, particleUv);
  float scale = .5 + .5 * velocity.w;// 1.;// parabola(particle.w / 100., .5);
  mat4 rot = lookAt(particle.xyz, particle.xyz + velocity.xyz, vec3(0., 1., 0.));
  vMVPosition = modelViewMatrix * vec4((rot * vec4(position * scale * 2., 1.)).xyz + particle.xyz, 1.);
  gl_Position = projectionMatrix * vMVPosition;
  vColor = texture(gradientTexture, vec2((particle.w + .5)  / types, .5)).xyz;
}
`;

const particleFs = `precision highp float;

in vec3 vColor;
in vec4 vMVPosition;

out vec4 color;

void main() {
  vec3 X = dFdx(vMVPosition.xyz);
  vec3 Y = dFdy(vMVPosition.xyz);
  vec3 n = normalize(cross(X,Y));

  float diffuse = .5 + .5 * max(dot(n, normalize(vec3(1.))), 0.);
  color = vec4(vColor * diffuse, 1.);
}`;

const material = new RawShaderMaterial({
  uniforms: {
    positionTexture: { value: null },
    velocityTexture: { value: null },
    gradientTexture: { value: null },
    bkgColor: { value: new Color() },
    types: { value: types },
  },
  vertexShader: particleVs,
  fragmentShader: particleFs,
  glslVersion: GLSL3,
});

const geometry = new RoundedBoxGeometry(0.005, 0.005, 0.01, 0.0005, 1); // BoxGeometry(0.01, 0.01, 0.02); // IcosahedronGeometry(0.005, 3);
// const geometry = new RoundedBoxGeometry(0.01, 0.01, 0.01, 0.0005, 1);

const WIDTH = 128;
const HEIGHT = 128;
const PARTICLES = WIDTH * HEIGHT;

const particles = new InstancedMesh(geometry, material, PARTICLES);

const d = 0.005;
let ptr = 0;
const originPositions = new Float32Array(WIDTH * HEIGHT * 4);
const tmp = new Vector3();
for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    tmp.set(randomInRange(-d, d), randomInRange(-d, d), randomInRange(-d, d));
    originPositions[ptr++] = tmp.x;
    originPositions[ptr++] = tmp.y;
    originPositions[ptr++] = tmp.z;
    originPositions[ptr++] = Math.floor(Math.random() * types);
  }
}

const originPositionTexture = new DataTexture(
  originPositions,
  WIDTH,
  HEIGHT,
  RGBAFormat,
  FloatType,
  null,
  ClampToEdgeWrapping,
  ClampToEdgeWrapping,
  NearestFilter,
  NearestFilter
);
originPositionTexture.needsUpdate = true;

ptr = 0;
const originVelocities = new Float32Array(WIDTH * HEIGHT * 4);
for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    tmp.set(randomInRange(-d, d), randomInRange(-d, d), randomInRange(-d, d));
    tmp.normalize().setLength(0.01);
    tmp.set(0, 0, 0);
    originVelocities[ptr++] = tmp.x;
    originVelocities[ptr++] = tmp.y;
    originVelocities[ptr++] = tmp.z;
    originVelocities[ptr++] = randomInRange(0.5, 1);
  }
}

const originVelocityTexture = new DataTexture(
  originVelocities,
  WIDTH,
  HEIGHT,
  RGBAFormat,
  FloatType,
  null,
  ClampToEdgeWrapping,
  ClampToEdgeWrapping,
  NearestFilter,
  NearestFilter
);
originVelocityTexture.needsUpdate = true;

material.uniforms.positionTexture.value = originPositionTexture;

ptr = 0;
const mat = new Matrix4();
for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    mat.set(x, y, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    particles.setMatrixAt(ptr++, mat);
  }
}
particles.instanceMatrix.needsUpdate = true;

const simVs = `precision highp float;

precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.);
}`;

const simFs = `precision highp float;

in vec2 vUv;

uniform sampler2D positionTexture;
uniform sampler2D velocityTexture;
uniform sampler2D originPositionTexture;
uniform sampler2D originVelocityTexture;
uniform bool reset;
uniform float seed;
uniform float time;
uniform float delta;
uniform float turn;

uniform float alignmentRadius;
uniform float cohesionRadius;
uniform float separationRadius;

layout(location = 0) out vec4 position;
layout(location = 1) out vec4 velocity;

float random(vec3 scale, float seed) {
  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

vec3 random3(vec3 p, in float seed) {
  return vec3(
    random(p, seed),
    random(p + vec3(31, 72, 54), seed),
    random(p + vec3(156, 87, 99), seed)
  );
}

float parabola(in float x, in float k) {
  return pow(4. * x * (1. - x), k);
}

void main() {
  if(reset) {
    position = texture(originPositionTexture, vUv);
    velocity = texture(originVelocityTexture, vUv);
  } else {

    vec2 size = vec2(textureSize(positionTexture, 0));
    position = texture(positionTexture, vUv);
    velocity = texture(velocityTexture, vUv);

    float group = position.w;

    // position.w += .1;//delta;
    // if(position.w>100.) {
    //   position.xyz = texture(originPositionTexture, vUv).xyz;
    //   position.w -= 100.;
    //   return;
    // }

    vec3 pos;
    vec3 dir;
    vec3 dif;
    vec3 center = vec3(0.);
    float distSquared;
    float dist;
    float percent;
    float f;

    vec3 alignment = vec3(0.);
    vec3 cohesion = vec3(0.);
    vec3 separation = vec3(0.);

    float alignmentTotal = 0.;
    float cohesionTotal = 0.;

    vec3 acceleration = vec3(0.);

    // Seek
    
    for(float y = turn; y < size.y; y += 3.){
      for(float x = 0.0; x < size.x; x++){

        if(x != y) {
          vec2 puv = vec2(x + 0.5, y + 0.5) / size;
          vec4 pos = texture(positionTexture, puv);

          dir = pos.xyz - position.xyz;
          dist = length( dir );

          if(pos.w == group) {

            // Alignment
            if(dist < alignmentRadius) {
              vec3 vel = texture(velocityTexture, puv).xyz;
              alignment += vel;
              alignmentTotal++;
            }
            
            // Cohesion
            if(dist < cohesionRadius) {
              center += pos.xyz;
              cohesionTotal++;
            }

          }
            
          // Separation
          if(dist < separationRadius) {
            separation -= dir;
          }
          
        }
      }
    }

    // Wander
    vec3 wander = (random3(position.xyz, seed) - .5) * .02;

    // Seek
    vec3 seek = - position.xyz;
    seek = clamp(seek, vec3(-.01), vec3(.01));
    seek *= .01;

    // Alignment
    alignment /= max(alignmentTotal, 1.);
    alignment = clamp(alignment, vec3(-.01), vec3(.01));

    // Cohesion
    center /= max(cohesionTotal, 1.);
    cohesion = center - position.xyz;
    cohesion = clamp(cohesion, vec3(-.01), vec3(.01));

    // Separation
    separation = clamp(separation, vec3(-.01), vec3(.01));

    acceleration = wander + seek + separation + alignment + cohesion - velocity.xyz;
    
    vec3 newVel = velocity.xyz;

    newVel.xyz += acceleration * .1;
    newVel.xyz = normalize(newVel.xyz) * .01;
    // newVel.xyz = clamp(newVel.xyz, vec3(-.01), vec3(.01));
    // float impulse = .5 + .5 * sin(time + 100. * velocity.w);
    // impulse = parabola(impulse, .5);
    // newVel.xyz *= .5 + .5 * impulse;

    velocity.xyz = newVel * .5;
    velocity.xyz *= (1.5-velocity.w);

    position.xyz += velocity.xyz;

    // Bounds
    float s = 3.;
    position.xyz = mod(position.xyz + vec3(.5*s), vec3(1.*s)) - .5*s;
    
  }
}`;

const fbo = new WebGLMultipleRenderTargets(WIDTH, HEIGHT, 2, {
  format: RGBAFormat,
  type: FloatType,
  wrapS: ClampToEdgeWrapping,
  wrapT: ClampToEdgeWrapping,
  minFilter: NearestFilter,
  magFilter: NearestFilter,
});
const fbos = [fbo, fbo.clone()];

const simShader = new RawShaderMaterial({
  uniforms: {
    reset: { value: false },
    turn: { value: 0 },
    originPositionTexture: { value: originPositionTexture },
    originVelocityTexture: { value: originVelocityTexture },
    positionTexture: { value: fbo.texture[0] },
    velocityTexture: { value: fbo.texture[1] },
    seed: { value: 0 },
    delta: { value: 1 },
    time: { value: 0 },
    alignmentRadius: { value: 0.2 },
    cohesionRadius: { value: 0.4 },
    separationRadius: { value: 0.4 },
  },
  vertexShader: simVs,
  fragmentShader: simFs,
  glslVersion: GLSL3,
});
const simScene = new Scene();

let currentFBO = 0;
const simCamera = new OrthographicCamera(-1, -1, -1, -1, 0, 1);
const simQuad = new Mesh(new PlaneGeometry(2, 2), simShader);
simQuad.scale.set(WIDTH, HEIGHT, 1);
simScene.add(simQuad);

function step(renderer, reset = false) {
  simShader.uniforms.reset.value = reset;
  simShader.uniforms.seed.value = randomInRange(-1000, 1000);
  simShader.uniforms.turn.value = mod(++simShader.uniforms.turn.value, 3);

  renderer.setRenderTarget(fbos[1 - currentFBO]);
  renderer.render(simScene, simCamera);
  renderer.setRenderTarget(null);
  currentFBO = 1 - currentFBO;

  simShader.uniforms.positionTexture.value = fbos[currentFBO].texture[0];
  simShader.uniforms.velocityTexture.value = fbos[currentFBO].texture[1];
  const duration = 10000;
  simShader.uniforms.time.value =
    (mod(performance.now(), duration) * TAU) / duration;

  material.uniforms.positionTexture.value = fbos[currentFBO].texture[0];
  material.uniforms.velocityTexture.value = fbos[currentFBO].texture[1];
}

function randomizeColors(renderer) {
  const { bkg, gradientTex } = randomizePalette();
  material.uniforms.gradientTexture.value = gradientTex;
  material.uniforms.bkgColor.value.copy(bkg);
  renderer.setClearColor(bkg, 1);
}

function randomizeValues() {
  simShader.uniforms.alignmentRadius.value = randomInRange(0.2, 0.4);
  simShader.uniforms.cohesionRadius.value = randomInRange(0.4, 0.6);
  simShader.uniforms.separationRadius.value = randomInRange(0.4, 0.6);
}

export { particles, simShader, step, randomizeColors, randomizeValues };
