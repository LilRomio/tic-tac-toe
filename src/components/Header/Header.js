'use client';

import React from 'react';
import { useGameStore } from '../../stores/useGameStore';
import './Header.scss';

const Header = () => {
  const scores = useGameStore((store) => store.scores);
  const resetAll = useGameStore((store) => store.resetAll);
  return (
    <header className="header">
      <div className="score-board">
        <div className="board-content">
          <div>Player 1 </div>
          <div className="score">
            Score: <span>{scores.X}</span>:<span>{scores.O}</span>
          </div>
          <button onClick={resetAll} className="reset-button">
            Reset Score
          </button>
          <div>Player 2 </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
