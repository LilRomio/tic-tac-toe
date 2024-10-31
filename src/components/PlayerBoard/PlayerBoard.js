import React from 'react';
import Square from '../Square/Square';
import './PlayerBoard.scss';
import WinningLine from '../WinningLine/WinningLine';
import { getWinnerMessages } from '../../utilities/getWinnerMessages';
import { useGameStore } from '../../stores/useGameStore';

const PlayerBoard = ({ player }) => {
  const currentPlayer = useGameStore((store) => store.currentPlayer);
  const winner = useGameStore((store) => store.winner);
  const draw = useGameStore((store) => store.draw);
  const isActive = currentPlayer === player && !winner && !draw;

  const { messageClass, message } = getWinnerMessages(winner, player, draw, currentPlayer);

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
