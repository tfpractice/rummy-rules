import { Deck, } from 'bee52';
import { claim, } from './players';
import { deck, next,rest, setDeck, } from '../data';

const { drop, } = Deck;

export const shiftDk = game => setDeck(rest(game))(game);
export const deckDel = (...cards) => g => setDeck(drop(...cards)(deck(g)))(g);
export const deckDrop = (...cards) => g => setDeck(drop(...cards)(deck(g)))(g);
export const draw = g => claim(next(g))(shiftDk(g));
export const deckDraw = g => claim(next(g))(shiftDk(g));
export const drawNext = g => claim(next(g))(shiftDk(g));
