import 'jasmine-expect';
import { exceeds, len,single, xExceeds, } from 'src/sets/utils';
describe('utils', () => {
  describe('len', () => {
    it('returns the length of a collection', () => {
      expect(len([ 1, ])).toEqual(1);
    });
  });
  describe('exceeds', () => {
    it('checks if the length is greater than a limit', () => {
      expect(exceeds(1)([ 1,2,3, ])).toBeTruthy();
    });
  });
  describe('xExceeds', () => {
    it('checks if the length does not exceed a limit', () => {
      expect(xExceeds(1)([ 1, ])).toEqual(exceeds(0)([ 1, ]));
    });
  }); describe('single', () => {
    it('checks if the array lenght is 1', () => {
      expect(single([ 1, ])).toBeTruthy();
    });
  });
});
