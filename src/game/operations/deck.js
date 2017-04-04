import { Deck, } from 'bee52';
import { claim,claimCards, isActive, } from './players';
import { deck, next,rest, setDeck, } from '../data';

const { drop, add, } = Deck;

export const shiftDk = game => setDeck(rest(game))(game);
export const deckDel = (...cards) => g => setDeck(drop(...cards)(deck(g)))(g);
export const deckAdd = (...cards) => g => setDeck(add(...cards)(deck(g)))(g);
export const deckDrop = (...cards) => g => setDeck(drop(...cards)(deck(g)))(g);

export const draw = g => claim(next(g))(shiftDk(g));
export const deckDraw = p => g => 
  isActive(g)(p) ? claimCards(next(g))(p)(shiftDk(g)) : g;
  
export const drawNext = g => claim(next(g))(shiftDk(g));
