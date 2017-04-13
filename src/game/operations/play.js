import { some, } from 'fenugreek-collections';
import { canPlay, playables, plays, } from '../../sets';
import { addSet, } from '../../player';
import { allSets, discard, } from '../data';
import { addPlr, } from './players';
import { deckDel, } from './deck';
import { disDel, } from './discard';
import { hasMatch, } from '../../deck';

export const clearCards = (...set) => g => deckDel(...set)(disDel(...set)(g));
export const claimSet = set => p => g => addPlr(addSet(set)(p))(clearCards(...set)(g));

export const playable = g => set => canPlay(allSets(g))(set);
export const play = set => p => g => playable(g)(set) ? claimSet(set)(p)(g) : g;

export const rumSets = g => plays(allSets(g))(discard(g));
export const rumCheck = g => rumSets(g).length > 0;

export const rummable = g => playables(allSets(g))(discard(g));
export const isRummable = g => c => rumSets(g).some(hasMatch(c));
export const rumDrop = g => disDel(...rummable(g))(g);
export const rummy = set => p => g => some(set)(isRummable(g)) ? play(set)(p)(g) : g;
