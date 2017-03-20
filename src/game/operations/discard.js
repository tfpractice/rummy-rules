import { Deck, } from 'bee52';
import { actAdd, } from './players';
import { discard as dPile, next, setDiscard as setDs, } from '../data';
import { rmDeck, } from './deck';

const { drop: dropD,add, } = Deck;

export const rmDs = (...cards) => g => 
  setDs(dropD(...cards)(dPile(g)))(rmDeck(...cards)(g));
  
export const addToDs = (...cards) => g =>
  setDs(add(...cards)(dPile(g)))(rmDeck(...cards)(g));
  
export const drawDs = (...cards) => g => actAdd(...cards)(rmDs(...cards)(g));

export const drop = (...cards) => g => addToDs(...cards)(g);
export const dropNext = g => drop(next(g))(g);

export const drawTo = card => g => drawDs(...Deck.drawTo(card)(dPile(g)))(g);
