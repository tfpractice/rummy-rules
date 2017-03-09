import { spread, } from 'fenugreek-collections';
import { isAdj, isMatch,suitAdj, } from './compare';

export const byAdj = arr => c => arr.filter(isAdj(c));
export const bySAdj = arr => c => arr.filter(suitAdj(c));

export const hasMatch = card => arr => spread(arr).some(isMatch(card));
