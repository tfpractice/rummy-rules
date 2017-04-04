import { Deck, } from 'bee52';
import { discard, next, setDiscard as setDs, } from '../data';
import { claim, } from './players';
import { deckDel, } from './deck';

const { add, drop: dropD, drawTo: upTo, } = Deck;

export const shiftDs = g => setDs(Deck.rest(discard(g)))(g);
export const disNext = g => Deck.next(discard(g));

export const disDel = (...cards) => g => setDs(dropD(...cards)(discard(g)))(g);
export const disAdd = (...cards) => g => setDs(add(...cards)(discard(g)))(g);

export const drop = (...cards) => g => disAdd(...cards)(g);

export const selectTo = card => g => card ? Deck.drawTo(card)(discard(g)) : [];
export const disDelTo = card => g => disDel(...selectTo(card)(g))(g);
