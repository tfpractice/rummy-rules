import { filter, map, } from 'fenugreek-collections';
import { addHand, matches, scrap, update, xMatches, } from '../../player';
import { active, next, players, setPlayers as setP, } from '../data';
import { disDel, drop, } from './discard';
import { shiftDk, } from './deck';
export const rotate = ([ first, ...rem ]) => [ ...rem, first, ];

export const turn = g => setP(rotate(players(g)))(g);
export const hasPlr = p => g => players(g).some(matches(p));
export const mendPlr = p => g => setP(players(g).map(update(p)))(g);
export const pushPlr = p => g => setP(players(g).concat(p))(g);
export const addPlr = p => g => hasPlr(p)(g) ? mendPlr(p)(g) : pushPlr(p)(g);
export const rmPlr = p => g => setP(filter(players(g))(xMatches(p)))(g);

export const claimCards = (...cards) => p => g =>
  addPlr(addHand(...cards)(p))(g); 

export const dropCards = (...cards) => p => g =>
  addPlr(scrap(...cards)(p))(drop(...cards)(g)); 
  
export const isActive = g => p => matches(active(g))(p);

export const deckDraw = p => g => 
    isActive(g)(p) ? claimCards(next(g))(p)(shiftDk(g)) : g;
    
export const disDraw = p => g => 
    isActive(g)(p) ? claimCards(next(g))(p)(shiftDk(g)) : g;
    
// export const drawTo = card => g => disDraw(...upTo(card)(discard(g)))(g);

export const claim = (...cards) => g => claimCards(...cards)(active(g))(g);
