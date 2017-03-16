import { Deck, sameRank,sameSuit, } from 'bee52';
import { every,first, spread, } from 'fenugreek-collections';
import { hasMatch as has,rankSets,sequences, } from './deck';

const { draw,addCards,rankSort,bySuit, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const seqPlays = hand => sequences(hand).filter(seq => seq.size > 3);
export const setPlays = hand => rankSets(hand).filter(seq => seq.size > 3);

export const seqPoss = c => hand => sequences(addCards(c)(hand)).filter(has(c));
export const setPoss = c => hand => rankSets(addCards(c)(hand)).filter(has(c));

const adjBin = (a,b) => rankAdj(a)(b) && b;

export const allSuit = cards => every(cards)(sameSuit(first(cards)));
export const allRank = cards => every(cards)(sameRank(first(cards)));

// export const allAdj = cards => rankSort(cards).;
export const sameSize = a => b => spread(a).length === spread(b).length;
export const single = coll => spread(coll).length === 1;
export const isSeq = cards => 
  single(seqPlays(cards)) && sameSize(cards)(first(seqPlays(cards)));
export const isSet = cards =>
  single(setPlays(cards)) && sameSize(cards)(first(setPlays(cards)));
