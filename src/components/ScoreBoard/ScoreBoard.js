import React from 'react';
import './ScoreBoard.scss';
import { useGameStore } from '../../stores/useGameStore';

// ScoreBoard component displays the current scores for both players
const ScoreBoard = () => {
  const scores = useGameStore((store) => store.scores);

  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <div className="player">
        <div className="x-score">
          <h3>Player X</h3>
        </div>
        <h1 className="player-score _x">{xScore}</h1>
      </div>

      <div className="player">
        <div className=" o-score">
          <h3>Player O</h3>
        </div>
        <h1 className="player-score _o">{oScore}</h1>
      </div>
    </div>
  );
};

export default ScoreBoard;
