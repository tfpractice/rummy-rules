import { Deck, } from 'bee52';
import { Graph, } from 'graph-curry';

const { graph, nodes, } = Graph;
const { draw, } = Deck;

export const hand = deck => draw(7)(deck);

// export const sequences = hand=> sequences.filt
