import { Deck, } from 'bee52';
import { claim, } from './players';
import { deck, next,rest, setDeck, } from '../data';

const { drop, add, } = Deck;

export const shiftDk = game => setDeck(rest(game))(game);
export const deckNext = g => Deck.next(deck(g));

export const deckDel = (...cards) => g => setDeck(drop(...cards)(deck(g)))(g);
export const deckAdd = (...cards) => g => setDeck(add(...cards)(deck(g)))(g);

export const draw = g => claim(next(g))(shiftDk(g));
