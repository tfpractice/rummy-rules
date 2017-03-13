import { filter, spread, } from 'fenugreek-collections';
import { Card, Deck, } from 'bee52';
import { isAdj,rankAdj, } from '../compare';

const { exclude, bySuit, byRank,contains, } = Deck;
const { suit, rank, } = Card;

export const byAdj = arr => c => filter(arr)(isAdj(c));
export const byEq = arr => c => byRank(rank(c))(exclude(c)(arr));

export const bySAdj = arr => c => bySuit(suit(c))(exclude(c)(arr));

export const byAdjR = arr => c => bySuit(suit(c))(arr).filter(rankAdj(c));
export const hasMatch = card => arr => contains(spread(arr))(card);
