import { spread, } from 'fenugreek-collections';
import { allFit, hasFit, isFull, playables, possibles, } from '../../sets';
import { addSets, } from '../../player';
import { active, allSets, discard, } from '../data';
import { addPlr, turn, } from './players';
import { deckDel, } from './deck';
import { disDel, } from './discard';
import { hasMatch, } from '../../deck';

export const claimSet = set => p => g => 
  isFull(...set) ? addPlr(addSets(set)(p))(g) : addPlr(addSets(...set)(p))(g);

export const playable = g => set =>
 [ isFull, allFit(allSets(g)), ].some(f => f(...(spread(set))));

export const play = set => p => g =>
 playable(g)(set) ? claimSet(set)(p)(deckDel(...set)(g)) : g;

export const rumCheck = g => possibles(discard(g)).some(hasFit(allSets(g)));
export const rummable = g => playables(discard(g))(allSets(g));
export const isRummable = c => g => rummable(g).some(hasMatch(c));
export const rumDrop = g => disDel(...rummable(g))(g);
export const rummy = p => g => rumCheck(g) ? claimSet(...rummable(g))(p)(rumDrop(g)) : g;
