import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand, } from 'src/hand';

const { shuffle, deck, } = Deck;
const myDeck = shuffle(deck());

describe('hand', () => {
  describe('hand', () => {
    it('retrieves 7 cards from a deck', () => {
      expect(hand(myDeck).length).toEqual(7);
    });
  });
});
