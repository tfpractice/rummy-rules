import { Deck, } from 'bee52';
import { actClaim, } from './players';
import { deck, setDeck as setDk, } from '../data';

const { drop, add, rest, next, } = Deck;

export const deckNext = g => next(deck(g));
export const shiftDk = game => setDk(rest(deck(game)))(game);

export const deckDel = (...cards) => g => setDk(drop(...cards)(deck(g)))(g);
export const deckAdd = (...cards) => g => setDk(add(...cards)(deck(g)))(g);

export const actDraw = g => actClaim(deckNext(g))(shiftDk(g));
