import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hasNext, isAdj,rankDiff,rankSort, } from 'src/sequence';

const { shuffle, deck, } = Deck;
const myDeck = deck();
const myShuff = shuffle(myDeck);
const myCards = Deck.draw(7)(deck());
const first = myCards[0];
const second = myCards[1];

describe('sequence', () => {
  describe('hasNext', () => {
    it('finds the next ranking card given a suit', () => {
      expect((myCards).length).toEqual(7);
      expect(hasNext(first)(myCards)).toBeTruthy();
      expect(hasNext(first)(myCards.slice(3))).toBeFalse();
    });
  });
  describe('rankDiff', () => {
    it('returns the difference in rankVal of two cards', () => {
      expect(rankDiff(first,myCards[1])).toEqual(-1);
    });
  });
  describe('rankSort', () => {
    it('sorts the cards by rank', () => {
      expect(rankSort(shuffle(myCards))).toEqual(myCards);
    });
  });
  describe('isAdj', () => {
    it('checks for a rankDiff of 1', () => {
      expect(isAdj(first)(second)).toBeTruthy();
    });
  });
});
