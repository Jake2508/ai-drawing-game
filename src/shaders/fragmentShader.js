// Fragment shader — computes Blinn-Phong lighting on top of an animated
// fractal Brownian motion (fBm) noise texture, plus a rim / edge glow.
//
// Uniforms (all set per-mesh via objectBuilders.js):
//   uTime          — elapsed game time (drives texture animation)
//   uColor         — base RGB colour in 0-1 range
//   uNoiseScale    — frequency of the noise texture
//   uGlowIntensity — strength of the edge glow
const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3  uColor;
  uniform float uNoiseScale;
  uniform float uGlowIntensity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  // ── Value noise helpers ──────────────────────────────────────
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);   // cubic smoothstep
    return mix(
      mix(hash(i),                hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Fractal Brownian Motion — 5 octaves of noise
  float fbm(vec2 p) {
    float v = 0.0, amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v   += amp * noise(p);
      p   *= 2.1;
      amp *= 0.5;
    }
    return v;
  }
  // ─────────────────────────────────────────────────────────────

  void main() {
    vec3 normal = normalize(vNormal);

    // Directional light (all calculations in view-space)
    vec3  lightDir = normalize(vec3(1.2, 1.8, 1.0));
    float diffuse  = max(dot(normal, lightDir), 0.0);
    float ambient  = 0.30;

    // Blinn-Phong specular
    vec3  viewDir  = normalize(vViewPosition);
    vec3  halfDir  = normalize(lightDir + viewDir);
    float spec     = pow(max(dot(normal, halfDir), 0.0), 32.0) * 0.45;

    // Animated fBm noise drives subtle surface texture
    float n = fbm(vUv * uNoiseScale + vec2(uTime * 0.07, uTime * 0.04));

    // Rim / edge glow — bright where the surface faces away from camera
    float rim = 1.0 - max(dot(normal, viewDir), 0.0);
    rim = pow(rim, 2.5);

    // Compose
    vec3 baseColor = uColor * (0.80 + 0.20 * n);
    vec3 lit       = baseColor * (ambient + (1.0 - ambient) * diffuse) + spec;
    vec3 glow      = uColor * 1.6 * rim * uGlowIntensity;

    gl_FragColor   = vec4(lit + glow, 1.0);
  }
`;

export default fragmentShader;
