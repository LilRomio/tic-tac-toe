import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Tic Tac Toe</h1>
        <div className="score-board">
          <div>Player 1 (X)</div>
          <div>Score: 0:1 </div>

          <div>Player 2 (O)</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
