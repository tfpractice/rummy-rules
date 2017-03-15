import { Deck, } from 'bee52';
import { deduct,total, } from '../score';
import { hand,plays,setHand,setPlays, } from './data';

const { addCards, removeCards: rmCards, } = Deck;

export const add = (...cards) => p => setHand(addCards(...cards)(hand(p)))(p); 

export const remove = (...cards) => p => setHand(rmCards(...cards)(hand(p)))(p); 
export const scrap = (...cards) => p => setHand(rmCards(...cards)(hand(p)))(p); 

export const draw = amt => deck => p => add(...Deck.draw(amt)(deck))(p);

export const drawTo = c => deck => p => add(...Deck.drawTo(c)(deck))(p);

export const discard = (...cards) => p => scrap(...cards)(p);

export const play = (...cards) => p => setPlays([ ...plays(p),cards, ])(p);

export const score = p => total(plays(p));
export const final = p => total(plays(p)) + deduct(hand(p));
