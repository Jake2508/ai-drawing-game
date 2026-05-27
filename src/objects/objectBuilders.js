/**
 * objectBuilders.js
 *
 * Procedural Three.js object factories.  Each export builds a THREE.Group
 * whose children share the custom GLSL shader defined in the shaders/ folder.
 *
 * To add a new object:
 *   1. Write a buildXxx(item) function that returns a THREE.Group.
 *   2. Register it in the BUILDERS map at the bottom of the file.
 *   3. Add the matching item entry in gameConfig.js.
 */

import * as THREE from 'three';
import { CONFIG } from '../config/gameConfig';
import vertexShader from '../shaders/vertexShader';
import fragmentShader from '../shaders/fragmentShader';

// ── Material factory ───────────────────────────────────────────────────────
// Creates a fresh ShaderMaterial instance so every mesh owns its own uniforms.
function mat(
  color,
  noiseScale    = CONFIG.SHADER_NOISE_SCALE,
  glowIntensity = CONFIG.SHADER_GLOW_INTENSITY,
) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime:          { value: 0 },
      uColor:         { value: new THREE.Vector3(...color) },
      uNoiseScale:    { value: noiseScale },
      uGlowIntensity: { value: glowIntensity },
    },
    vertexShader,
    fragmentShader,
  });
}

// ── Helper: adds a mesh straight to a group ────────────────────────────────
function add(group, geometry, color, opts = {}) {
  const mesh = new THREE.Mesh(geometry, mat(color, opts.noise, opts.glow));
  if (opts.pos)   mesh.position.set(...opts.pos);
  if (opts.rot)   mesh.rotation.set(...opts.rot);
  if (opts.scale) mesh.scale.set(...opts.scale);
  group.add(mesh);
  return mesh;
}

// ══════════════════════════════════════════════════════════════════════════
//  SHAPES THEME
// ══════════════════════════════════════════════════════════════════════════

function buildSnowman(item) {
  const g = new THREE.Group();
  const W = item.color;
  const ORANGE = [0.95, 0.45, 0.05];
  const DARK   = [0.06, 0.06, 0.12];
  const HAT    = [0.08, 0.08, 0.14];

  // Body balls (large → medium → small)
  add(g, new THREE.SphereGeometry(0.72, 32, 32), W, { pos: [0, -0.72, 0] });
  add(g, new THREE.SphereGeometry(0.52, 32, 32), W, { pos: [0,  0.30, 0] });
  add(g, new THREE.SphereGeometry(0.36, 32, 32), W, { pos: [0,  1.08, 0] });

  // Carrot nose
  add(g, new THREE.ConeGeometry(0.055, 0.28, 8), ORANGE, {
    pos: [0, 1.08, 0.36],
    rot: [Math.PI / 2, 0, 0],
  });

  // Eyes
  const eyeGeo = new THREE.SphereGeometry(0.045, 8, 8);
  add(g, eyeGeo, DARK, { pos: [-0.13, 1.18, 0.32] });
  add(g, eyeGeo, DARK, { pos: [ 0.13, 1.18, 0.32] });

  // Hat brim + crown
  add(g, new THREE.CylinderGeometry(0.44, 0.44, 0.06, 32), HAT, { pos: [0, 1.42, 0] });
  add(g, new THREE.CylinderGeometry(0.26, 0.28, 0.36, 32), HAT, { pos: [0, 1.63, 0] });

  return g;
}

function buildDonut(item) {
  const g = new THREE.Group();
  add(g, new THREE.TorusGeometry(0.80, 0.32, 32, 100), item.color);
  return g;
}

function buildDiamond(item) {
  const g = new THREE.Group();
  // OctahedronGeometry flattened on Y gives a classic diamond silhouette
  add(g, new THREE.OctahedronGeometry(1.0, 0), item.color, {
    scale: [1, 0.72, 1],
    noise: 2,
    glow:  0.65,
  });
  return g;
}

function buildPyramid(item) {
  const g = new THREE.Group();
  // 4 radial segments = square base
  add(g, new THREE.ConeGeometry(1.0, 1.6, 4, 1), item.color, { noise: 3, glow: 0.28 });
  return g;
}

function buildCube(item) {
  const g = new THREE.Group();
  add(g, new THREE.BoxGeometry(1.4, 1.4, 1.4), item.color, { noise: 2, glow: 0.32 });
  return g;
}

// ══════════════════════════════════════════════════════════════════════════
//  SPACE THEME
// ══════════════════════════════════════════════════════════════════════════

