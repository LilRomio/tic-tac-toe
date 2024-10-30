import React from 'react';
import './Square.scss';

const Square = ({ chooseSquare, val }) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
};

export default Square;
