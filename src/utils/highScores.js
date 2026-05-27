import { CONFIG } from '../config/gameConfig';

export function getHighScores() {
  try {
    const raw = localStorage.getItem(CONFIG.HIGH_SCORES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveHighScore(name, score) {
  const scores = getHighScores();
  scores.push({
    name:  name.trim() || 'Anonymous',
    score,
    date:  new Date().toLocaleDateString(),
  });
  scores.sort((a, b) => b.score - a.score);
  const top = scores.slice(0, CONFIG.TOP_SCORES_COUNT);
  localStorage.setItem(CONFIG.HIGH_SCORES_KEY, JSON.stringify(top));
  return top;
}

// Returns true if this score deserves a place in the top list
export function isTopScore(score) {
  if (score <= 0) return false;
  const scores = getHighScores();
  if (scores.length < CONFIG.TOP_SCORES_COUNT) return true;
  return score > scores[scores.length - 1].score;
}
