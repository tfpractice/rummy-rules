import { Deck, } from 'bee52';
import { append, } from 'fenugreek-collections';
import { deduct, total, } from '../score';
import { hand, setHand, sets, setSets, } from './data';

const { add, drop, } = Deck;

export const addHand = (...cards) => p => setHand(add(...cards)(hand(p)))(p); 

export const scrap = (...cards) => p => setHand(drop(...cards)(hand(p)))(p); 

export const draw = amt => deck => p => addHand(...Deck.draw(amt)(deck))(p);

export const drawTo = c => deck => p => addHand(...Deck.drawTo(c)(deck))(p);

export const play = set => p => setSets(append(sets(p))(set))(scrap(...set)(p));

export const score = p => total(sets(p));
export const final = p => total(sets(p)) + deduct(hand(p));
