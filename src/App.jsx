import { useState } from 'react';
import HomePage from './components/HomePage';
import Game from './components/Game';
import './App.css';

export default function App() {
  const [screen, setScreen]             = useState('home'); // 'home' | 'game'
  const [selectedTheme, setSelectedTheme] = useState('shapes');

  return (
    <div className="app">
      {screen === 'home' && (
        <HomePage
          onPlay={(themeId) => {
            setSelectedTheme(themeId);
            setScreen('game');
          }}
        />
      )}
      {screen === 'game' && (
        <Game
          themeId={selectedTheme}
          onHome={() => setScreen('home')}
        />
      )}
    </div>
  );
}
