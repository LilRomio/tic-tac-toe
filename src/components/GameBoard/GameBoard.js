import React, { useEffect } from 'react';
import './GameBoard.scss';
import { useGameStore } from '../../stores/useGameStore';
import Header from '../Header/Header';
import PlayerBoard from '../PlayerBoard/PlayerBoard';

const GameBoard = () => {
  const currentPlayer = useGameStore((store) => store.currentPlayer);
  const winner = useGameStore((store) => store.winner);
  const draw = useGameStore((store) => store.draw);
  const resetGame = useGameStore((store) => store.resetGame);

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
        <PlayerBoard player="X" />
        <PlayerBoard player="O" />
      </div>
    </div>
  );
};

export default GameBoard;
