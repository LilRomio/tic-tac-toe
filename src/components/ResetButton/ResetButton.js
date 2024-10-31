import React from 'react';

const ResetButton = ({ resetGame }) => {
  return (
    <button onClick={resetGame} className="reset-button">
      Reset
    </button>
  );
};

export default ResetButton;
