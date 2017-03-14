import { Deck, } from 'bee52';
import { deduct,total, } from '../score';
import { hand,plays,setHand,setPlays, } from './data';

const { addCards, removeCards, } = Deck;

export const draw = amt => deck => p => 
  setHand(addCards(...Deck.draw(amt)(deck))(hand(p)))(p);

export const drawTo = c => deck => p => 
  setHand(addCards(...Deck.drawTo(c)(deck))(hand(p)))(p);

export const discard = (...cards) => p => 
  setHand(removeCards(...cards)(hand(p)))(p);

export const play = (...cards) => p => setPlays([ ...plays(p),cards, ])(p);

export const score = p => total(plays(p));
export const final = p => total(plays(p)) + deduct(hand(p));
