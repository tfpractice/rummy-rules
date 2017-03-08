import 'jasmine-expect';
import { find, idx, remove, transfer, } from 'src/cards/mutate';
import { deck, shuffle, } from 'src/deck';
import { card, } from 'src/cards/card';
const myDeck = (deck());
const twoD = card('2', 'DIAMONDS');
const myCards = [];

describe('mutate', () => {
  describe('idx', () => {
    it('returns the index of the equiv card', () => {
      expect(idx(myDeck)(twoD)).toBeNumber();
    });
  });
  describe('find', () => {
    it('returns the equivalent card in an array', () => {
      expect(find(myDeck)(twoD)).toBeTruthy();
    });
  });
  describe('remove', () => {
    it('splices the array at the index of a matching element', () => {
      expect(remove(twoD)(myDeck)).toBeTruthy();
      expect(myDeck.length).toEqual(51);
    });
  });
  describe('transfer', () => {
    it('moves an element from one array to another', () => {
      console.log(myDeck);
      console.log(transfer(twoD)(myDeck)(myCards));
      expect(myDeck.length).toEqual(51);
      expect(myCards.length).toEqual(1);
    });
  });
});
