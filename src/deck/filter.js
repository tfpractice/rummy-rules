import { filter, spread, } from 'fenugreek-collections';
import { Card, Deck, diffSuit, } from 'bee52';
import { isAdj,rankAdj, } from '../compare';

const { exclude, bySuit, byRank,contains, } = Deck;
const { suit, rank, } = Card;

export const byAdj = c => arr => bySuit(suit(c))(arr).filter(rankAdj(c));
export const bySet = c => arr => byRank(rank(c))(arr).filter(diffSuit(c));

export const bySAdj = arr => c => bySuit(suit(c))(exclude(c)(arr));

export const byAdjR = arr => c => bySuit(suit(c))(arr).filter(rankAdj(c));
export const hasMatch = card => arr => contains(spread(arr))(card);
