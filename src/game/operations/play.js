import { Deck, } from 'bee52';
import { allFit, isFull, } from '../../sets';
import { play as playC, } from '../../player';
import { active, allSets, } from '../data';
import { addPlr, turn, } from './players';
import { deckDel, } from './deck';

export const actPlay = (...cards) => g => playC(...cards)(active(g));
export const playWhole = (...cards) => g => addPlr(playC(cards)(active(g)))(g);
export const playPartial = (...cards) => g => addPlr(playC(...cards)(active(g)))(g);

export const playByType = set => g =>
  isFull(...set) ? playWhole(...set)(g) : playPartial(...set)(g);

export const playable = (...cards) => g =>
 [ isFull, allFit(allSets(g)), ].some(f => f(...cards));

export const play = (...cards) => g =>
 playable(...cards)(g) ? turn(playByType(cards)(deckDel(...cards)(g))) : g;
