# AI Draw & Guess
Repository for my AI Draw & Guess browser game. Coded by Claude Code.

<!-- Visit: https://your-deployed-url-here -->

## Overview
AI Draw & Guess is a browser-based guessing game where procedurally generated 3D objects are rendered in real time using custom GLSL shaders. Players choose a theme — Shapes, Space, or Nature — and must identify the slowly rotating object before making a wrong guess. Each correct guess earns points and advances to the next item; a wrong guess ends the run and records a high score. All objects are built programmatically with Three.js geometry, tinted and lit by per-object shader materials with animated noise and a rim glow effect.

## Features
- **Procedural 3D Objects:** Every item is built from Three.js geometry at runtime — no model files. Objects gently rotate and bob using a custom animation loop.
- **Custom GLSL Shaders:** Each object uses a vertex and fragment shader with animated fBm noise, a configurable glow intensity, and a per-item colour tint.
- **Three Themes:** Shapes (🔷), Space (🚀), and Nature (🌿) — 5 items per theme. Aliases are accepted (e.g. "doughnut" for Donut, "flying saucer" for UFO).
- **Round System:** Once all items in a theme are guessed correctly, the pool resets and a new round begins, keeping the run going indefinitely.
- **High Score Board:** The top 3 scores are persisted to `localStorage` and displayed on the home screen between sessions.
- **Responsive Canvas:** A `ResizeObserver` keeps the WebGL canvas correctly sized at any viewport and cleans up GPU resources between objects to prevent memory leaks.

## Getting Started
To get the project up and running on your local machine, follow these steps:

Clone the repository:
```bash
git clone https://github.com/Jake2508/ai-drawing-game.git
cd ai-drawing-game
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Note: Three.js requires the project to be served via a local server — opening `index.html` directly in the browser will not work. Vite's dev server handles this automatically with `npm run dev`.

## Built With
**React** — component state machine managing game phases (playing → game over).

**Three.js** — WebGL scene, camera, and procedural geometry.

**GLSL (custom shaders)** — animated noise texture, rim glow, and per-object colour tint applied via `ShaderMaterial`.

**Vite** — development server and production bundler.

**localStorage** — lightweight persistence for the high score board.

## Author
Jake Rose

Website: https://jake-rose.com/
