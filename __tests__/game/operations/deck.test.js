import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { deck, game, } from 'src/game/data';
import { deckDel, draw, shiftDk, } from 'src/game/operations/deck';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);

const myGame = game([ dick, jane, ], (Deck.deck()), []);

describe('Deck ops', () => {
  describe('shiftDk', () => {
    it('returns a game with a deck containg one fewer card', () => {
      expect(deck(shiftDk(myGame)).length).toEqual(51);
    });
  });
  describe('deckDel', () => {
    it('removes a set of cards form the deck', () => {
      expect(deck(deckDel(...first3)(myGame)).length).toEqual(49);
    });
  });
  describe('draw', () => {
    it('draws the next card to the activ player', () => {
      expect(deck(draw(myGame)).length).toEqual(51);
    });
  });
});
