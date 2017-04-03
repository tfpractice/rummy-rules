import 'jasmine-expect';
import { Deck, } from 'bee52';
import { copy, hand, id,name, player,reset,setHand, setID, setName, sets,setSets, } 
from 'src/player/data';

const dick = player('dick',[],[],'dick');

describe('Player', () => {
  describe('player', () => {
    it('is an object with a name, id, sets, and hand array', () => {
      expect(name(dick)).toBeString();
      expect(id(dick)).toBeString();
      expect(hand(dick)).toBeArray();
      expect(sets(dick)).toBeArray();
    });
  });
  describe('copy', () => {
    it('returns a copy of the player', () => {
      expect(copy(dick)).toEqual(dick);
    });
  });  
  describe('reset', () => {
    it('returns a copy of the player with an empty hand and no sets', () => {
      expect(reset(dick).sets.length).toEqual(0);
    });
  });
  describe('setName,', () => {
    it('sets the attribute', () => {
      expect(name(setName('john')(dick))).toEqual('john');
    });
  });
  describe('setHand,', () => {
    it('sets the attribute', () => {
      expect(id(setID('lol')(dick))).toEqual('lol');
    });
  });
  describe('setSets,', () => {
    it('sets the attribute', () => {
      expect(hand(setHand([ 1,2,3, ])(dick))).toEqual([ 1,2,3, ]);
    });
  });
  describe('setID,', () => {
    it('sets the attribute', () => {
      expect(sets(setSets([ 3,4,5, ])(dick))).toEqual([ 3,4,5, ]);
    });
  });
});
