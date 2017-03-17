import 'jasmine-expect';
import { fullSeqs, fullSets, } from 'src/sets/set';
import { Deck, } from 'bee52';

const { deck, } = Deck;
const myDeck = (deck());
const myHand = myDeck.slice(1, 7);
const first = myDeck[0];
const sixes = (myDeck.filter(c => c.rank === '6'));

describe('setPlays', () => {
  describe('fullSets', () => {
    it('returns all sets from a collection of cards which exceed 2', () => {
      expect(fullSets(myDeck).every(x => [ ...x, ].length > 2)).toBeTruthy();
    });
  });
  describe('fullSeqs', () => {
    it('returns all sets from a collection of cards which exceed 2', () => {
      expect(fullSeqs(myDeck).every(x => [ ...x, ].length > 2)).toBeTruthy();
    });
  });
});
