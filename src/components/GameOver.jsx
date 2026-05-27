/**
 * GameOver
 *
 * Shown when the player makes a wrong guess.
 * If the score qualifies as a top-3 high score the player is prompted
 * to enter their name before it's saved to localStorage.
 *
 * Props
 *   score        — final numeric score
 *   lastItem     — the item the player failed to guess (for "The answer was…")
 *   onPlayAgain  — called when the player wants another round (same theme)
 *   onHome       — called when the player returns to the home screen
 */
import { useState } from 'react';
import { isTopScore, saveHighScore } from '../utils/highScores';
import ScoreBoard from './ScoreBoard';

export default function GameOver({ score, lastItem, onPlayAgain, onHome }) {
  const [name,  setName]  = useState('');
  const [saved, setSaved] = useState(false);

  const qualifies = isTopScore(score);

  function handleSave(e) {
    e.preventDefault();
    if (saved) return;
    saveHighScore(name, score);
    setSaved(true);
  }

  return (
    <div className="gameover-overlay">
      <div className="gameover-card">
        <h2 className="gameover-title">Game Over</h2>

        {lastItem && (
          <p className="gameover-answer">
            The answer was&nbsp;<strong>{lastItem.label}</strong>
          </p>
        )}

        {/* Final score */}
        <div className="gameover-score">
          <span className="gameover-score__number">{score}</span>
          <span className="gameover-score__label">points</span>
        </div>

        {/* High-score entry form */}
        {qualifies && !saved && (
          <div className="hs-entry">
            <p className="hs-entry__badge">🏆 New High Score!</p>
            <form className="hs-entry__form" onSubmit={handleSave}>
              <input
                type="text"
                className="hs-entry__input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                autoFocus
              />
              <button type="submit" className="hs-entry__btn">Save</button>
            </form>
          </div>
        )}

        {saved && <p className="hs-saved-msg">Score saved! 🎉</p>}

        <ScoreBoard />

        {/* Action buttons */}
        <div className="gameover-actions">
          <button className="action-btn action-btn--primary" onClick={onPlayAgain}>
            Play Again
          </button>
          <button className="action-btn action-btn--secondary" onClick={onHome}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
