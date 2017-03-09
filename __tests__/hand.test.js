import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand,rankPlays, rankPoss,seqPlays, seqPoss, } from 'src/hand';
import { sequences, } from 'src/cards/join';
const { shuffle, deck, } = Deck;
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
      expect(seqPoss(myDeck[0])(myDeck)).toBeArray();
    });
  }); describe('rankPoss', () => {
    it('returns the sets containing the poitential card', () => {
      expect(rankPoss(myDeck[0])(myDeck)).toBeArray();
    });
  });
  
  describe('seqPlays', () => {
    it('returns the sets containing the poitential card', () => {
      console.log(seqPoss(first)(myHand));
      expect(seqPlays(myDeck)).toBeArray();
    });
  }); describe('rankPlays', () => {
    it('returns the sets containing the poitential card', () => {
      expect(rankPlays(myDeck)).toBeArray();
    });
  });
});
