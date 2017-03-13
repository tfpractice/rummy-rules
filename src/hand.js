import { Deck, } from 'bee52';
import { spread, } from 'fenugreek-collections';
import { hasMatch, rankSets,sequences, } from './deck';

const { draw,addCards, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const seqPlays = hand => sequences(hand).filter(seq => seq.size > 3);
export const rankPlays = hand => rankSets(hand).filter(seq => seq.size > 3);

export const seqPoss = c => hand => sequences(addCards(c)(hand)).filter(hasMatch(c));
export const rankPoss = c => hand => rankSets(addCards(c)(hand)).filter(hasMatch(c));
