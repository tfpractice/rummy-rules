import { spread, } from 'fenugreek-collections';
import { canPlay,hasFit, isFull, playables, possibles, } from '../../sets';
import { addSets, } from '../../player';
import { active, allSets, discard, } from '../data';
import { addPlr, turn, } from './players';
import { deckDel, } from './deck';
import { disDel, } from './discard';
import { hasMatch, } from '../../deck';

export const claimSet = set => p => g => isFull(set) ? addPlr(addSets(set)(p))(g) : addPlr(addSets(...set)(p))(g);
export const playable = g => set => canPlay(allSets(g))(set);

export const play = set => p => g =>
 canPlay(allSets(g))(set) ? claimSet(set)(p)(deckDel(...set)(g)) : g;

export const rumCheck = g => playables(allSets(g))(discard(g)).length > 0;
export const rummable = g => playables(allSets(g))(discard(g));
export const isRummable = c => g => rummable(g).some(hasMatch(c));
export const rumDrop = g => disDel(...rummable(g))(g);
export const rummy = p => g => rumCheck(g) ? claimSet(...rummable(g))(p)(rumDrop(g)) : g;
