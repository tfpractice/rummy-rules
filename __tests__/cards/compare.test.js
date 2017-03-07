import 'jasmine-expect';
import { card,copy,hasRank,hasSuit, } from 'src/cards/card';
import { rankDiff,rankOrder, } from 'src/cards/compare';

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
      expect(rankOrder(d2)(d3)).toEqual(-1);
    });
  });
});
