import { Card,Rank, } from 'bee52';
const { RANKS, rankVal, } = Rank;

const { rank, } = Card;

export const rankDiff = a => b => rankVal(rank(a)) - rankVal(rank(b));
export const rankOrder = (a,b) => rankDiff(a)(b);
export const rankSort = cards => cards.sort(rankDiff);

export const isAdj = c0 => c1 => Math.abs(rankDiff(c0)(c1)) === 1;
