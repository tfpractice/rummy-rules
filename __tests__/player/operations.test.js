import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand, player, plays, } from 'src/player/data';
import { discard, draw, drawTo, play, } from 'src/player/operations';

const myDeck = Deck.deck();
const dick = draw(7)(myDeck.slice(7))(player('dick', [], [], 'dick'));

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
  describe('discard', () => {
    it('removes cards from a players hand', () => {
      expect(hand(discard(hand(dick)[0])(dick)).length).toEqual(6);
    });
  });
  describe('play', () => {
    it('apppends a set of crds to th eplayers pplays array', () => {
      expect(plays(play(...hand(dick).splice(3))(dick)).length).toEqual(1);
    });
  });
});
