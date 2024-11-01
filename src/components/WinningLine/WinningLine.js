import { useGameStore } from '../../stores/useGameStore';
import './WinningLine.scss';
import { WINNING_LINE_CLASSES } from './winningLineClasses';

// WinningLine component renders a line over the winning combination on the board
function WinningLine() {
  // Access the winning combination from the game store for the winning squares
  const winningCombo = useGameStore((store) => store.winningCombo);
  // Determine the appropriate CSS class for the winning line based on the winning combination
  const winningLineClass = WINNING_LINE_CLASSES[winningCombo] ?? '';

  return <div className={`line ${winningLineClass}`}></div>;
}

export default WinningLine;
