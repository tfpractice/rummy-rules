import { filter, first, } from 'fenugreek-collections';
import { Deck, } from 'bee52';
import { possWith, } from '../../sets';
import { playable, } from './play';
import { addHand, hand, hasID, matches, scrap, update, xMatches, } from '../../player';
import { active, players, setPlayers as setP, } from '../data';
import { disDel, drop, isTop, selectTo, } from './discard';
import { deckNext, shiftDk, } from './deck';

const { add, rest, } = Deck;

export const isActive = g => p => matches(active(g))(p);

export const rotate = arr => first(arr) ? [ ...rest(arr), first(arr), ] : [];
export const turn = g => setP(rotate(players(g)))(g);

export const playerByID = i => g => players(g).find(hasID(i));
export const findPlr = p => g => players(g).find(matches(p));
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

export const canPlayDraw = c => p => g =>
 possWith(c)(add(...selectTo(c)(g))(hand(p))).some(playable(g));

export const drawable = c => p => g =>
  isTop(c)(g) || canPlayDraw(c)(p)(g);

export const canDraw = c => p => g =>
  isActive(g)(p) && drawable(c)(p)(g);

export const drawTo = c => p => g =>
 canDraw(c)(p)(g) ? disDraw(...selectTo(c)(g))(p)(g) : g; 

export const dropCards = (...cards) => p => g =>
  isActive(g)(p) ? addPlr(scrap(...cards)(p))(drop(...cards)(g)) : g; 

export const actClaim = (...cards) => g => claimCards(...cards)(active(g))(g);
export const actDrawNext = g => deckDraw(active(g))(g);
export const actDrawTo = c => g => disDraw(c)(active(g))(g);
