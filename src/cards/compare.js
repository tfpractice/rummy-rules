import { Card,Rank, } from 'bee52';
import { adjRanks,hasRank, sameRank, sameSuit, } from './card';

const { rankVal, } = Rank;
const { rank, } = Card;

export const diffSuit = c0 => c1 => !sameSuit(c0)(c1);
export const isMatch = c0 => c1 => [ sameRank(c0), sameSuit(c0), ].every(f => f(c1));
export const xMatch = c0 => c1 => !(isMatch(c0)(c1));

export const rankDiff = a => b => rankVal(rank(a)) - rankVal(rank(b));
export const rankOrder = (a, b) => rankDiff(a)(b);
export const rankSort = cards => cards.sort(rankOrder);

export const rankAdj = c0 => c1 => adjRanks(c0).map(hasRank).some(f => f(c1));
export const suitAdj = c0 => c1 => [ diffSuit(c0), sameRank(c0), ].every(f => f(c1));

export const isAdj = c0 => c1 => [ sameSuit(c0), rankAdj(c0), ].every(f => f(c1));
