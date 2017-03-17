import 'jasmine-expect';
import { fullSeqs, fullSets, isSeq, isSet, } from 'src/sets/set';
import { Deck, } from 'bee52';

const { deck, } = Deck;
const myDeck = (deck());
const myHand = myDeck.slice(1, 7);
const first = myDeck[0];
const sixes = (myDeck.filter(c => c.rank === '6'));

describe('fullSets', () => {
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
  
  describe('isSeq', () => {
    it('checks if every card is in the first full seq', () => {
      expect(isSeq(fullSeqs(myDeck)[0])).toBeTruthy();
      expect(isSeq([ ...fullSeqs(myDeck)[0], ].splice(0,2))).toBeFalse();
      expect(isSeq([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
  describe('isSet', () => {
    it('checks if every card is in the first full seq', () => {
      expect(isSet(fullSets(myDeck)[0])).toBeTruthy();
      expect(isSet([ ...fullSets(myDeck)[0], ].splice(0,2))).toBeFalse();
      expect(isSet([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
});
