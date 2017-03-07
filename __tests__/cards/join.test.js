import 'jasmine-expect';
import { card,copy,hasRank,hasSuit, } from 'src/cards/card';
import { isAdj,rankAdj, rankDiff,rankOrder, } from 'src/cards/compare';
import { deck, shuffle, } from 'src/deck';
import { cGraph, } from 'src/cards/join';
const myDeck = shuffle(deck());

describe('join', () => {
  describe('cGraph', () => {
    it('returns a graph of the given cards', () => {
      console.log(cGraph(myDeck));
      expect(cGraph(myDeck) instanceof Map).toBeTruthy();
    });
  });  
});
