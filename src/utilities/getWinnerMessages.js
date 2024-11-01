// A help function to display message

export const getWinnerMessages = (winner, player, draw, currentPlayer) => {
  let message = '';
  let messageClass = '';

  if (winner) {
    message =
      winner === player ? ['You Win!', ' ', 'Game will restart soon'] : ['You Lose!', ' ', 'Game will restart soon'];
    messageClass = winner === player ? 'win' : 'lose';
  } else if (draw) {
    message = ["It's a Draw!", ' ', 'Game will restart soon'];
    messageClass = 'draw';
  } else {
    message = currentPlayer === player ? 'Your Turn' : 'Wait your opponent';
    messageClass = 'turn';
  }
  return {
    message,
    messageClass,
  };
};
