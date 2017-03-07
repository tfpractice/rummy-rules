import { Graph, } from 'graph-curry';
const { graph,addEdges, nodes, } = Graph;

import { byAdj, bySAdj, } from './filter';

export const cGraph = cards => graph(...cards);
export const joinAdj = (g, c) => addEdges(g)(c, 0)(...byAdj(nodes(g))(c));
export const joinSuit = (g, c) => addEdges(g)(c, 0)(...bySAdj(nodes(g))(c));
