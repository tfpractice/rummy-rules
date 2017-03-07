import 'jasmine-expect';
import { adjRanks, card,copy,hasRank,hasSuit,next,prev, } from 'src/cards/card';

const my2D = card('2','DIAMONDS');

describe('card', () => {
  describe('card', () => {
    it('returns an opbject with suit rank and id', () => {
      expect(my2D).toBeObject();
      expect(my2D.id).toBeTruthy();
    });
  });
  describe('copy', () => {
    it('returns a copied version of the card', () => {
      expect(copy(my2D)).toBeObject();
    });
  }); describe('hasRank', () => {
    it('checks if a card has a certain rank', () => {
      expect(hasRank('2')(my2D)).toBeTruthy();
    });
  });
  describe('hasSuit', () => {
    it('checks if a card has a certain suit', () => {
      expect(hasSuit('DIAMONDS')(my2D)).toBeTruthy();
    });
  });
  describe('next', () => {
    it('returns the next rank of the card', () => {
      expect(next(my2D)).toBe('3');
    });
  });
  
  describe('prev', () => {
    it('returns the next rank of the card', () => {
      expect(prev(my2D)).toBe('a');
    });
  });
  describe('adjRanks', () => {
    it('returns an array of adjacent ranks', () => {
      expect(adjRanks(my2D)).toEqual([ 'a','3', ]);
    });
  });
});
