import React, { useEffect } from 'react';
import './GameBoard.scss';
import { useGameStore } from '../../stores/useGameStore';
import Header from '../Header/Header';
import PlayerBoard from '../PlayerBoard/PlayerBoard';

// Main GameBoard component that orchestrates the overall game view and logic
const GameBoard = () => {
  const winner = useGameStore((store) => store.winner);
  const draw = useGameStore((store) => store.draw);
  const resetGame = useGameStore((store) => store.resetGame);

  // useEffect hook to handle automatic game reset after a game ends (win or draw)
  useEffect(() => {
    let resetTimer;

    // Set a timeout to reset the game 5 seconds after it ends
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
