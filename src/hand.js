import { Deck, } from 'bee52';
import { Graph, } from 'graph-curry';
import { spread, } from 'fenugreek-collections';
import { sequences, suitSets, } from './cards';
const { draw, } = Deck;

export const hand = deck => draw(7)(deck);

export const seqPlays = hand => sequences(hand).filter(seq => seq.size > 3);
export const rankPlays = hand => suitSets(hand).filter(seq => seq.size > 3);

export const seqPoss = card => hand => sequences(hand).filter();
