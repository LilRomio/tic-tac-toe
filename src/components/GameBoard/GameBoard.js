import React, { useEffect } from 'react';
import './GameBoard.scss';
import { useGameStore } from '../../stores/useGameStore';
import Header from '../Header/Header';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import ChatBox from '../Chat/ChatBox';

const GameBoard = () => {
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
        <div className="player-container">
          <PlayerBoard player="X" />
          <ChatBox player="Player 1" />
        </div>
        <div className="player-container">
          <PlayerBoard player="O" />
          <ChatBox player="Player 2" />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
