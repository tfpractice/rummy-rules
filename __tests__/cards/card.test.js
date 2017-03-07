import 'jasmine-expect';
import { card,copy,hasRank,hasSuit, } from 'src/cards/card';
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
});
