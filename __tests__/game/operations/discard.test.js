import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { deck, discard, game, next, setDiscard, } from 'src/game/data';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);

import { addToDs, drawDs, drawTo, drop, dropNext, rmDs, } from 'src/game/operations/discard';
const myGame = game([ dick, jane, ], (Deck.deck()), []);

describe('discard ops', () => {
  describe('rmDs', () => {
    it('removes a set of cards form the deck', () => {
      expect(discard(rmDs(...first3)(setDiscard(deck(myGame).slice(0, 6))(myGame))).length).toEqual(3);
    });
  });
  describe('drawDs', () => {
    it('draws multiple cards from the discard pile', () => {
      expect(discard(drawDs(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame))).length).toEqual(5);
      expect(discard(drawDs(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame)))).not.toContain(first3[2]);
    });
  });
  describe('drawTo', () => {
    it('draws multiple cards into the active players hand', () => {
      expect(discard(drawTo(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame)))).not.toContain(first3[2]);
      expect(discard(drawTo(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame))).length).toEqual(3);
    });
  });
  describe('addToDs', () => {
    it('adds cards to the discard pile', () => {
      expect(discard(addToDs(...first3)(myGame))).toContain(first3[0]);
    });
  });
  describe('drop', () => {
    it('returns a game with a card appeneded to the discard pile', () => {
      expect(discard(drop(next(myGame))(myGame)).length).toEqual(1);
    });
  });
  
  describe('dropNext', () => {
    it('shifts the deck and discards the first card in the deck', () => {
      expect(deck(dropNext(myGame)).length).toEqual(51);  
    });
  });
});
