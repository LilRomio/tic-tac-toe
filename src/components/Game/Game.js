'use client';

import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import Chat from '../Chat/Chat';

const Game = () => {
  return (
    <div className="container">
      <GameBoard />
      <Chat />
    </div>
  );
};

export default Game;
