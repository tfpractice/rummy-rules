import { Components,Graph, } from 'graph-curry';
import { byAdj, bySAdj, } from './filter';

const { graph,addEdges, nodes, } = Graph;
const { componentSet, } = Components;

export const cGraph = cards => graph(...cards);
export const joinAdj = (g, c) => addEdges(g)(c, 0)(...byAdj(nodes(g))(c));
export const joinSuit = (g, c) => addEdges(g)(c, 0)(...bySAdj(nodes(g))(c));

export const seq = g => nodes(g).reduce(joinAdj, g);
export const suits = g => nodes(g).reduce(joinSuit, g);
export const sequences = cards => [ ...componentSet(seq(cGraph(cards))), ];
export const suitSets = cards => [ ...componentSet(suits(graph(...cards))), ];
