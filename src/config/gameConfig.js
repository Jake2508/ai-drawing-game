// ╔══════════════════════════════════════════════════════════════╗
// ║  GAME CONFIGURATION                                          ║
// ║  All tunable variables live here.  Edit this file to change  ║
// ║  game behaviour without touching any component logic.        ║
// ╚══════════════════════════════════════════════════════════════╝

export const CONFIG = {
  // ── Scoring ──────────────────────────────────────────────────
  POINTS_PER_CORRECT:   10,                   // pts per right answer
  TOP_SCORES_COUNT:     3,                    // how many top scores to keep
  HIGH_SCORES_KEY:      'aiDrawGame_scores',  // localStorage key

  // ── 3-D Renderer ─────────────────────────────────────────────
  CAMERA_Z:             4.5,   // camera distance from origin
  OBJECT_ROTATION_SPEED: 0.008, // radians added to Y per animation frame
  OBJECT_FLOAT_SPEED:   0.6,   // speed of the up-down bob
  OBJECT_FLOAT_AMOUNT:  0.07,  // amplitude of the bob (world units)

  // ── GLSL Shaders ─────────────────────────────────────────────
  SHADER_TIME_SPEED:    0.4,   // multiplier on elapsed time fed to uTime
  SHADER_NOISE_SCALE:   4.0,   // scale of procedural fBm noise texture
  SHADER_GLOW_INTENSITY: 0.40, // rim / edge glow strength

  // ── UI / Transitions ─────────────────────────────────────────
  FEEDBACK_DURATION_MS:    800,  // how long the "Correct!" flash shows
  TRANSITION_DURATION_MS:  400,  // cross-fade between objects
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  THEMES & ITEMS                                              ║
// ║  Each item.id must match a key in objectBuilders.js.         ║
// ║  color: [r, g, b] in 0-1 range for the primary shader tint. ║
// ║  aliases: alternative accepted answers (case-insensitive).   ║
// ╚══════════════════════════════════════════════════════════════╝

export const THEMES = {
  shapes: {
    label: 'Shapes',
    emoji: '🔷',
    items: [
      { id: 'snowman',  label: 'Snowman',  color: [0.95, 0.97, 1.00], aliases: ['snow man'] },
      { id: 'donut',    label: 'Donut',    color: [0.90, 0.55, 0.25], aliases: ['doughnut', 'torus', 'ring'] },
      { id: 'diamond',  label: 'Diamond',  color: [0.45, 0.85, 1.00], aliases: ['gem', 'jewel'] },
      { id: 'pyramid',  label: 'Pyramid',  color: [0.95, 0.82, 0.25], aliases: [] },
      { id: 'cube',     label: 'Cube',     color: [0.50, 0.38, 0.95], aliases: ['box', 'square'] },
    ],
  },
  space: {
    label: 'Space',
    emoji: '🚀',
    items: [
      { id: 'saturn',  label: 'Saturn',  color: [0.92, 0.74, 0.42], aliases: ['planet', 'ringed planet'] },
      { id: 'moon',    label: 'Moon',    color: [0.82, 0.82, 0.76], aliases: ['crescent', 'lunar'] },
      { id: 'rocket',  label: 'Rocket',  color: [0.75, 0.22, 0.22], aliases: ['spaceship', 'spacecraft'] },
      { id: 'ufo',     label: 'UFO',     color: [0.35, 0.92, 0.50], aliases: ['flying saucer', 'alien ship'] },
      { id: 'comet',   label: 'Comet',   color: [0.55, 0.70, 1.00], aliases: ['meteor', 'shooting star'] },
    ],
  },
  nature: {
    label: 'Nature',
    emoji: '🌿',
    items: [
      { id: 'tree',     label: 'Tree',     color: [0.18, 0.68, 0.22], aliases: ['pine', 'fir', 'christmas tree'] },
      { id: 'apple',    label: 'Apple',    color: [0.92, 0.18, 0.18], aliases: ['fruit'] },
      { id: 'mushroom', label: 'Mushroom', color: [0.82, 0.30, 0.18], aliases: ['toadstool', 'fungi', 'fungus'] },
      { id: 'mountain', label: 'Mountain', color: [0.50, 0.52, 0.62], aliases: ['hill', 'volcano', 'peak'] },
      { id: 'flower',   label: 'Flower',   color: [0.95, 0.40, 0.72], aliases: ['daisy', 'rose', 'bloom'] },
    ],
  },
};
