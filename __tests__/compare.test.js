import 'jasmine-expect';
import { Card, } from 'bee52';

const { card, } = Card;

import { rankAdj, suitAdj, } from 'src/compare';

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
  describe('suitAdj', () => {
    it('checks if two cards are off the same suit of adjacent rank', () => {
      expect(suitAdj(d2)(c2)).toBeTrue();
      expect(suitAdj(c2)(d3)).toBeFalse();
      expect(suitAdj(c2)(c2)).toBeFalse();
    });
  });
});
