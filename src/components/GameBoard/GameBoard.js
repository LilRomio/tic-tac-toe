'use client';

import React, { useState } from 'react';
import './GameBoard.scss';
import Square from './Square';

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const chooseSquare = (index) => {
    if (board[index] === '' && currentPlayer) {
      setBoard((prevBoard) => prevBoard.map((val, i) => (i === index ? currentPlayer : val)));

      setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    }
  };

  return (
    <div className="game">
      <div className="turn-indicator">
        Current Turn: <strong>{currentPlayer}</strong>
      </div>

      <div className="content">
        <div className="player-board">
          <div className="board">
            {[0, 1, 2].map((row) => (
              <div className="row" key={row}>
                {[0, 1, 2].map((col) => {
                  const index = row * 3 + col;
                  return (
                    <Square
                      key={index}
                      chooseSquare={() => {
                        if (currentPlayer === 'X') chooseSquare(index);
                      }}
                      val={board[index]}
                      disabled={currentPlayer !== 'X'}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="player-board">
          <div className="board">
            {[0, 1, 2].map((row) => (
              <div className="row" key={row}>
                {[0, 1, 2].map((col) => {
                  const index = row * 3 + col;
                  return (
                    <Square
                      key={index}
                      chooseSquare={() => {
                        if (currentPlayer === 'O') chooseSquare(index);
                      }}
                      val={board[index]}
                      disabled={currentPlayer !== 'O'}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
