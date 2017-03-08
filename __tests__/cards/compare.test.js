import 'jasmine-expect';
import { card,copy,hasRank,hasSuit, } from 'src/cards/card';
import { diffSuit,isAdj, isEquiv,rankAdj,rankDiff, rankOrder, } from 'src/cards/compare';

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
    it('checks if two cards are off the same suit and adjacent buy rank', () => {
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
  describe('isEquiv', () => {
    it('checks for suit and rank equality', () => {
      expect(isEquiv(c2)(c2)).toBeTrue();
      expect(isEquiv(c2)(d2)).toBeFalse();
    });
  });
});
