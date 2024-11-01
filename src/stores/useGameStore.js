import { create } from 'zustand';
import { getWinningCombination } from '../utilities/getWinningCombination';

export const useGameStore = create((set) => ({
  // Game board setup with 9 empty squares
  board: Array(9).fill(''),
  // Starting player
  currentPlayer: 'X',
  // Game results states
  winner: null,
  winningCombo: null,
  draw: false,
  // Score tracking for each player
  scores: { X: 0, O: 0 },
  messages: [],

  sendMessage: (player, text) =>
    set((state) => ({
      messages: [...state.messages, { player, text, timestamp: new Date().toLocaleTimeString() }],
    })),

  chooseSquare: (index) =>
    set((state) => {
      // If game is over or all squares are already filled, disable all further action
      if (state.winner || state.draw || state.board[index] !== '') return;
      // Update the board with the current player's move
      const updatedBoard = state.board.map((val, i) => (i === index ? state.currentPlayer : val));
      // Check if the move results in a winning combination
      const winningCombo = getWinningCombination(updatedBoard);
      // If there is a winner, update the state with winner, winning combination, and score
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
      // If all squares are filled and there's no winner, declare a draw
      if (updatedBoard.every((square) => square !== '')) {
        return { board: updatedBoard, draw: true };
      }
      // If the game is still ongoing, switch the current player and update the board
      return {
        board: updatedBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }),
  // Action to reset the game state without scores
  resetGame: () =>
    set({
      board: Array(9).fill(''),
      currentPlayer: 'X',
      winner: null,
      winningCombo: null,
      draw: false,
    }),
  // Action to reset the entire game state, including scores
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
