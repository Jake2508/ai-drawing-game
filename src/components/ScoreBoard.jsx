/**
 * ScoreBoard
 *
 * Reads the top scores from localStorage and renders them as a ranked list.
 * Renders nothing meaningful when no scores are saved yet.
 *
 * Props
 *   compact — if true, renders a slimmer layout suitable for the home page
 */
import { getHighScores } from '../utils/highScores';
import { CONFIG } from '../config/gameConfig';

export default function ScoreBoard({ compact = false }) {
  const scores = getHighScores();

  if (scores.length === 0) {
    return (
      <div className="scoreboard scoreboard--empty">
        <p>No high scores yet — play to set one!</p>
      </div>
    );
  }

  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className={`scoreboard${compact ? ' scoreboard--compact' : ''}`}>
      <h3 className="scoreboard__title">Top {CONFIG.TOP_SCORES_COUNT} Scores</h3>
      <ol className="scoreboard__list">
        {scores.map((entry, i) => (
          <li key={i} className="scoreboard__entry">
            <span className="score-medal">{medals[i] ?? `#${i + 1}`}</span>
            <span className="score-name">{entry.name}</span>
            <span className="score-pts">{entry.score} pts</span>
            <span className="score-date">{entry.date}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
