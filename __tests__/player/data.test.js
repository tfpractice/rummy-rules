import 'jasmine-expect';
import { Deck, } from 'bee52';
import { addSet, draw, } from 'src/player/operations';
import { copy, final, hand, id, matches, name, player, reset, score, setHand,
  setID, setName, sets, setSets, update, xMatches, } from 'src/player/data';

const myDeck = Deck.deck();
const dick = draw(7)(myDeck.slice(7))(player('dick', [], [], 'dick'));
const jane = draw(7)(myDeck.slice(7))(player('jane', [], [], 'jane'));

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
      expect(hand(setHand([ 1, 2, 3, ])(dick))).toEqual([ 1, 2, 3, ]);
    });
  });
  describe('setID,', () => {
    it('sets the attribute', () => {
      expect(sets(setSets([ 3, 4, 5, ])(dick))).toEqual([ 3, 4, 5, ]);
    });
  });
  describe('matches', () => {
    it('checks for player id equality', () => {
      expect(matches({})([])).toBeTruthy();
      expect(matches(dick)(dick)).toBeTruthy();
      expect(matches(dick)(jane)).toBeFalse();
    });
  });
  describe('xMatches', () => {
    it('checks for player id non-equality', () => {
      expect(xMatches(dick)(jane)).toBeTruthy();
      expect(xMatches(dick)(dick)).toBeFalse();
    });
  });
  describe('score', () => {
    it('calculates the points of theplayers sets', () => {
      expect(score(dick)).toEqual(0);
      expect(score(addSet(myDeck.filter(x => x.rank === '2'))(dick))).toBe(20);
    });
  });
  describe('final', () => {
    it('return the score minus the leftover deductions', () => {
      expect(final(addSet(myDeck.filter(x => x.rank === '2'))(dick))).toBe(-40);
    });
  });
  describe('update', () => {
    it('replaces the old player with new props if they match', () => {
      expect(hand(update(dick)(dick)).length).toEqual(hand(dick).length);
    });
  });
});
