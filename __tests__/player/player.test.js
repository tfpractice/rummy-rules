import 'jasmine-expect';
import { hand, id, name, player, plays,setHand,setID,setName,setPlays, }
 from 'src/player/player';
const dick = player('dick',[],[],'dick');

describe('Player', () => {
  describe('player', () => {
    it('is an object with a name, id, plays, and hand array', () => {
      expect(name(dick)).toBeString();
      expect(id(dick)).toBeString();
      expect(hand(dick)).toBeArray();
      expect(plays(dick)).toBeArray();
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
  describe('setPlays,', () => {
    it('sets the attribute', () => {
      expect(hand(setHand([ 1,2,3, ])(dick))).toEqual([ 1,2,3, ]);
    });
  });
  describe('setID,', () => {
    it('sets the attribute', () => {
      expect(plays(setPlays([ 3,4,5, ])(dick))).toEqual([ 3,4,5, ]);
    });
  });
});
