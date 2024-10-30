'use client';

import React, { useState } from 'react';
import './GameBoard.scss';
import Square from './Square';
import { checkWinner } from '../CheckWinner';
import Header from '../Header/Header';
import WinningLine from '../WinningLine/WinningLine';

const GameBoard = (winningLineClass) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const chooseSquare = (index) => {
    if (board[index] === '' && !winner) {
      const updatedBoard = board.map((val, i) => (i === index ? currentPlayer : val));
      setBoard(updatedBoard);

      const gameWinner = checkWinner(updatedBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        updateScore(gameWinner);
      } else {
        setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
      }
    }
  };

  const updateScore = (winningPlayer) => {
    setScores((prevScores) => ({
      ...prevScores,
      [winningPlayer]: prevScores[winningPlayer] + 1,
    }));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="game">
      <Header resetGame={resetGame} scores={scores} currentPlayer={currentPlayer} />

      <div className="content">
        {/* Player X's Board */}
        <div className="player-board">
          <div className="status-message">
            {winner
              ? winner === 'X'
                ? 'You Win!'
                : 'You Lose!'
              : currentPlayer === 'X'
              ? 'Your Turn'
              : "Opponent's Turn"}
          </div>
          <div className="board">
            {[0, 1, 2].map((row) => (
              <div className="row" key={row}>
                {[0, 1, 2].map((col) => {
                  const index = row * 3 + col;
                  return (
                    <Square
                      key={index}
                      chooseSquare={() => currentPlayer === 'X' && chooseSquare(index)}
                      val={board[index]}
                      disabled={currentPlayer !== 'X' || winner}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Player O's Board */}
        <div className="player-board">
          <div className="status-message">
            {winner
              ? winner === 'O'
                ? 'You Win!'
                : 'You Lose!'
              : currentPlayer === 'O'
              ? 'Your Turn'
              : "Opponent's Turn"}
          </div>
          <div className="board">
            {[0, 1, 2].map((row) => (
              <div className="row" key={row}>
                {[0, 1, 2].map((col) => {
                  const index = row * 3 + col;
                  return (
                    <Square
                      key={index}
                      chooseSquare={() => currentPlayer === 'O' && chooseSquare(index)}
                      val={board[index]}
                      disabled={currentPlayer !== 'O' || winner}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <WinningLine winningLineClass={winningLineClass} />
    </div>
  );
};

export default GameBoard;
