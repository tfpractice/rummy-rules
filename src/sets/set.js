import { Deck, sameRank,sameSuit, } from 'bee52';
import { every,first, flattenBin as flat, spread, } from 'fenugreek-collections';
import { hasMatch, rankSets,sequences, } from '../deck';
import { exceeds, } from './utils';

const { draw,add, contains, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const fullSeqs = deck => sequences(deck).filter(exceeds(2));
export const fullSets = deck => rankSets(deck).filter(exceeds(2));

export const isSeq = cards => every(cards)(contains(first(fullSeqs(cards))));
export const isSet = cards => every(cards)(contains(first(fullSets(cards))));

// export const isWhole =
// export 
// export const fullSeqs = hand => sequences(hand).filter(seq => seq.size > 2);
// export const fullSets = hand => rankSets(hand).filter(seq => seq.size > 2);

export const seqPoss = c => hand => sequences(add(c)(hand)).filter(has(c));
export const setPoss = c => hand => rankSets(add(c)(hand)).filter(has(c));

export const allSuit = cards => every(cards)(sameSuit(first(cards)));
export const allRank = cards => every(cards)(sameRank(first(cards)));

export const sameSize = a => b => spread(a).length === spread(b).length;
export const single = coll => spread(coll).length === 1;

// export const isSeq = cards => 
//   single(fullSeqs(cards)) && sameSize(cards)(first(fullSeqs(cards)));
  
// export const isSet = cards =>
//   single(fullSets(cards)) && sameSize(cards)(first(fullSets(cards)));

export const playable = cards => [ isSeq,isSet, ].some(f => f(cards));
export const canPlay = c => set => playable([ ...set, c, ]);
export const playSearch = sets => c => sets.filter(canPlay(c));
export const possibles = hand => sets => hand.map(playSearch(sets)).reduce(flat,[]);
