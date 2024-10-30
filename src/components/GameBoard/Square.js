import React from 'react';
import './Square.scss';

const Square = ({ pickedSquare, val }) => {
  return (
    <div className="square" onClick={pickedSquare}>
      {val}
    </div>
  );
};

export default Square;
