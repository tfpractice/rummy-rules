import { Deck, } from 'bee52';
import { deduct,total, } from '../score';
import { hand,plays,setHand,setPlays, } from './data';
import { playable, } from '../hand';
const { add, drop, } = Deck;

export const addHand = (...cards) => p => setHand(add(...cards)(hand(p)))(p); 

export const scrap = (...cards) => p => setHand(drop(...cards)(hand(p)))(p); 

export const draw = amt => deck => p => addHand(...Deck.draw(amt)(deck))(p);

export const drawTo = c => deck => p => addHand(...Deck.drawTo(c)(deck))(p);

export const play = cards => p => playable(cards) ? 
  setPlays([ ...plays(p),cards, ])(scrap(...cards)(p)) : p;

export const score = p => total(plays(p));
export const final = p => total(plays(p)) + deduct(hand(p));
