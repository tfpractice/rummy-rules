import 'jasmine-expect';
import { findPop,idx, transfer, } from 'src/cards/mutate';
import { deck, } from 'src/deck';
import { Card, } from 'bee52';
const { card, } = Card;
const myDeck = (deck());
const twoD = card('2', 'DIAMONDS');
const myCards = [];

describe('mutate', () => {
  describe('idx', () => {
    it('returns the index of the equiv card', () => {
      expect(idx(myDeck)(twoD)).toBeNumber();
    });
  });

  describe('findPop', () => {
    it('retrieves and removes an element form an array', () => {
      expect(findPop(twoD)(remove(twoD)(myDeck))).toBeFalsy();
      expect(findPop(twoD)(myDeck)).toBeTruthy();
    });
  });

  describe('transfer', () => {
    it('moves an element from one array to another', () => {
      expect(transfer(twoD)(myDeck)(myCards).length).toEqual(1);
      expect(transfer(twoD)(remove(twoD)(myDeck))(myCards).length).toEqual(0);
    });
  });
});
