import { Deck, } from 'bee52';
import { every, filter, first, flattenBin as flat, flatten, some, spread, } 
from 'fenugreek-collections';
import { hasMatch, rankSets, sequences, } from '../deck';
import { exceeds, len, } from './utils';

const { draw, add, diff, contains, unionBin, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const matches = next => s => len(diff(s)(next)) === 0;
export const xMatches = next => s => !matches(next)(s);

export const seqWith = c => deck => sequences(add(c)(deck)).filter(hasMatch(c));
export const setWith = c => deck => rankSets(add(c)(deck)).filter(hasMatch(c));

export const possibles = deck => [ ...sequences(deck), ...rankSets(deck), ];
export const possWith = c => deck => filter(possibles(add(c)(deck)))(hasMatch(c));

export const fullSeqs = deck => sequences(deck).filter(exceeds(2));
export const fullSets = deck => rankSets(deck).filter(exceeds(2));

export const isSeq = s => exceeds(2)(s) && every(s)(contains(first(fullSeqs(s))));
export const isSet = s => exceeds(2)(s) && every(s)(contains(first(fullSets(s))));
export const isFull = (...cards) => [ isSeq, isSet, ].some(f => f(cards));
export const isFull1 = cards => [ isSeq, isSet, ].some(f => f(cards));

export const canFitBin = (set = [], c) => isFull(...set, c);
export const canFit = (...aux) => set => isFull1(flatten(set)(aux));

export const hasFit = sets => aux => some(sets)(canFit(...aux));

export const anyFit = sets => c => some(sets)(canFit(c));
export const anyFitBin = (sets = [], c) => anyFit(sets)(c);

export const allFit = sets => (...aux) => hasFit(sets)(aux);

export const everyFit = (...cards) => sets => every(cards)(anyFit(sets));
export const findFit = sets => c => sets.filter(canFit(c));

export const canPlay = sets => poss => [ isFull, hasFit(sets), ].some(f => f(...poss));

export const playables = deck => sets => 
  filter(possibles(deck))(hasFit(sets)).reduce(unionBin, []);

export const possFits = deck => sets => 
  possibles(deck).map(findFit(sets)).reduce(flat, []);
