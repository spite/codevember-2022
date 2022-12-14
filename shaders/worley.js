const shader = `
#define UI0 1597334673U
#define UI1 3812015801U
#define UI2 uvec2(UI0, UI1)
#define UI3 uvec3(UI0, UI1, 2798796415U)
#define UIF (1.0 / float(0xffffffffU))

vec3 hash33(vec3 p) {
  uvec3 q = uvec3(ivec3(p)) * UI3;
  q = (q.x ^ q.y ^ q.z)*UI3;
  return -1. + 2. * vec3(q) * UIF;
}

float remap(float x, float a, float b, float c, float d) {
  return (((x - a) / (b - a)) * (d - c)) + c;
}

// Gradient noise by iq (modified to be tileable)
float gradientNoise(vec3 x, float freq) {

  // grid
  vec3 p = floor(x);
  vec3 w = fract(x);

  // quintic interpolant
  vec3 u = w * w * w * (w * (w * 6. - 15.) + 10.);

  // gradients
  vec3 ga = hash33(mod(p + vec3(0., 0., 0.), freq));
  vec3 gb = hash33(mod(p + vec3(1., 0., 0.), freq));
  vec3 gc = hash33(mod(p + vec3(0., 1., 0.), freq));
  vec3 gd = hash33(mod(p + vec3(1., 1., 0.), freq));
  vec3 ge = hash33(mod(p + vec3(0., 0., 1.), freq));
  vec3 gf = hash33(mod(p + vec3(1., 0., 1.), freq));
  vec3 gg = hash33(mod(p + vec3(0., 1., 1.), freq));
  vec3 gh = hash33(mod(p + vec3(1., 1., 1.), freq));

  // projections
  float va = dot(ga, w - vec3(0., 0., 0.));
  float vb = dot(gb, w - vec3(1., 0., 0.));
  float vc = dot(gc, w - vec3(0., 1., 0.));
  float vd = dot(gd, w - vec3(1., 1., 0.));
  float ve = dot(ge, w - vec3(0., 0., 1.));
  float vf = dot(gf, w - vec3(1., 0., 1.));
  float vg = dot(gg, w - vec3(0., 1., 1.));
  float vh = dot(gh, w - vec3(1., 1., 1.));

  // interpolation
  return va + 
          u.x * (vb - va) + 
          u.y * (vc - va) + 
          u.z * (ve - va) + 
          u.x * u.y * (va - vb - vc + vd) + 
          u.y * u.z * (va - vc - ve + vg) + 
          u.z * u.x * (va - vb - ve + vf) + 
          u.x * u.y * u.z * (-va + vb + vc - vd + ve - vf - vg + vh);
}

// Tileable 3D worley noise
float worleyNoise(vec3 uv, float freq) {
  vec3 id = floor(uv);
  vec3 p = fract(uv);
  
  float minDist = 10000.;
  for (float x = -1.; x <= 1.; ++x) {
    for(float y = -1.; y <= 1.; ++y) {
      for(float z = -1.; z <= 1.; ++z) {
        vec3 offset = vec3(x, y, z);
        vec3 h = hash33(mod(id + offset, vec3(freq))) * .5 + .5;
        h += offset;
        vec3 d = p - h;
        minDist = min(minDist, dot(d, d));
      }
    }
  }
  
  // inverted worley noise
  return 1. - minDist;
}

// Fbm for Perlin noise based on iq's blog
float perlinfbm(vec3 p, float freq, int octaves) {
  float G = exp2(-.85);
  float amp = 1.;
  float noise = 0.;
  for (int i = 0; i < octaves; ++i) {
    noise += amp * gradientNoise(p * freq, freq);
    freq *= 2.;
    amp *= G;
  }
  
  return noise;
}

// Tileable Worley fbm inspired by Andrew Schneider's Real-Time Volumetric Cloudscapes
// chapter in GPU Pro 7.
float worleyFbm(vec3 p, float freq) {
  return worleyNoise(p*freq, freq) * .625 +
          worleyNoise(p*freq*2., freq*2.) * .25 +
          worleyNoise(p*freq*4., freq*4.) * .125;
}

float edge(vec3 p, float freq) {
  float d= 0.;
  float up = worleyFbm(p - vec3(0.,d,0.), freq);
  float down = worleyFbm(p- vec3(0.,d,0.), freq);
  float right = worleyFbm(p- vec3(d,0.,0.), freq);
  float left = worleyFbm(p+ vec3(d,0.,0.), freq);
  return (up+down+right+left)/4.;
}
  `;

export { shader };
