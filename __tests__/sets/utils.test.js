import 'jasmine-expect';
import { exceeds, len,sameSize, single,xExceeds, } from 'src/sets/utils';

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
  
  describe('sameSize', () => {
    it('checks if the two collections have the same size', () => {
      expect(sameSize([ 1, ])([ 2, ])).toBeTrue();
      expect(sameSize([ 1,2, ])([ 1, ])).toBeFalse();
    });
  });
});
