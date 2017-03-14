import { Deck, } from 'bee52';
import { spread, } from 'fenugreek-collections';
import { hasMatch as has, rankSets,sequences, } from './deck';

const { draw,addCards, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const seqPlays = hand => sequences(hand).filter(seq => seq.size > 3);
export const setPlays = hand => rankSets(hand).filter(seq => seq.size > 3);

export const seqPoss = c => hand => sequences(addCards(c)(hand)).filter(has(c));
export const setPoss = c => hand => rankSets(addCards(c)(hand)).filter(has(c));
