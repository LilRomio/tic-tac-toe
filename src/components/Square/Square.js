import React from 'react';
import { useGameStore } from '../../stores/useGameStore';
import './Square.scss';

const Square = ({ index, isDisabled }) => {
  const val = useGameStore((state) => state.board[index]);
  const chooseSquare = useGameStore((state) => state.chooseSquare);

  return (
    <div className={`square ${isDisabled ? 'disabled' : ''}`} onClick={() => !isDisabled && chooseSquare(index)}>
      {val}
    </div>
  );
};

export default Square;
