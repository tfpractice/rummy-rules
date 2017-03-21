import { Deck, } from 'bee52';
import { append, spread, } from 'fenugreek-collections';
import { isFull, } from '../sets';
import { deduct, total, } from '../score';
import { copy, hand, setHand, sets, setSets, } from './data';

const { add, drop, } = Deck;

export const addHand = (...cards) => p => setHand(add(...cards)(hand(p)))(p); 

export const scrap = (...cards) => p => setHand(drop(...cards)(hand(p)))(p); 

export const draw = amt => deck => p => addHand(...Deck.draw(amt)(deck))(p);

export const drawTo = c => deck => p => addHand(...Deck.drawTo(c)(deck))(p);

export const addSet = s => p => setSets(append(sets(p))((s)))(scrap(...s)(p));
export const playBin = (p,set) => addSet(set)(p);
export const addSets = (...sets) => p => sets.map(spread).reduce(playBin, p);

// export const spreadType= set=> isFull(set?)

// export const addWhole = set=> isFull(set)? addSet(set)(p):
// export const addWhole = set=>setSets(append(sets(p))((s)))(scrap(...s)(p));
// export const addPartial = set=>setSets(flatten(sets(p))((s)))(scrap(...s)(p));

export const matches = next => p => next.id === p.id;
export const update = next => p => matches(next)(p) ? copy(next) : p;

export const score = p => total(sets(p));
export const final = p => total(sets(p)) + deduct(hand(p));
