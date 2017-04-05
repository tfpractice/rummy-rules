import 'jasmine-expect';
import { Deck, } from 'bee52';
import { allFit, canFit, findFit, fullSeqs, fullSets, hasFit, isFull, isSeq,
   isSet, matches, playables, possFits, possibles, xMatches, } from 'src/sets/set';

const { deck, } = Deck;
const myDeck = (deck());
const myHand = myDeck.slice(1, 7);
const first = myDeck[0];
const sixes = (myDeck.filter(c => c.rank === '6'));
const mySets = fullSets(myDeck);

describe('fullSets', () => {
  describe('matches', () => {
    it('checks if the lenght of the difference is 0', () => {
      expect(matches(mySets[0])(mySets[0])).toBeTrue();
      expect(matches(mySets[0])(mySets[1])).toBeFalse();
    });
  }); describe('xMatches', () => {
    it('checks if the lenght of the difference is 0', () => {
      expect(xMatches(mySets[0])(mySets[0])).toBeFalse();
      expect(xMatches(mySets[0])(mySets[1])).toBeTrue();
    });
  });
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
      expect(isSeq([ ...fullSeqs(myDeck)[0], ].splice(0, 2))).toBeFalse();
      expect(isSeq([ myDeck[0], myDeck[15], ])).toBeFalse();
    });
  });
  describe('isSet', () => {
    it('checks if every card is in the first full seq', () => {
      expect(isSet(fullSets(myDeck)[0])).toBeTruthy();
      expect(isSet([ ...fullSets(myDeck)[0], ].splice(0, 2))).toBeFalse();
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
      const [ full0, full1, ...fullSlice ] = [ ...fullSeqs(myDeck)[0], ];
      
      expect(canFit(fullFirst)(fullRest)).toBeTruthy();
      expect(canFit(full0, full1,)(fullSlice)).toBeTruthy();
    });
  });
  describe('hasFit', () => {
    it('searches an array of sets for a place to fit a crad', () => {
      expect(hasFit(fullSets(myDeck.slice(1)))(myDeck[0])).toBeTruthy();
    });
  });
  describe('allFit', () => {
    it('checks if all the porvided cards can fit into an arary of sets', () => {
      expect(allFit(fullSeqs(myDeck.slice(2)))(myDeck.slice(0, 2))).toBeTruthy();
    });
  });
  describe('findFit', () => {
    it('finds a set which can Fit a  card', () => {
      expect(findFit(fullSets(myDeck.slice(2)))(myDeck[1])).toBeTruthy();
    });
  });
  describe('possibles', () => {
    it('retuns an array of sequences and sets', () => {
      expect(possibles(myDeck)).toBeArray();
    });
  });
  describe('possFits', () => {
    it('checks a deck of cards for all possible fits in an array of sets ', () => {
      expect(possFits(myDeck.slice(0, 2))(possibles(myDeck.slice(2)))).toBeArray();
    });
  });
  describe('playables', () => {
    it('returns an arrays of playable cards', () => {
      expect(playables(myDeck.slice(0, 2))(possibles(myDeck.slice(2)))).toContain(myDeck[0]);
    });
  });
});
