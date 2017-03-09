import 'jasmine-expect';
import { Graph, } from 'graph-curry';
const { graph,addEdges, nodes, } = Graph;

import { card,copy,hasRank,hasSuit, } from 'src/cards/card';
import { isAdj,rankAdj, rankDiff,rankOrder, } from 'src/cards/compare';
import { deck, shuffle, } from 'src/deck';
import { cGraph,joinAdj,joinSuit,seq,sequences,suits,suitSets, } from 'src/cards/join';
const myDeck = shuffle(deck());
const myGraph = cGraph(myDeck);
const first = myDeck[0];

describe('join', () => {
  describe('cGraph', () => {
    it('returns a graph of the given cards', () => {
      expect(cGraph(myDeck) instanceof Map).toBeTruthy();
    });
  });  
  describe('joinAdj', () => {
    it('adds edges between a card and its adjacents cards', () => {
      expect(Object.keys(joinAdj(myGraph, first))).toBeArray();
    });
  });
  describe('joinSuit', () => {
    it('adds edges to a graph between cards of mathing suits', () => {
      expect(joinSuit(myGraph, first) instanceof Map).toBeTruthy();
    });
  });
  describe('seq', () => {
    it('joins all the possible sequences in the cards', () => {
      expect(seq(cGraph(deck())) instanceof Map).toBeTruthy();
    });
  });
  describe('suits', () => {
    it('joins all the suit connnections ', () => {
      expect(suits(myDeck)).toBeArray();
    });
  });
  describe('sequences', () => {
    it('returns the set of sequences in the cards', () => {
      // console.log(sequences(myDeck));
      expect(sequences(myDeck)).toBeArray();

      // console.log(suitSets(myDeck));
    });
  });
  describe('suitSets', () => {
    it('joins all the possible suits in the cards', () => {
      expect(suitSets(myDeck)).toBeArray();
    });
  });
});
