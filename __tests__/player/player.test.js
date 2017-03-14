import 'jasmine-expect';
import { Deck, } from 'bee52';
import { discard, draw, drawTo, hand, id,name,play,player,plays, 
  setHand,
  setID,
  setName,
  setPlays, }
 from 'src/player/player';
 
const { shuffle, deck, } = Deck;
const dick = player('dick',[],[],'dick');
const myDeck = deck();

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
  describe('draw', () => {
    it('adds cards to the players hand', () => {
      expect(hand(draw(7)(myDeck)(dick)).length).toEqual(7);
    });
  });
  describe('drawTo', () => {
    it('draws all cards to the specified one and adds them ot player hand', () => {
      expect(hand(drawTo(myDeck[10])(myDeck)(dick)).length).toEqual(11);
    });
  });
});
