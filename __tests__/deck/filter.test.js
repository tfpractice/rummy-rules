import 'jasmine-expect';
import { Deck, } from 'bee52';

import { byAdj,bySAdj, hasMatch, } from 'src/deck/filter';

const { deck, shuffle, } = Deck;
const myDeck = shuffle(deck());

describe('filter', () => {
  describe('byAdj', () => {
    it('filters an array of nodes to those which are adjacent to the given node', () => {
      expect(byAdj(myDeck)(myDeck[0])).toBeArray();
      expect(byAdj(myDeck)(myDeck[0]).length).toBe(2);
    });
  });
  describe('bySAdj', () => {
    it('filters an array of nodes to those which are adjacent to the given node', () => {
      console.log(bySAdj(myDeck)(myDeck[0]));
      expect(bySAdj(myDeck)(myDeck[0])).toBeArray();
      console.log(bySAdj(myDeck)(myDeck[0]));
      expect(bySAdj(myDeck)(myDeck[0]).length).toBe(2);
    });
  });
  describe('hasMatch', () => {
    it('checks if an array contains a matching card', () => {
      expect(hasMatch(myDeck[0])(myDeck)).toEqual(true);
    });
  });
});
