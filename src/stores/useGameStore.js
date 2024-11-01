import { create } from 'zustand';
import { getWinningCombination } from '../utilities/getWinningCombination';

export const useGameStore = create((set) => ({
  board: Array(9).fill(''),
  currentPlayer: 'X',
  winner: null,
  winningCombo: null,
  draw: false,
  scores: { X: 0, O: 0 },
  messages: [],

  sendMessage: (player, text) =>
    set((state) => ({
      messages: [...state.messages, { player, text, timestamp: new Date().toLocaleTimeString() }],
    })),

  chooseSquare: (index) =>
    set((state) => {
      if (state.winner || state.draw || state.board[index] !== '') return;

      const updatedBoard = state.board.map((val, i) => (i === index ? state.currentPlayer : val));
      const winningCombo = getWinningCombination(updatedBoard);

      if (winningCombo) {
        return {
          board: updatedBoard,
          winner: state.currentPlayer,
          winningCombo: winningCombo,
          scores: {
            ...state.scores,
            [state.currentPlayer]: state.scores[state.currentPlayer] + 1,
          },
        };
      }

      if (updatedBoard.every((square) => square !== '')) {
        return { board: updatedBoard, draw: true };
      }

      return {
        board: updatedBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }),

  resetGame: () =>
    set({
      board: Array(9).fill(''),
      currentPlayer: 'X',
      winner: null,
      winningCombo: null,
      draw: false,
    }),

  resetAll: () =>
    set({
      board: Array(9).fill(''),
      currentPlayer: 'X',
      winner: null,
      winningCombo: null,
      draw: false,
      scores: { X: 0, O: 0 },
    }),
}));
