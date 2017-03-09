import 'jasmine-expect';
import { card, } from 'src/cards/card';
import { diffSuit,isAdj, isMatch,rankAdj, rankDiff,rankOrder,rankSort,xMatch, } from 'src/cards/compare';

const d2 = card('2','DIAMONDS');
const d3 = card('3','DIAMONDS');
const c2 = card('2','CLUBS');
const cA = card('a','CLUBS');

const myCards = [ d2,d3,c2,cA, ];

describe('compare', () => {
  describe('rankOrder', () => {
    it('returns the difference in rankVal of two cards', () => {
      expect(rankOrder(d2, d3)).toEqual(-1);
    });
  });
  describe('rankDiff', () => {
    it('returns the rank difference', () => {
      expect(rankDiff(d2)(d3)).toEqual(-1);
    });
  });
  describe('rankAdj', () => {
    it('checks if two cards have a rankDiff of 1', () => {
      expect(rankAdj(d2)(d3)).toBeTrue();
      expect(rankAdj(c2)(d3)).toBeTrue();
      expect(rankAdj(c2)(c2)).toBeFalse();
    });
  });
  describe('isAdj', () => {
    it('checks if two cards are off the same suit of adjacent rank', () => {
      expect(isAdj(d2)(d3)).toBeTrue();
      expect(isAdj(c2)(d3)).toBeFalse();
    });
  });
  describe('diffSuit', () => {
    it('checks for nonequality between suits', () => {
      expect(diffSuit(d2)(c2)).toBeTrue();
      expect(diffSuit(cA)(c2)).toBeFalse();
    });
  });
  describe('isMatch', () => {
    it('checks for suit and rank equality', () => {
      expect(isMatch(c2)(c2)).toBeTrue();
      expect(isMatch(c2)(d2)).toBeFalse();
    });
  }); 
  describe('xMatch', () => {
    it('checks for suit and rank equality', () => {
      expect(xMatch(c2)(c2)).toBeFalse();
      expect(xMatch(c2)(d2)).toBeTrue();
    });
  });
  describe('rankSort', () => {
    it('sorts an array by increasin rank', () => {
      console.log(rankSort(myCards));
      expect(rankSort(myCards)).toBeArray();
    });
  });
});
