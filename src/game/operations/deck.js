import { Deck, } from 'bee52';
import { actAdd, } from './players';
import { deck, next, rest,setDeck, } from '../data';

const { drop, } = Deck;

export const shiftDk = game => setDeck(rest(game))(game);
export const rmDeck = (...cards) => g => setDeck(drop(...cards)(deck(g)))(g);
export const draw = g => actAdd(next(g))(shiftDk(g));
export const drawNext = g => actAdd(next(g))(shiftDk(g));
