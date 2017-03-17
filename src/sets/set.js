import { Deck, } from 'bee52';
import { append ,every, first, flattenBin as flat, some, spread, } from 'fenugreek-collections';
import { hasMatch, rankSets,sequences, } from '../deck';
import { exceeds, } from './utils';

const { draw,add, contains, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const seqWith = c => deck => sequences(add(c)(deck)).filter(hasMatch(c));
export const setWith = c => deck => rankSets(add(c)(deck)).filter(hasMatch(c));

export const fullSeqs = deck => sequences(deck).filter(exceeds(2));
export const fullSets = deck => rankSets(deck).filter(exceeds(2));

export const isSeq = cards => every(cards)(contains(first(fullSeqs(cards))));
export const isSet = cards => every(cards)(contains(first(fullSets(cards))));
export const isFull = (...cards) => [ isSeq,isSet, ].some(f => f(cards));

export const canFit = card => set => isFull(...append(set)(card));
export const hasFit = sets => card => some(sets)(canFit(card));
export const allFit = sets => (...cards) => every(cards)(hasFit(sets));
export const everyFit = (...cards) => sets => every(cards)(hasFit(sets));
export const findFit = sets => c => sets.filter(canFit(c));
export const possibles = deck => sets => deck.map(findFit(sets)).reduce(flat,[]);
