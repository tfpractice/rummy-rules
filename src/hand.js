import { Deck, } from 'bee52';
import { Graph, } from 'graph-curry';
import { spread, } from 'fenugreek-collections';
import { hasMatch, sequences,suitSets, } from './cards';
const { draw, } = Deck;

export const hand = deck => draw(7)(spread(deck));

export const seqPlays = hand => sequences(hand).filter(seq => seq.size > 3);
export const rankPlays = hand => suitSets(hand).filter(seq => seq.size > 3);

export const seqPoss = c => hand => sequences(hand.concat(c)).filter(hasMatch(c));
export const rankPoss = c => hand => suitSets(hand.concat(c)).filter(hasMatch(c));
