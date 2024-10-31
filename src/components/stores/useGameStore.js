import { create } from 'zustand';

export const useGameStore = create((set) => ({
  board: Array(9).fill(''),
  currentPlayer: 'X',
  winner: null,
  draw: false,
  scores: { X: 0, O: 0 },

  chooseSquare: (index) =>
    set((state) => {
      if (state.board[index] === '' && !state.winner && !state.draw) {
        const updatedBoard = state.board.map((val, i) => (i === index ? state.currentPlayer : val));

        const gameWinner = checkWinner(updatedBoard);
        if (gameWinner) {
          return {
            board: updatedBoard,
            winner: gameWinner,
            scores: {
              ...state.scores,
              [gameWinner]: state.scores[gameWinner] + 1,
            },
          };
        } else if (updatedBoard.every((square) => square !== '')) {
          return { board: updatedBoard, draw: true };
        } else {
          return {
            board: updatedBoard,
            currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
          };
        }
      }
    }),

  resetGame: () =>
    set({
      board: Array(9).fill(''),
      currentPlayer: 'X',
      winner: null,
      draw: false,
    }),

  resetAll: () =>
    set({
      board: Array(9).fill(''),
      currentPlayer: 'X',
      winner: null,
      draw: false,
      scores: { X: 0, O: 0 },
    }),
}));

const checkWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    winningCombinations
      .map(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c] && board[a])
      .find(Boolean) || null
  );
};
