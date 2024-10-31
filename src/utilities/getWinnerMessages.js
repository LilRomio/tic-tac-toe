'use client';

export const getWinnerMessages = (winner, player, draw, currentPlayer) => {
  let message = '';
  let messageClass = '';

  if (winner) {
    message = winner === player ? 'You Win!' : 'You Lose!';
    messageClass = winner === player ? 'win' : 'lose';
  } else if (draw) {
    message = "It's a Draw!";
    messageClass = 'draw';
  } else {
    message = currentPlayer === player ? 'Your Turn' : "Opponent's Turn";
    messageClass = 'turn';
  }
  return {
    message,
    messageClass,
  };
};
