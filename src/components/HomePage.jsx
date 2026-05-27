/**
 * HomePage
 *
 * Landing screen.  Lets the player choose a theme then hit Play.
 * Shows the current top scores below the hero block.
 *
 * Props
 *   onPlay(themeId) — called when the user clicks Play
 */
import { useState } from 'react';
import { THEMES } from '../config/gameConfig';
import ScoreBoard from './ScoreBoard';

export default function HomePage({ onPlay }) {
  const [selectedTheme, setSelectedTheme] = useState('shapes');

  return (
    <div className="home-page">
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="home-hero">
        <h1 className="home-title">
          <span className="title-highlight">AI</span> Draw &amp; Guess
        </h1>
        <p className="home-subtitle">
          Procedural 3D objects — can you name them all?
        </p>

        {/* Theme selector */}
        <div className="theme-picker">
          <p className="theme-picker__label">Choose a theme</p>
          <div className="theme-picker__options">
            {Object.entries(THEMES).map(([id, theme]) => (
              <button
                key={id}
                className={`theme-btn${selectedTheme === id ? ' theme-btn--active' : ''}`}
                onClick={() => setSelectedTheme(id)}
                aria-pressed={selectedTheme === id}
              >
                <span className="theme-btn__emoji">{theme.emoji}</span>
                {theme.label}
              </button>
            ))}
          </div>
        </div>

        <button
          className="play-btn"
          onClick={() => onPlay(selectedTheme)}
        >
          ▶ Play
        </button>
      </div>

      {/* ── Scoreboard ────────────────────────────────────── */}
      <div className="home-scores">
        <ScoreBoard compact />
      </div>
    </div>
  );
}
