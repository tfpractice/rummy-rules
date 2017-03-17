import 'jasmine-expect';
import { allFit, canFit,findFit, fullSeqs, fullSets, hasFit, isFull, isSeq, isSet, possibles, } from 'src/sets/set';
import { Deck, } from 'bee52';

const { deck, } = Deck;
const myDeck = (deck());
const myHand = myDeck.slice(1, 7);
const first = myDeck[0];
const sixes = (myDeck.filter(c => c.rank === '6'));

describe('fullSets', () => {
  describe('fullSets', () => {
    it('returns all sets from a collection of cards which exceed 2', () => {
      expect(fullSets(myDeck).every(x => [ ...x, ].length > 2)).toBeTruthy();
    });
  });
  describe('fullSeqs', () => {
    it('returns all sets from a collection of cards which exceed 2', () => {
      expect(fullSeqs(myDeck).every(x => [ ...x, ].length > 2)).toBeTruthy();
    });
  });
  
  describe('isSeq', () => {
    it('checks if every card is in the first full seq', () => {
      expect(isSeq(fullSeqs(myDeck)[0])).toBeTruthy();
      expect(isSeq([ ...fullSeqs(myDeck)[0], ].splice(0,2))).toBeFalse();
      expect(isSeq([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
  describe('isSet', () => {
    it('checks if every card is in the first full seq', () => {
      expect(isSet(fullSets(myDeck)[0])).toBeTruthy();
      expect(isSet([ ...fullSets(myDeck)[0], ].splice(0,2))).toBeFalse();
      expect(isSet([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
  describe('isFull', () => {
    it('checks if an array of cards is a standalone set or seq', () => {
      expect(isFull(...fullSets(myDeck)[0])).toBeTruthy();
    });
  });
  describe('canFit', () => {
    it('checks if a card will fit into a sequece or a set', () => {
      const [ fullFirst, ...fullRest ] = [ ...fullSets(myDeck)[0], ];

      expect(canFit(fullFirst)(fullRest)).toBeTruthy();
    });
  });
  describe('hasFit', () => {
    it('searches an array of sets for a place to fit a crad', () => {
      expect(hasFit(fullSets(myDeck.slice(1)))(myDeck[0])).toBeTruthy();
    });
  });
  describe('allFit', () => {
    it('checks if all the porvided cards can fit into an arary of sets', () => {
      expect(allFit(fullSets(myDeck.slice(2)))(...myDeck.slice(0,2))).toBeTruthy();
    });
  });
  describe('findFit', () => {
    it('finds a set which can Fit a  card', () => {
      expect(findFit(fullSets(myDeck.slice(2)))(myDeck[1])).toBeTruthy();
    });
  });
  describe('possibles', () => {
    it('checks a deck of cards for all possible fits in an array of sets ', () => {
      expect(possibles(myDeck.slice(0,2))(fullSets(myDeck.slice(2)))).toBeArray();
    });
  });
});
