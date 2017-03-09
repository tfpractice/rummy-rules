import { Rank, } from 'bee52';
import { spread, } from 'fenugreek-collections';
import { hasRank, rank, } from './cards/card';
const { rankVal, } = Rank;

export const allAces = cards => spread(cards).every(hasRank('a'));

export const score = r => rankVal(r) < 8 ? 5 : 10;
export const points = r => rankVal(r) < 8 ? 5 : 10;
export const penalty = r => r === 'a' ? -15 : -1 * score(r);
export const sumBin2 = (sum = 0, x) => sum + x;

export const sumBin = (sum = 0, r) => sum + score(r);
export const seqScore = cards => spread(cards).map(rank).map(score).reduce(sumBin2,0);
export const aceScore = aces => spread(aces).length * 15;

export const scoreSet = cards => allAces(cards) ? aceScore(cards) : seqScore(cards);
export const scoreSetBin = (total = 0, set) => total + scoreSet(set);
export const total = sets => spread(sets).reduce(scoreSetBin,0);

export const deductions = inHand => inHand.map(rank).map(penalty).reduce(sumBin2,0);
