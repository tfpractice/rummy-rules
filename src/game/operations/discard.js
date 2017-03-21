import { Deck, } from 'bee52';
import { discard , next, setDiscard as setDs, } from '../data';
import { claim, } from './players';
import { deckDel, } from './deck';

const { add, drop: dropD,drawTo: upTo, } = Deck;

export const disDel = (...cards) => g => 
  setDs(dropD(...cards)(discard(g)))(deckDel(...cards)(g));
  
export const disAdd = (...cards) => g =>
  setDs(add(...cards)(discard(g)))(deckDel(...cards)(g));

export const drop = (...cards) => g => disAdd(...cards)(g);
export const dropNext = g => drop(next(g))(g);

export const disDraw = (...cards) => g => claim(...cards)(disDel(...cards)(g));
export const drawTo = card => g => disDraw(...upTo(card)(discard(g)))(g);
