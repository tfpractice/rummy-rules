import { Deck, } from 'bee52';
import { every, filter, first, flattenBin as flat, flatten, some, spread, } 
from 'fenugreek-collections';
import { hasMatch, rankSets, sequences, } from '../deck';
import { exceeds, len, } from './utils';

const { draw, add, diff, contains, union,unionBin, } = Deck;

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

export const isSeq = s => some(sequences(s))(matches(s));
export const isSet = s => some(rankSets(s))(matches(s));

export const isFull1 = (...cards) => [ isSeq, isSet, ].some(f => f(cards));
export const isFull = cards => exceeds(2)(cards) && some(definites(cards))(matches(cards));

export const canFit = (aux = []) => (set = []) => isFull(flatten(set)(aux));
export const hasFit = sets => aux => some(sets)(canFit(aux));
export const anyFit = sets => c => some(sets)(canFit(c));
export const anyFitBin = (sets = [], c) => anyFit(sets)(c);

export const allFit = sets => (...aux) => hasFit(sets)(aux);

export const everyFit = (...cards) => sets => every(cards)(anyFit(sets));
export const findFit = sets => c => sets.filter(canFit(c));

export const canPlay = sets => poss => [ isFull1, hasFit(sets), ].some(f => f(...poss));

export const playables = deck => sets => 
  filter(possibles(deck))(hasFit(sets)).reduce(unionBin, []);

export const possFits = deck => sets => 
  possibles(deck).map(findFit(sets)).reduce(flat, []);
