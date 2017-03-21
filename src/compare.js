import { diffSuit, isRankAdj, sameRank, sameSuit, } from 'bee52';

export const suitAdj = c0 => c1 => [ sameRank(c0), diffSuit(c0), ].every(f => f(c1));
export const rankAdj = c0 => c1 => [ sameSuit(c0), isRankAdj(c0), ].every(f => f(c1));
