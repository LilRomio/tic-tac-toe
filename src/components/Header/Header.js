import React from 'react';
import './Header.scss';
import ResetButton from '../ResetButton';

const Header = ({ resetGame }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Tic Tac Toe</h1>
        <div className="score-board">
          <div>Player 1 (X)</div>
          <div>Score: 0:1 </div>
          <ResetButton resetGame={resetGame} />
          <div>Player 2 (O)</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
