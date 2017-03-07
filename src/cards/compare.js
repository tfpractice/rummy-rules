import { Card,Rank, } from 'bee52';
import { adjRanks,hasRank,hasSuit,next,prev, sameSuit, } from './card';
const { RANKS, rankVal, nextRank, prevRank, } = Rank;

const { rank, } = Card;

export const rankDiff = a => b => rankVal(rank(a)) - rankVal(rank(b));
export const rankOrder = (a,b) => rankDiff(a)(b);
export const rankSort = cards => cards.sort(rankDiff);

export const rankAdj = c0 => c1 => adjRanks(c0).map(hasRank).some(f => f(c1));
export const isAdj = c0 => c1 => [ sameSuit(c0), rankAdj(c0), ].every(f => f(c1));
