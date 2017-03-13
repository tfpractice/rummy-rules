import { Card,Compare, } from 'bee52';
const { adjRanks,hasRank, rank, } = Card;

const { sameRank, diffSuit, sameSuit, } = Compare;

export const rankAdj = c0 => c1 => adjRanks(c0).map(hasRank).some(f => f(c1));
export const suitAdj = c0 => c1 => [ diffSuit(c0), sameRank(c0), ].every(f => f(c1));
export const isAdj = c0 => c1 => [ sameSuit(c0), rankAdj(c0), ].every(f => f(c1));
