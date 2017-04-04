import { filter, first, map, spread, } from 'fenugreek-collections';
import { Deck, } from 'bee52';
import { addHand, matches, scrap, update, xMatches, } from '../../player';
import { active, discard, next, players, setPlayers as setP, } from '../data';
import { disDel, drop, } from './discard';
import { deckNext, shiftDk, } from './deck';

const { add, drop: dropD, drawTo: upTo, rest, } = Deck;

export const isActive = g => p => matches(active(g))(p);

export const rotate = arr => first(arr) ? [ ...rest(arr), first(arr), ] : [];
export const turn = g => setP(rotate(players(g)))(g);

export const hasPlr = p => g => players(g).some(matches(p));
export const mendPlr = p => g => setP(players(g).map(update(p)))(g);
export const pushPlr = p => g => setP(players(g).concat(p))(g);

export const addPlr = p => g => hasPlr(p)(g) ? mendPlr(p)(g) : pushPlr(p)(g);
export const rmPlr = p => g => setP(filter(players(g))(xMatches(p)))(g);

export const claimCards = (...cards) => p => g => addPlr(addHand(...cards)(p))(g); 
export const scrapCards = (...cards) => p => g => addPlr(scrap(...cards)(p))(g); 

export const deckDraw = p => g => 
  isActive(g)(p) ? claimCards(deckNext(g))(p)(shiftDk(g)) : g;
  
export const disDraw = (...cards) => p => g =>  
isActive(g)(p) ? claimCards(...cards)(p)(disDel(...cards)(g)) : g;

export const drawTo = c => p => g => disDraw(...upTo(c)(discard(g)))(p)(g); 
  
export const dropCards = (...cards) => p => g =>
  addPlr(scrap(...cards)(p))(drop(...cards)(g)); 

export const pdisDraw = (...cards) => p => g => 
  isActive(g)(p) ? claimCards(...cards)(p)(disDel(...cards)(g)) : g;

export const claim = (...cards) => g => claimCards(...cards)(active(g))(g);
