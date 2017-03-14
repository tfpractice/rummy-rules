import 'jasmine-expect';
import { Card, } from 'bee52';
import { rankAdj, suitAdj, } from 'src/compare';

const { card, } = Card;

const d2 = card('2','DIAMONDS');
const d3 = card('3','DIAMONDS');
const c2 = card('2','CLUBS');
const cA = card('a','CLUBS');

describe('compare', () => {
  describe('rankAdj', () => {
    it('checks if two cards have the same suit and adjacent ranks', () => {
      expect(rankAdj(d2)(d3)).toBeTrue();
      expect(rankAdj(c2)(d3)).toBeFalse();
      expect(rankAdj(c2)(c2)).toBeFalse();
    });
  });
  describe('suitAdj', () => {
    it('checks if two cards are have the smae rank and different suits', () => {
      expect(suitAdj(d2)(c2)).toBeTrue();
      expect(suitAdj(c2)(d3)).toBeFalse();
      expect(suitAdj(c2)(c2)).toBeFalse();
    });
  });
});
