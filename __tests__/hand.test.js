import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand, handGraph, } from 'src/hand';

const { shuffle, deck, } = Deck;
const myDeck = shuffle(deck());

describe('hand', () => {
  describe('hand', () => {
    it('retrieves 7 cards from a deck', () => {
      expect(hand(myDeck).length).toEqual(7);
    });
  });
  describe('handGraph', () => {
    it('retuns a map of cards ', () => {
      console.log(handGraph(...hand(myDeck)));
      expect(handGraph(...hand(myDeck)) instanceof Map).toBeTrue();
    });
  });
});
