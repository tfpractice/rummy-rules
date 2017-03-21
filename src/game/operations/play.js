import { Deck, } from 'bee52';
import { asSet, } from 'fenugreek-collections';
import { allFit, hasFit, isFull, possibles, } from '../../sets';
import { play as playC, } from '../../player';
import { active, allSets,discard, players, } from '../data';
import { addPlr, turn, } from './players';
import { deckDel, } from './deck';
import { disDel, } from './discard';

export const actPlay = (...cards) => g => playC(...cards)(active(g));

export const playWhole = (...cards) => g => addPlr(playC(cards)(active(g)))(g);
export const playPartial = (...cards) => g => addPlr(playC(...cards)(active(g)))(g);

export const playByType = set => g =>
  isFull(...set) ? playWhole(...set)(g) : playPartial(...set)(g);

export const playable = (...cards) => g =>
 [ isFull, allFit(allSets(g)), ].some(f => f(...cards));

export const play = (...cards) => g =>
 playable(...cards)(g) ? turn(playByType(cards)(deckDel(...cards)(g))) : g;
 
export const rumCheck = g => possibles(discard(g)).some(hasFit(allSets(g)));
export const rummable = g => possibles(discard(g)).filter(hasFit(allSets(g)));
export const rumDrop = g => (disDel(...rummable(g)));
export const rummy = g => rumCheck(g) ? playPartial(...rummable(g))(rumDrop(g)) : g;
