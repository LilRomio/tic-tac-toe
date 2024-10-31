'use client';

import React, { useEffect } from 'react';
import './GameBoard.scss';
import { useGameStore } from '../stores/useGameStore';
import Header from '../Header/Header';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import WinningLine from '../WinningLine/WinningLine';
const GameBoard = (winningLineClass) => {
  const { board, currentPlayer, winner, draw, scores, chooseSquare, resetGame, resetAll } = useGameStore();

  useEffect(() => {
    let resetTimer;

    if (winner || draw) {
      resetTimer = setTimeout(() => {
        resetGame();
      }, 5000);
    }

    return () => clearTimeout(resetTimer);
  }, [winner, draw, resetGame]);

  return (
    <div className="game">
      <Header resetGame={resetAll} scores={scores} currentPlayer={currentPlayer} />

      <div className="content">
        <PlayerBoard
          player="X"
          currentPlayer={currentPlayer}
          board={board}
          chooseSquare={chooseSquare}
          winner={winner}
          draw={draw}
        />

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
