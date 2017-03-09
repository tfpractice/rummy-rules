import { Rank, } from 'bee52';
import { spread, } from 'fenugreek-collections';
import { hasRank, rank, } from './cards/card';
const { rankVal, } = Rank;

export const sum = (res = 0, x) => res + x;

export const allAces = cards => spread(cards).every(hasRank('a'));
export const aceScore = aces => spread(aces).length * 15;

export const points = r => rankVal(r) < 8 ? 5 : 10;
export const penalty = r => r === 'a' ? -15 : -1 * points(r);

export const score = cards => spread(cards).map(rank).map(points).reduce(sum,0);
export const scoreSet = cards => allAces(cards) ? aceScore(cards) : score(cards);

export const total = sets => spread(sets).map(score).reduce(sum,0);
export const deductions = inHand => inHand.map(rank).map(penalty).reduce(sum,0);
