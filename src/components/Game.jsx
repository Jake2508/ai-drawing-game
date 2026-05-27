/**
 * Game
 *
 * Core game loop component.
 *
 * State machine
 *   'playing'  — ThreeRenderer is visible, guess input is active
 *   'gameover' — delegates to <GameOver />
 *
 * Props
 *   themeId — key from THEMES in gameConfig.js
 *   onHome  — callback to return to the home screen
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { THEMES, CONFIG } from '../config/gameConfig';
import ThreeRenderer from './ThreeRenderer';
import GameOver from './GameOver';

// ── Helpers ────────────────────────────────────────────────────────────────

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Returns a random item from the theme that isn't in usedIds.
 * When all items are exhausted returns null so the caller can
 * decide whether to loop or end.
 */
function pickItem(theme, usedIds) {
  const available = theme.items.filter((i) => !usedIds.includes(i.id));
  return available.length ? pickRandom(available) : null;
}

/**
 * Checks a player's raw guess against the item's label and optional aliases.
 * Case-insensitive, trimmed.
 */
function isCorrect(guess, item) {
  const normalised = guess.trim().toLowerCase();
  const answers    = [item.label, ...(item.aliases ?? [])].map((s) => s.toLowerCase());
  return answers.includes(normalised);
}

// ── Component ──────────────────────────────────────────────────────────────

export default function Game({ themeId, onHome }) {
  const theme = THEMES[themeId];

  const [gameState,   setGameState]   = useState('playing');
  const [currentItem, setCurrentItem] = useState(() => pickItem(theme, []));
  const [usedIds,     setUsedIds]     = useState([]);
  const [score,       setScore]       = useState(0);
  const [round,       setRound]       = useState(1);
  const [guess,       setGuess]       = useState('');
  const [feedback,    setFeedback]    = useState(null); // 'correct' | 'wrong'

  const inputRef = useRef(null);

  // Keep the guess input focused during active play
  useEffect(() => {
    if (gameState === 'playing' && !feedback) {
      inputRef.current?.focus();
    }
  }, [gameState, feedback, currentItem]);

  const handleGuess = useCallback(
    (e) => {
      e.preventDefault();
      if (!guess.trim() || feedback || gameState !== 'playing') return;

      if (isCorrect(guess, currentItem)) {
        // ── Correct ───────────────────────────────────────────
        setFeedback('correct');
        const newScore = score + CONFIG.POINTS_PER_CORRECT;
        setScore(newScore);
        setGuess('');

        setTimeout(() => {
          setFeedback(null);
          const newUsed = [...usedIds, currentItem.id];
          let next = pickItem(theme, newUsed);

          if (!next) {
            // All items guessed — start a new round with reshuffled pool
            const resetUsed = [currentItem.id];
            setUsedIds(resetUsed);
            setRound((r) => r + 1);
            next = pickItem(theme, resetUsed);
          } else {
            setUsedIds(newUsed);
          }

          setCurrentItem(next);
        }, CONFIG.FEEDBACK_DURATION_MS);
      } else {
        // ── Wrong ─────────────────────────────────────────────
        setFeedback('wrong');
        setTimeout(() => setGameState('gameover'), CONFIG.FEEDBACK_DURATION_MS);
      }
    },
    [guess, feedback, gameState, currentItem, score, usedIds, theme],
  );

  // ── Game Over screen ───────────────────────────────────────────────────
  if (gameState === 'gameover') {
    return (
      <GameOver
        score={score}
        lastItem={currentItem}
        onPlayAgain={() => {
          setGameState('playing');
          setScore(0);
          setUsedIds([]);
          setRound(1);
          setFeedback(null);
          setGuess('');
          setCurrentItem(pickItem(theme, []));
        }}
        onHome={onHome}
      />
    );
  }

  // ── Playing screen ─────────────────────────────────────────────────────
  return (
    <div className="game-screen">
      {/* HUD bar */}
      <header className="game-hud">
        <button className="hud-home-btn" onClick={onHome} title="Back to home">
          ← Home
        </button>
        <div className="hud-center">
          <span className="hud-theme">{theme.emoji} {theme.label}</span>
          {round > 1 && (
            <span className="hud-round">Round {round}</span>
          )}
        </div>
        <div className="hud-score">
          Score: <strong>{score}</strong>
        </div>
      </header>

      {/* 3-D canvas area */}
      <div className="canvas-wrapper">
        <ThreeRenderer item={currentItem} />

        {/* Correct / wrong flash overlay */}
        {feedback && (
          <div className={`feedback-overlay feedback-overlay--${feedback}`}>
            {feedback === 'correct'
              ? `✓ Correct!  +${CONFIG.POINTS_PER_CORRECT}`
              : '✗ Wrong!'}
          </div>
        )}
      </div>

      {/* Guess input */}
      <div className="guess-area">
        <p className="guess-prompt">What is this object?</p>
        <form className="guess-form" onSubmit={handleGuess}>
          <input
            ref={inputRef}
            type="text"
            className="guess-input"
            placeholder="Type your guess and press Enter…"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={!!feedback}
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="guess-submit"
            disabled={!!feedback}
          >
            Guess
          </button>
        </form>
      </div>
    </div>
  );
}
