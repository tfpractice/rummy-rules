import { Deck, } from 'bee52';
import { allFit, hasFit, isFull, playables, possibles, } from '../../sets';
import { addSets, } from '../../player';
import { active, allSets, discard, } from '../data';
import { addPlr, turn, } from './players';
import { deckDel, } from './deck';
import { disDel, } from './discard';

export const actPlay = (...cards) => g => addSets(...cards)(active(g));

export const claimSet = (...set) => p => g => addPlr(addSets(set)(p))(g);
export const claimParts = (...set) => p => g => addPlr(addSets(...set)(p))(g);

export const playWhole = (...sets) => g => claimSet(...sets)(active(g))(g);
export const playPartial = (...sets) => g => claimParts(...sets)(active(g))(g);

export const playByType = set => g =>
  isFull(...set) ? playWhole(...set)(g) : playPartial(...set)(g);

export const playable = cards => g =>
 [ isFull, allFit(allSets(g)), ].some(f => f(...cards));

export const play = (...cards) => g =>
 playable(cards)(g) ? turn(playByType(cards)(deckDel(...cards)(g))) : g;

export const rumCheck = g => possibles(discard(g)).some(hasFit(allSets(g)));
export const rummable = g => playables(discard(g))(allSets(g));
export const rumDrop = g => disDel(...rummable(g))(g);
export const rummy = p => g => rumCheck(g) ? claimParts(...rummable(g))(p)(rumDrop(g)) : g;
