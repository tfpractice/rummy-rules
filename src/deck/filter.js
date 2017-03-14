import { filter, spread, } from 'fenugreek-collections';
import { Card, Deck, diffSuit, } from 'bee52';
import { rankAdj, suitAdj, } from '../compare';

const { exclude, bySuit, byRank,contains, } = Deck;
const { suit, rank, } = Card;

export const byAdj = c => arr => filter(arr)(rankAdj(c));
export const bySet = c => arr => filter(arr)(suitAdj(c));

export const hasMatch = card => arr => contains(spread(arr))(card);
