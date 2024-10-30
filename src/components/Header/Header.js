import React from 'react';
import './Header.scss';

const Header = ({ resetGame, scores }) => {
  return (
    <header className="header">
      <h1>Tic Tac Toe</h1>
      <div className="score-board">
        <div className="board-content">
          <div>Player 1 </div>
          <div className="score">
            Score: <span>{scores.X}</span>:<span>{scores.O}</span>
          </div>
          <button onClick={resetGame} className="reset-button">
            Reset
          </button>
          <div>Player 2 </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
