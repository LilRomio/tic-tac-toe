import { useGameStore } from '../../stores/useGameStore';
import './WinningLine.scss';
import { WINNING_LINE_CLASSES } from './winningLineClasses';

function WinningLine() {
  const winningCombo = useGameStore((store) => store.winningCombo);

  const winningLineClass = WINNING_LINE_CLASSES[winningCombo] ?? '';

  return <div className={`line ${winningLineClass}`}></div>;
}

export default WinningLine;
