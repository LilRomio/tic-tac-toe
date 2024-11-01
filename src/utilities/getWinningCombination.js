// A help function to check for the winning combinations

import { WINNING_COMBINATIONS } from '../constants/winningCombinations';

export const getWinningCombination = (board) => {
  return WINNING_COMBINATIONS.find(
    ([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c] && board[a]
  );
};
