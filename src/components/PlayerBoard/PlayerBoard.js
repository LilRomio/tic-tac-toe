import React from 'react';
import Square from '../Square/Square';
import './PlayerBoard.scss';
import WinningLine from '../WinningLine/WinningLine';
import { getWinnerMessages } from '../../utilities/getWinnerMessages';
import { useGameStore } from '../../stores/useGameStore';

// PlayerBoard component represents the game board for each player
const PlayerBoard = ({ player }) => {
  // Access the current player, winner, and draw state from the game store
  const currentPlayer = useGameStore((store) => store.currentPlayer);
  const winner = useGameStore((store) => store.winner);
  const draw = useGameStore((store) => store.draw);
  // Determine if the current board is active based on player turn and game state
  const isActive = currentPlayer === player && !winner && !draw;
  // Get appropriate message and CSS class based on game state (win, lose, draw, or turn) using a utility function
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
