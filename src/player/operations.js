import { Deck, } from 'bee52';
import { append, map, spread, } from 'fenugreek-collections';
import { xMatches as diffSet, } from '../sets';
import { hand, setHand, sets, setSets, } from './data';

const { add, drop, } = Deck;

export const addHand = (...cards) => p => setHand(add(...cards)(hand(p)))(p); 
export const delHand = (...cards) => p => setHand(drop(...cards)(hand(p)))(p); 
export const scrap = delHand;

export const delSet = s => p => setSets(sets(p).filter(diffSet(s)))(p);
export const addSet = s => p => setSets(append(sets(p))(s))(scrap(...s)(p));

export const playBin = (p, set) => addSet(set)(p);

export const addSets = (...pSets) => p => map(pSets)(spread).reduce(playBin, p);
export const draw = amt => deck => p => addHand(...Deck.draw(amt)(deck))(p);
export const drawTo = c => deck => p => addHand(...Deck.drawTo(c)(deck))(p);
