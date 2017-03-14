import { spread, } from 'fenugreek-collections';
import { Components,Graph, } from 'graph-curry';
import { byAdj, bySet, } from './filter';

const { graph,addEdges, nodes, } = Graph;
const { componentSet: compSet, } = Components;

export const cGraph = cards => graph(...cards);

export const joinAdj = (g, c) => addEdges(g)(c, 0)(...byAdj(c)(nodes(g)));
export const joinSet = (g, c) => addEdges(g)(c, 0)(...bySet(c)(nodes(g)));

export const seqGraph = g => nodes(g).reduce(joinAdj, g);
export const setGraph = g => nodes(g).reduce(joinSet, g);

export const sequences = cards => spread(compSet(seqGraph(cGraph(cards))));
export const rankSets = cards => spread(compSet(setGraph(cGraph(cards))));
