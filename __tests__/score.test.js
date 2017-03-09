import 'jasmine-expect';
import { allAces, penalty, points, score, scoreSet, seqScore, sumBin, total, } from 'src/score';
import { deck, } from 'src/deck';
import { sequences, } from 'src/cards/join';
const myDeck = (deck());
const s26 = sequences(myDeck.slice(0, 27));

describe('score', () => {
  describe('points', () => {
    describe('when the suit is less than 10', () => {
      it('returns 5', () => {
        expect(points('2')).toEqual(5);
      });
    });
    describe('when the suit is greater than 10', () => {
      it('returns 10', () => {
        expect(points('a')).toEqual(10);
      });
    });
  });
  describe('penalty', () => {
    describe('when the rank is not an ace', () => {
      it('returns the negated value of the rank', () => {
        expect(penalty('2')).toEqual(-5);
      });
    });
    describe('when the rank is an ace', () => {
      it('returns negative 15', () => {
        expect(penalty('a')).toEqual(-15);
      });
    });
  });
  describe('sumBin', () => {
    it('adds the rankScore to the sum', () => {
      expect(sumBin(10, 'a')).toEqual(20);  
    });
  });
  describe('seqScore', () => {
    it('scores a sequence of cards', () => {
      expect(seqScore(myDeck)).toEqual(360);
    });
  });
  describe('allAces', () => {
    it('checks if every cards is an ace', () => {
      expect(allAces(myDeck.filter(c => c.rank === 'a'))).toBeTruthy();
    });
  });
  describe('scoreSet', () => {
    it('scores a set of cards', () => {
      expect(scoreSet(myDeck.splice(0, 5))).toEqual(25);
      expect(scoreSet(myDeck.filter(c => c.rank === 'a'))).toEqual(60);
    });
  });
  describe('total', () => {
    it('sums the sets of hands', () => {
      expect(total(s26)).toBe(185);
    });
  });
  describe('penalty', () => {
    it('returns a negated score for cards left in hand', () => {
      expect(penalty('2')).toEqual(-5);
      
      expect(penalty('10')).toEqual(-10);
      expect(penalty('a')).toEqual(-15);
    });
  });
});
