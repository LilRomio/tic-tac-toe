// PlayerBoard.js
import React from 'react';
import Square from '../Square/Square';
import './PlayerBoard.scss';

const PlayerBoard = ({ player, currentPlayer, board, chooseSquare, winner, draw }) => {
  let message = '';
  let messageClass = '';

  if (winner) {
    message = winner === player ? 'You Win!' : 'You Lose!';
    messageClass = winner === player ? 'win' : 'lose';
  } else if (draw) {
    message = "It's a Draw!";
    messageClass = 'draw';
  } else {
    message = currentPlayer === player ? 'Your Turn' : "Opponent's Turn";
    messageClass = 'turn';
  }

  return (
    <div className="player-board">
      <div className={`status-message ${messageClass}`}>{message}</div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className="row" key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Square
                  key={index}
                  chooseSquare={() => currentPlayer === player && chooseSquare(index)}
                  val={board[index]}
                  disabled={currentPlayer !== player || winner || draw}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerBoard;
