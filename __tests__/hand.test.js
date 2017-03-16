import 'jasmine-expect';
import { Deck, } from 'bee52';
import { allSuit,hand,isSeq,isSet,sameSize,seqPlays, seqPoss, setPlays,setPoss, single, } from 'src/hand';

const { deck, } = Deck;
const myDeck = (deck());
const myHand = myDeck.slice(1, 7);
const first = myDeck[0];

describe('hand', () => {
  describe('hand', () => {
    it('retrieves 7 cards from a deck', () => {
      expect(hand(myDeck).length).toEqual(7);
    });
  });
  describe('seqPoss', () => {
    it('returns the sets containing the poitential card', () => {
      expect(seqPoss(first)(myDeck)).toBeArray();
    });
  }); describe('setPoss', () => {
    it('returns the sets containing the poitential card', () => {
      expect(setPoss(first)(myDeck)).toBeArray();
    });
  });
  
  describe('seqPlays', () => {
    it('returns the sets containing the poitential card', () => {
      expect(seqPlays(myDeck)).toBeArray();
    });
  }); 
  describe('setPlays', () => {
    it('returns the sets containing the poitential card', () => {
      expect(setPlays(myDeck)).toBeArray();
    });
  });
  describe('allSuit', () => {
    it('checks if every card shares the same suit as the first', () => {
      expect(allSuit(myDeck.slice(0,7))).toBeTruthy();
      expect(allSuit([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
  describe('single', () => {
    it('checks if the collection has a sole element', () => {
      expect(single([ 1, ])).toBeTrue();
      expect(single([ 1,2, ])).toBeFalse();
    });
  }); 
  describe('sameSize', () => {
    it('checks if the two collections have the same size', () => {
      expect(sameSize([ 1, ])([ 2, ])).toBeTrue();
      expect(sameSize([ 1,2, ])([ 1, ])).toBeFalse();
    });
  });
  describe('isSeq', () => {
    it('compares the size of the sequencethe array ', () => {
      expect(isSeq(seqPlays(myDeck)[0])).toBeTruthy();
      expect(isSeq([ ...seqPlays(myDeck)[0], ].splice(0,2))).toBeFalse();
      expect(isSeq([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
  describe('isSet', () => {
    it('compares the size of the sequencethe array ', () => {
      expect(isSet(setPlays(myDeck)[0])).toBeTruthy();
      expect(isSet([ ...setPlays(myDeck)[0], ].splice(0,2))).toBeFalse();
      expect(isSet([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
});
