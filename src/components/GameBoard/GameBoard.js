'use client';

import React, { useState } from 'react';
import './GameBoard.scss';
import { checkWinner } from '../CheckWinner';
import Header from '../Header/Header';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import WinningLine from '../WinningLine/WinningLine';

const GameBoard = (winningLineClass) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const chooseSquare = (index) => {
    if (board[index] === '' && !winner && !draw) {
      const updatedBoard = board.map((val, i) => (i === index ? currentPlayer : val));
      setBoard(updatedBoard);

      const gameWinner = checkWinner(updatedBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        updateScore(gameWinner);
      } else if (updatedBoard.every((square) => square !== '')) {
        setDraw(true);
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
    setDraw(false);
  };

  return (
    <div className="game">
      <Header resetGame={resetGame} scores={scores} currentPlayer={currentPlayer} />

      <div className="content">
        {/* Player X's Board */}
        <PlayerBoard
          player="X"
          currentPlayer={currentPlayer}
          board={board}
          chooseSquare={chooseSquare}
          winner={winner}
          draw={draw}
        />

        {/* Player O's Board */}
        <PlayerBoard
          player="O"
          currentPlayer={currentPlayer}
          board={board}
          chooseSquare={chooseSquare}
          winner={winner}
          draw={draw}
        />
      </div>

      <WinningLine winningLineClass={winningLineClass} />
    </div>
  );
};

export default GameBoard;
