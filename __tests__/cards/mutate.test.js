import 'jasmine-expect';
import { addCard, drawTo, find, findPop,idx,remove, transfer, } from 'src/cards/mutate';
import { deck, } from 'src/deck';
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
  describe('findPop', () => {
    it('retrieves and removes an element form an array', () => {
      expect(findPop(twoD)(remove(twoD)(myDeck))).toBeFalsy();
      expect(findPop(twoD)(myDeck)).toBeTruthy();
    });
  });
  describe('remove', () => {
    it('returns an array without the given card', () => {
      expect(remove(twoD)(myDeck)).toBeTruthy();

      expect(remove(twoD)(myDeck).length).toEqual(51);
    });
  });
  describe('addCard', () => {
    it('adds a card to the collection', () => {
      expect(addCard(twoD)([]).length).toEqual(1);
    });
  });
  describe('transfer', () => {
    it('moves an element from one array to another', () => {
      expect(transfer(twoD)(myDeck)(myCards).length).toEqual(1);
      expect(transfer(twoD)(remove(twoD)(myDeck))(myCards).length).toEqual(0);
    });
  });
  
  describe('drawTo', () => {
    describe('when the card is found in the array', () => {
      it('returns a slice of the array from beginning including the index of the queried card', () => {
        expect(drawTo(twoD)(myDeck).length).toEqual(14);
      });
    });
    describe('when card is not in the array', () => {
      it('returns an empty array', () => {
        expect(drawTo(twoD)(myCards).length).toEqual(0);
      });
    });
  });
});
