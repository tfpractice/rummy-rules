import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hasMatch, } from 'src/deck';
import { allFit, canFit,canFitBin, canPlay, findFit, fullSeqs, fullSets,hasFit, isFull, isSeq,
 isSet, matches, playables, possFits, possibles, possWith, xMatches, }
  from 'src/sets/set';

const { deck, byRank, } = Deck;
const myDeck = deck();
const first = myDeck[0];
const init2 = myDeck.slice(0, 2);
const sixes = byRank('6')(myDeck);
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
      expect(isSeq([ first, myDeck[15], ])).toBeFalse();
    });
  });
  describe('isSet', () => {
    it('checks if every card is in the first full seq', () => {
      expect(isSet(fullSets(myDeck)[0])).toBeTruthy();
      expect(isSet([ ...fullSets(myDeck)[0], ].splice(0, 2))).toBeFalse();
      expect(isSet([ first, myDeck[15], ])).toBeFalse();
    });
  });
  describe('isFull', () => {
    it('checks if an array of cards is a standalone set or seq', () => {
      expect(isFull()).toBeFalsy();
      expect(isFull(...fullSets(myDeck)[0])).toBeTruthy();
    });
  });
  describe('fits', () => {
    const deuces = fullSets(myDeck)[0];
    const clubseq = fullSeqs(myDeck)[0];
    const [ firstdeuce, ...restdeuce ] = (deuces);
    const [ cl2, cl3, ...clubSlice ] = clubseq;
    const by4 = myDeck.filter((el,id) => id % 4 === 0);

    describe('canFit', () => {
      it('checks if a card will fit into a sequece or a set', () => {
        expect(canFit()(restdeuce)).toBeTrue();
        expect(canFit(firstdeuce)(restdeuce)).toBeTruthy();
        expect(canFit(cl2, cl3,)(clubSlice)).toBeTruthy();
      });
    }); describe('canFitBin', () => {
      it('checks if a card will fit into a sequece or a set', () => {
        expect(canFitBin(restdeuce,)).toBeFalse();
        expect(canFitBin(restdeuce,firstdeuce)).toBeTruthy();
        expect(canFitBin(clubSlice,cl2)).toBeTruthy();
      });
    });
    describe('hasFit', () => {
      it('searches an array of sets for a place to fit a crad', () => {
        // expect(hasFit(fullSets(myDeck.slice(1)))()).toBeFalse();
        expect(hasFit(fullSets(myDeck.slice(1)))(first)).toBeTruthy();
        expect(hasFit(fullSets(myDeck.slice(2)))(...init2)).not.toBeTruthy();
        expect(hasFit(fullSeqs(myDeck.slice(2)))(...init2)).toBeTruthy();
      });
    });
    describe('allFit', () => {
      it('checks if all the porvided cards can fit into an arary of sets', () => {
        expect(allFit(fullSeqs(myDeck.slice(2)))(...init2)).toBeTruthy();
        expect(allFit(fullSeqs(myDeck.slice(13)))(...init2)).toBeFalse();

        // expect(allFit(fullSets(myDeck.slice(2)))(...init2)).toBeTruthy();
      });
    });
    describe('findFit', () => {
      it('finds a set which can Fit a  card', () => {
        expect(findFit(fullSets(myDeck.slice(2)))(myDeck[1])).toBeTruthy();
      });
    });
    describe('possibles', () => {
      it('retuns an array of sequences and sets', () => {
        // console.log('possibles(myDeck)', possibles(myDeck));
        expect(possibles(myDeck)).toBeArray();
      });
    });
    describe('possFits', () => {
      it('checks a deck of cards for all possible fits in an array of sets ', () => {
        expect(possFits(init2)(possibles(myDeck.slice(2)))).toBeArray();
      });
    });
    describe('possWith', () => {
      it('returns all possibles containing a specified card', () => {
        expect(possWith(first)(myDeck).every(hasMatch(first))).toBeTrue();
        expect(possibles(myDeck).every(hasMatch(first))).not.toBeTrue();
      });
    });
    describe('canPlay ', () => {
      it('checks if a set is full or can be added to a given group of sets', () => {
        expect(canPlay(possibles(myDeck.slice(2)))(init2)).toBeTrue(first);
      });  
    });
    describe('playables', () => {
      it('returns an arrays of playable cards', () => {
        // console.log('init2', init2);
        // console.log('myDeck.slice(2)', myDeck.slice(12));
        // 
        console.log('playables(init2)(possibles(myDeck.slice(2)))', playables(init2)(possibles(myDeck.slice(2))));
        expect(playables(init2)(possibles(myDeck.slice(2)))).toContain(first);
        expect(playables(init2)(possibles(myDeck.slice(13)))).toContain(first);
      });
    });
  });
});
