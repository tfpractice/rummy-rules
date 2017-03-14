import { every, map,spread, } from 'fenugreek-collections';
import { Card, Rank, } from 'bee52';

const { hasRank, rank, } = Card;
const { rankVal, } = Rank;

export const sum = (res = 0, x = 0) => res + x;

export const aceSet = cards => every(cards)(hasRank('a'));
export const aceScore = aces => spread(aces).length * 15;

export const points = r => rankVal(r) < 8 ? 5 : 10;
export const penalty = r => r === 'a' ? -15 : -1 * points(r);

export const score = cards => map(cards)(rank).map(points).reduce(sum,0);
export const scoreSet = cards => aceSet(cards) ? aceScore(cards) : score(cards);

export const total = sets => map(sets)(score).reduce(sum,0);
export const deduct = inHand => map(inHand)(rank).map(penalty).reduce(sum,0);
