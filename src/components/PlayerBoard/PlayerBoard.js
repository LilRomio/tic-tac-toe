import React from 'react';
import Square from '../Square/Square';
import './PlayerBoard.scss';
import WinningLine from '../WinningLine/WinningLine';

const PlayerBoard = ({ player, isActive, currentPlayer, winner, draw }) => {
  let message = '';
  let messageClass = '';

  if (winner) {
    message = winner === player ? 'You Win!' : 'You Lose!';
    messageClass = winner === player ? 'win' : 'lose';
  } else if (draw) {
    message = "It's a Draw!";
    messageClass = 'draw';
  } else {
    // Display turn message if game is ongoing
    message = isActive ? 'Your Turn' : "Opponent's Turn";
    messageClass = 'turn';
  }

  return (
    <div className={`player-board ${isActive ? 'active' : 'inactive'}`}>
      <div className={`status-message ${messageClass}`}>{message}</div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className="row" key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return <Square key={index} index={index} isDisabled={!isActive} />;
            })}
          </div>
        ))}
        <WinningLine />
      </div>
    </div>
  );
};

export default PlayerBoard;
