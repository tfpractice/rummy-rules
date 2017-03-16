import 'jasmine-expect';
import { Deck, } from 'bee52';
import { allSuit,canPlay,findPlays,hand,isSeq,isSet, playable, playSearch,
  possibles,sameSize,seqPlays, seqPoss, setPlays,setPoss, single, } from 'src/hand';

const { deck,diff, } = Deck;
const myDeck = (deck());
const myHand = myDeck.slice(1, 7);
const first = myDeck[0];
const sixes = (myDeck.filter(c => c.rank === '6'));

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
  describe('playable', () => {
    it('checks if a set of cards if a sequence or set', () => {
      expect(playable([ ...setPlays(myDeck)[0], ])).toBeTrue();
    });
  });
  describe('canPlay', () => {
    it('checks if a set of cards is playable with another card', () => {
      expect(canPlay(sixes[0])(sixes.slice(1))).toBeTrue();
    });
  });
  describe('playSearch', () => {
    it('searches an array sets for one which can contain a card ', () => {
      expect(playSearch(setPlays(diff(myDeck)(myHand)))(myHand[0])).toBeArray();
    });
  });
  describe('possibles', () => {
    it('returns the sets that can contain each card in a hand', () => {
      console.log('playable(myDeck[0])', playable(myDeck[0]));
      expect(possibles(myHand)(setPlays(diff(myDeck)(myHand)))).toBeArray();
    });
  });
});
