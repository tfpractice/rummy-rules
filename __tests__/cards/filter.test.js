import 'jasmine-expect';

import { byAdj, } from 'src/cards/filter';
import { deck, shuffle, } from 'src/deck';

const myDeck = shuffle(deck());

describe('filter', () => {
  describe('byAdj', () => {
    it('filters an array of nodes to those which are adjacent to the givebn node', () => {
      expect(byAdj(myDeck)(myDeck[0])).toBeArray();
      expect(byAdj(myDeck)(myDeck[0]).length).toBe(2);
    });
  });
});