function buildSaturn(item) {
  const g = new THREE.Group();
  // Planet body
  add(g, new THREE.SphereGeometry(0.9, 32, 32), item.color);

  // Iconic tilted ring
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 0.15, 8, 80),
    mat([0.75, 0.62, 0.38], 3, 0.18),
  );
  ring.rotation.x = Math.PI / 2.6;
  g.add(ring);

  return g;
}

function buildMoon(item) {
  const g = new THREE.Group();
  // Moon body — high noise scale gives a rocky surface feel
  add(g, new THREE.SphereGeometry(1.0, 32, 32), item.color, { noise: 9, glow: 0.12 });

  // Crater bumps (darker spheres partially embedded in the surface)
  const C = [0.55, 0.55, 0.50];
  const craters = [
    { pos: [0.52, 0.60, 0.68], r: 0.19 },
    { pos: [-0.40, -0.28, 0.84], r: 0.23 },
    { pos: [0.10, -0.62, 0.72], r: 0.15 },
  ];
  craters.forEach(({ pos, r }) =>
    add(g, new THREE.SphereGeometry(r, 16, 16), C, { pos, glow: 0.04 }),
  );

  return g;
}

function buildRocket(item) {
  const g = new THREE.Group();
  const SILVER = [0.82, 0.84, 0.88];
  const DARK   = [0.28, 0.28, 0.34];

  // Fuselage
  add(g, new THREE.CylinderGeometry(0.34, 0.34, 1.4, 24), item.color);
  // Nose cone (silver)
  add(g, new THREE.ConeGeometry(0.34, 0.8, 24), SILVER, { pos: [0, 1.1, 0] });
  // Engine nozzle
  add(g, new THREE.CylinderGeometry(0.24, 0.37, 0.22, 16), DARK, { pos: [0, -0.81, 0] });

  // 3 fins evenly spaced around the base
  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2;
    const fin = new THREE.Mesh(
      new THREE.ConeGeometry(0.27, 0.52, 3, 1),
      mat(item.color),
    );
    fin.position.set(Math.sin(angle) * 0.42, -0.70, Math.cos(angle) * 0.42);
    fin.rotation.set(Math.PI, -angle, 0);
    g.add(fin);
  }

  return g;
}

function buildUFO(item) {
  const g = new THREE.Group();
  const DOME  = [0.55, 0.90, 1.00];
  const LIGHT = [1.00, 0.95, 0.28];

  // Main disc body
  add(g, new THREE.CylinderGeometry(1.1, 0.7, 0.28, 32), item.color);

  // Dome (open-bottom hemisphere)
  add(g, new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), DOME, {
    pos:  [0, 0.14, 0],
    noise: 2,
    glow:  0.55,
  });

  // Blinking light ring around the equator
  const lightGeo = new THREE.SphereGeometry(0.07, 8, 8);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    add(g, lightGeo, LIGHT, { pos: [Math.sin(a) * 0.9, -0.06, Math.cos(a) * 0.9], glow: 1.1 });
  }

  return g;
}

function buildComet(item) {
  const g = new THREE.Group();

  // Head
  add(g, new THREE.SphereGeometry(0.44, 32, 32), item.color, { noise: 6, glow: 0.55 });

  // Three trailing tail cones, each slightly longer and dimmer
  const tails = [
    { z: -0.62,  r: 0.28, h: 0.70, glow: 0.35 },
    { z: -1.20,  r: 0.20, h: 1.00, glow: 0.22 },
    { z: -1.90,  r: 0.12, h: 1.10, glow: 0.12 },
  ];
  tails.forEach(({ z, r, h, glow }) => {
    const c = item.color.map((v, i) => v * (0.8 - i * 0.05));
    add(g, new THREE.ConeGeometry(r, h, 6), c, {
      pos: [0, 0, z],
      rot: [Math.PI / 2, 0, 0],
      glow,
    });
  });

  return g;
}

// ══════════════════════════════════════════════════════════════════════════
//  NATURE THEME
// ══════════════════════════════════════════════════════════════════════════

function buildTree(item) {
  const g = new THREE.Group();
  const BROWN = [0.42, 0.26, 0.10];

  // Trunk
  add(g, new THREE.CylinderGeometry(0.15, 0.22, 0.9, 12), BROWN, {
    pos:   [0, -0.80, 0],
    noise:  3,
    glow:  0.14,
  });

  // Three stacked cone tiers, largest at bottom
  [
    { y: 0.05, rb: 0.76, h: 0.90 },
    { y: 0.65, rb: 0.58, h: 0.85 },
    { y: 1.18, rb: 0.40, h: 0.80 },
  ].forEach(({ y, rb, h }) =>
    add(g, new THREE.ConeGeometry(rb, h, 8), item.color, { pos: [0, y, 0], noise: 5, glow: 0.24 }),
  );

  return g;
}

