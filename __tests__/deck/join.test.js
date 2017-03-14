import 'jasmine-expect';
import { Deck, } from 'bee52';
import { cGraph, joinAdj, joinSet, rankSets, seqGraph, sequences, setGraph, } 
from 'src/deck/join';

const { deck, shuffle, } = Deck;
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
  describe('joinSet', () => {
    it('adds edges to a graph between cards of mathing setGraph', () => {
      expect(joinSet(myGraph, first) instanceof Map).toBeTruthy();
    });
  });
  describe('seqGraph', () => {
    it('joins all the possible sequences in the cards', () => {
      expect(seqGraph(cGraph(deck())) instanceof Map).toBeTruthy();
    });
  });
  describe('setGraph', () => {
    it('joins all the suit connnections ', () => {
      expect(setGraph(myDeck)).toBeArray();
    });
  });
  describe('sequences', () => {
    it('returns the set of sequences in the cards', () => {
      expect(sequences(myDeck)).toBeArray();
    });
  });
  describe('rankSets', () => {
    it('joins all the possible setGraph in the cards', () => {
      expect(rankSets(myDeck)).toBeArray();
    });
  });
});
