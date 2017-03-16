import { Card, diffSuit, isRankAdj, sameRank, sameSuit, } from 'bee52';
const { adjRanks,hasRank, } = Card;

export const suitAdj = c0 => c1 => [ sameRank(c0), diffSuit(c0), ].every(f => f(c1));
export const rankAdj = c0 => c1 => [ sameSuit(c0), isRankAdj(c0), ].every(f => f(c1));

export const suitAdjBin = (c0, c1) => true && suitAdj(c0)(c1);
