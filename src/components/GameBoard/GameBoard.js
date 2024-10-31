'use client';

import React, { useEffect } from 'react';
import './GameBoard.scss';
import { useGameStore } from '../../stores/useGameStore';
import Header from '../Header/Header';
import PlayerBoard from '../PlayerBoard/PlayerBoard';

const GameBoard = () => {
  const { currentPlayer, winner, draw, resetGame } = useGameStore();

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
      <Header />

      <div className="content">
        <PlayerBoard
          player="X"
          isActive={currentPlayer === 'X' && !winner && !draw}
          currentPlayer={currentPlayer}
          winner={winner}
          draw={draw}
        />
        <PlayerBoard
          player="O"
          isActive={currentPlayer === 'O' && !winner && !draw}
          currentPlayer={currentPlayer}
          winner={winner}
          draw={draw}
        />
      </div>
    </div>
  );
};

export default GameBoard;
