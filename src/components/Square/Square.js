import React from 'react';
import { useGameStore } from '../../stores/useGameStore';
import './Square.scss';

// Square component represents an individual cell on the game board
const Square = ({ index, isDisabled }) => {
  // Access the current value of this square from the game board state
  const val = useGameStore((state) => state.board[index]);
  // Access the chooseSquare function to handle square clicks
  const chooseSquare = useGameStore((state) => state.chooseSquare);

  return (
    <div className={`square ${isDisabled ? 'disabled' : ''}`} onClick={() => !isDisabled && chooseSquare(index)}>
      {val}
    </div>
  );
};

export default Square;
