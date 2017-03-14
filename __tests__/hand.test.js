import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand,seqPlays, seqPoss,setPlays, setPoss, } from 'src/hand';

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
  }); describe('setPlays', () => {
    it('returns the sets containing the poitential card', () => {
      expect(setPlays(myDeck)).toBeArray();
    });
  });
});
