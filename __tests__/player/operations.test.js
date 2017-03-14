import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand, player, plays, } from 'src/player/data';
import { discard, draw, drawTo, play, } from 'src/player/operations';

const dick = player('dick', [], [], 'dick');
const myDeck = Deck.deck();

describe('Player', () => {
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
