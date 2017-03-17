import { Deck, sameRank,sameSuit, } from 'bee52';
import { every,first, flattenBin as flat, spread, } from 'fenugreek-collections';
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

export const isFull = cards => [ isSeq,isSet, ].some(f => f(cards));
export const canFit = card => set;

export const playable = cards => [ isSeq,isSet, ].some(f => f(cards));
export const canPlay = c => set => playable([ ...set, c, ]);
export const playSearch = sets => c => sets.filter(canPlay(c));
export const possibles = hand => sets => hand.map(playSearch(sets)).reduce(flat,[]);
