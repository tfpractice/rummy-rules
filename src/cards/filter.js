import { Card, Filter, } from 'bee52';
import { isAdj, suitAdj, } from './compare';
const { sameSuit, } = Card;

export const { byRank, bySuit, } = Filter;
export const byAdj = arr => c => arr.filter(isAdj(c));
export const bySAdj = arr => c => arr.filter(suitAdj(c));

// export const bySuit = arr => c=> arr.filter(sameSuit(c))
