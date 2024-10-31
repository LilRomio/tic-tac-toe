import { WINNING_COMBINATIONS } from '../../constants/winningCombinations';

export const WINNING_LINE_CLASSES = {
  [WINNING_COMBINATIONS[0]]: 'line-row-1',
  [WINNING_COMBINATIONS[1]]: 'line-row-2',
  [WINNING_COMBINATIONS[2]]: 'line-row-3',
  [WINNING_COMBINATIONS[3]]: 'line-column-1',
  [WINNING_COMBINATIONS[4]]: 'line-column-2',
  [WINNING_COMBINATIONS[5]]: 'line-column-3',
  [WINNING_COMBINATIONS[6]]: 'line-diagonal-1',
  [WINNING_COMBINATIONS[7]]: 'line-diagonal-2',
};
