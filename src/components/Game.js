'use client';

import React from 'react';
import GameBoard from './GameBoard/GameBoard';
import Header from './Header/Header';

const Game = () => {
  return (
    <div>
      <Header />
      <GameBoard />
    </div>
  );
};

export default Game;
