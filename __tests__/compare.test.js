import 'jasmine-expect';
import { card, } from 'src/cards/card';
import { isAdj,rankAdj, suitAdj, } from 'src/compare';

const d2 = card('2','DIAMONDS');
const d3 = card('3','DIAMONDS');
const c2 = card('2','CLUBS');
const cA = card('a','CLUBS');

const myCards = [ d2,d3,c2,cA, ];

describe('compare', () => {
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
});
