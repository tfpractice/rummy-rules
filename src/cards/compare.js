import { Card,Rank, } from 'bee52';
const { RANKS, rankVal, } = Rank;

// const { bySuit, byRank, } = Filter;
const { rank, } = Card;

// const { nextRank,rankVal, } = Rank;

export const rankDiff = a => b => rankVal(rank(a)) - rankVal(rank(b));
export const rankOrder = (a,b) => rankVal(rank(a)) - rankVal(rank(b));
export const rankSort = cards => cards.sort(rankDiff);

// export const nextBin = (cards,b) => hasNext(b)(cards);
export const isAdj = c0 => c1 => Math.abs(rankDiff(c0)(c1)) === 1;

// export const sequence = cards => c => cards.filter(isAdj(c)).concat(c).sort(rankDiff);
