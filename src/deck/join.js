import { spread, } from 'fenugreek-collections';
import { Components,Graph, } from 'graph-curry';
import { byAdj, bySAdj, } from './filter';

const { graph,addEdges, nodes, } = Graph;
const { componentSet, } = Components;

export const cGraph = cards => graph(...cards);
export const joinAdj = (g, c) => addEdges(g)(c, 0)(...byAdj(c)(nodes(g)));
export const joinSuit = (g, c) => addEdges(g)(c, 0)(...bySAdj(c)(nodes(g)));

export const seq = g => nodes(g).reduce(joinAdj, g);
export const suits = g => nodes(g).reduce(joinSuit, g);

export const sequences = cards => spread(componentSet(seq(cGraph(cards))));
export const rankSets = cards => spread(componentSet(suits(graph(cards))));
