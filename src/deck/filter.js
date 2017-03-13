import { filter,spread, } from 'fenugreek-collections';
import { Card, Deck, } from 'bee52';
import { isAdj, } from '../compare';

const { exclude, bySuit, contains, } = Deck;
const { suit, } = Card;

export const byAdj = arr => c => filter(arr)(isAdj(c));
export const bySAdj = arr => c => bySuit(suit(c))(exclude(c)(arr));

export const hasMatch = card => arr => contains(spread(arr))(card);