function buildApple(item) {
  const g = new THREE.Group();
  const STEM  = [0.30, 0.18, 0.06];
  const GREEN = [0.20, 0.72, 0.18];

  // Body (slightly squashed vertically)
  add(g, new THREE.SphereGeometry(0.85, 32, 32), item.color, { scale: [1, 0.92, 1] });

  // Stem
  add(g, new THREE.CylinderGeometry(0.035, 0.045, 0.38, 8), STEM, {
    pos:  [0, 0.90, 0],
    noise: 2,
    glow:  0.10,
  });

  // Leaf (flattened sphere, rotated)
  add(g, new THREE.SphereGeometry(0.20, 8, 4), GREEN, {
    pos:   [0.18, 0.96, 0],
    scale: [1.8, 0.35, 1.0],
    rot:   [0, 0, 0.5],
    noise:  3,
    glow:  0.20,
  });

  return g;
}

function buildMushroom(item) {
  const g = new THREE.Group();
  const STALK = [0.94, 0.90, 0.85];
  const DOT   = [0.98, 0.98, 0.98];

  // Stalk
  add(g, new THREE.CylinderGeometry(0.28, 0.35, 0.90, 16), STALK, {
    pos:  [0, -0.35, 0],
    noise: 3,
    glow:  0.14,
  });

  // Cap (open-bottom hemisphere)
  add(g, new THREE.SphereGeometry(0.80, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), item.color, {
    pos:  [0, 0.20, 0],
    noise: 5,
    glow:  0.28,
  });

  // White spots on the cap
  const dotGeo = new THREE.SphereGeometry(0.08, 8, 8);
  [
    [0.00,  0.78,  0.36],
    [0.38,  0.65,  0.22],
    [-0.32, 0.68,  0.29],
    [0.10,  0.60, -0.42],
  ].forEach((pos) => add(g, dotGeo, DOT, { pos, glow: 0.20 }));

  return g;
}

function buildMountain(item) {
  const g = new THREE.Group();
  const SNOW = [0.97, 0.98, 1.00];

  // Main peak (5 radial segments = slightly irregular silhouette)
  add(g, new THREE.ConeGeometry(1.1, 2.0, 5, 1), item.color, { noise: 6, glow: 0.18 });

  // Snow cap (smaller cone on top)
  add(g, new THREE.ConeGeometry(0.34, 0.55, 5, 1), SNOW, { pos: [0, 0.95, 0], noise: 3, glow: 0.38 });

  return g;
}

function buildFlower(item) {
  const g = new THREE.Group();
  const YELLOW = [0.98, 0.88, 0.18];
  const GREEN  = [0.20, 0.70, 0.22];

  // Centre
  add(g, new THREE.SphereGeometry(0.28, 16, 16), YELLOW, { noise: 2, glow: 0.45 });

  // 8 petals arranged in a circle
  const petalGeo = new THREE.SphereGeometry(0.25, 12, 8);
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    add(g, petalGeo, item.color, {
      pos:   [Math.cos(angle) * 0.52, Math.sin(angle) * 0.52, 0],
      scale: [1.0, 0.45, 0.45],
      rot:   [0, 0, angle],
      noise:  3,
      glow:  0.28,
    });
  }

  // Stem
  add(g, new THREE.CylinderGeometry(0.05, 0.06, 1.0, 8), GREEN, {
    pos:  [0, -0.78, 0],
    noise: 2,
    glow:  0.14,
  });

  return g;
}

// ══════════════════════════════════════════════════════════════════════════
//  REGISTRY — maps item IDs → builder functions
// ══════════════════════════════════════════════════════════════════════════
const BUILDERS = {
  // Shapes
  snowman:  buildSnowman,
  donut:    buildDonut,
  diamond:  buildDiamond,
  pyramid:  buildPyramid,
  cube:     buildCube,
  // Space
  saturn:   buildSaturn,
  moon:     buildMoon,
  rocket:   buildRocket,
  ufo:      buildUFO,
  comet:    buildComet,
  // Nature
  tree:     buildTree,
  apple:    buildApple,
  mushroom: buildMushroom,
  mountain: buildMountain,
  flower:   buildFlower,
};

/**
 * buildObject(item) → THREE.Group
 * Call this from ThreeRenderer with an item config from gameConfig.js.
 */
export function buildObject(item) {
  const builder = BUILDERS[item.id];
  if (!builder) throw new Error(`No builder registered for item id: "${item.id}"`);
  return builder(item);
}
