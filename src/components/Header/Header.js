import React from 'react';
import { useGameStore } from '../../stores/useGameStore';
import './Header.scss';

// Header component displays the score and a reset button for the entire game
const Header = () => {
  // Access scores from the game store to display each player's score
  const scores = useGameStore((store) => store.scores);
  // Access the resetAll action to reset both the scores and the game state
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
