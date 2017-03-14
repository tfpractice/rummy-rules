import { Deck, } from 'bee52';
import { hand,plays,setHand,setPlays, } from './data';

const { addCards, removeCards, } = Deck;

export const draw = amt => deck => p => 
  setHand(addCards(...Deck.draw(amt)(deck))(hand(p)))(p);

export const drawTo = c => deck => p => 
  setHand(addCards(...Deck.drawTo(c)(deck))(hand(p)))(p);

export const discard = (...cards) => p => 
  setHand(removeCards(...cards)(hand(p)))(p);

export const play = (...cards) => p => 
  setPlays(plays(p).concat(cards))(p);
