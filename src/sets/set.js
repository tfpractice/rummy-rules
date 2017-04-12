import { Deck, } from 'bee52';
import { every, filter, first, flattenBin as flat, flatten, some, spread, } 
from 'fenugreek-collections';
import { hasMatch, rankSets, sequences, } from '../deck';
import { exceeds, len, } from './utils';

const { draw, add, diff, contains, union, unionBin, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const matches = set => next => len(diff(set)(next).concat(diff(next)(set))) === 0;
export const xMatches = set => next => !matches(set)(next);

export const fullSeqs = deck => sequences(deck).filter(exceeds(2));
export const fullSets = deck => rankSets(deck).filter(exceeds(2));

export const seqWith = c => deck => sequences(add(c)(deck)).filter(hasMatch(c));
export const setWith = c => deck => rankSets(add(c)(deck)).filter(hasMatch(c));

export const possibles = deck => [ ...sequences(deck), ...rankSets(deck), ];
export const definites = deck => filter(possibles(deck))(exceeds(2));

export const possWith = c => deck => filter(possibles(add(c)(deck)))(hasMatch(c));

export const isSeq = s => exceeds(1)(s) && some(sequences(s))(matches(s));
export const isSet = s => exceeds(1)(s) && some(rankSets(s))(matches(s));

export const isFull = poss => exceeds(2)(poss) && some(definites(poss))(matches(poss));

export const canFit = (poss = []) => (set = []) => isFull(flatten(set)(poss));
export const hasFit = sets => poss => some(sets)(canFit(poss));

export const findFit = sets => c => sets.filter(canFit(c));

export const canPlay = sets => poss => [ isFull, hasFit(sets), ].some(f => f(poss));

export const playables = sets => deck =>  
  filter(possibles(deck))(canPlay(sets)).reduce(unionBin, []);

export const possFits = sets => deck =>  
  possibles(deck).map(findFit(sets)).reduce(flat, []);
