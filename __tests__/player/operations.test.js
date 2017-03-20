import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand, player,sets, } from 'src/player/data';
import { addHand, addSet, draw,drawTo, final, matches, play, playBin, score,scrap,
   update, } from 'src/player/operations';

const myDeck = Deck.deck();
const dick = draw(7)(myDeck.slice(7))(player('dick', [], [], 'dick'));
const jane = draw(7)(myDeck.slice(7))(player('jane', [], [], 'jane'));

describe('Player', () => {
  describe('draw', () => {
    it('adds cards to the players hand', () => {
      expect(hand(draw(7)(myDeck)(dick)).length).toEqual(14);
    });
  });
  describe('drawTo', () => {
    it('appends multiple cards to a players hand', () => {
      expect(hand(drawTo(myDeck[10])(myDeck)(dick)).length).toEqual(14);
    });
  });
  describe('addHand', () => {
    it('adds cards to a players hand', () => {
      expect(hand(addHand(...myDeck.slice(15,17))(jane))).toContain(myDeck[16]);
    });
  });
  describe('scrap', () => {
    it('removes cards from a players hand', () => {
      expect(hand(scrap(hand(dick)[0])(dick)).length).toEqual(6);
    });
  });
  describe('addSet', () => {
    it('apppends a set of crds to th eplayers psets array', () => {
      expect(sets(addSet(hand(dick).slice(0,3))(dick)).length).toEqual(1);
    });
  });
  describe('matches', () => {
    it('checks for player id', () => {
      expect(matches(dick)(dick)).toBeTruthy();
      expect(matches(dick)(jane)).toBeFalse();
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
  describe('playBin', () => {
    it('apppends a set of crds to th eplayers psets array', () => {
      expect(sets(playBin(dick,hand(dick).slice(0,3))).length).toEqual(1);
    });
  });
  describe('update', () => {
    it('replaces the old player with new props if they match', () => {
      expect(hand(update(dick)(dick)).length).toEqual(hand(dick).length);
    });
  });
  describe('play', () => {
    it('plays multiple sets', () => {
      expect(sets(play(1,2,3)(dick))).toBeArray();
    });
  });
});
