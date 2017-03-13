import 'jasmine-expect';
import { byAdj, bySAdj,hasMatch, } from 'src/deck/filter';
import { deck, shuffle, } from 'src/deck';

const myDeck = shuffle(deck());

describe('filter', () => {
  describe('byAdj', () => {
    it('filters an array of nodes to those which are adjacent to the given node', () => {
      expect(byAdj(myDeck)(myDeck[0])).toBeArray();
      expect(byAdj(myDeck)(myDeck[0]).length).toBe(2);
    });
  });
  describe('hasMatch', () => {
    it('checks if an array contains a matching card', () => {
      expect(hasMatch(myDeck[0])(myDeck)).toEqual(true);
    });
  });
});
