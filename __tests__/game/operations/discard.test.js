import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { deck, discard, game, } from 'src/game/data';
import { deckNext, } from 'src/game/operations/deck';

import { disAdd, disDel, disDelTo, disNext, drop, isTop, selectTo, } from 'src/game/operations/discard';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);
const first6 = Deck.deck().slice(0, 6);

const myGame = game([ dick, jane, ], Deck.deck(), []);

describe('discard ops', () => {
  describe('disAdd', () => {
    it('adds a set of cards to the discard pile', () => {
      expect(discard(disAdd(...first3)(myGame)).length).toEqual(3);
    });
  });
  describe('disDel', () => {
    it('removes a set of cards form the discard', () => {
      expect(discard(disDel(...first3)(disAdd(...first6)(myGame))).length).toEqual(3);
    });
  });
  describe('selectTo', () => {
    it('returns all the cards in the discard pile up to the card', () => {
      expect(selectTo(deck(myGame)[2])((disAdd(...first6)(myGame))).length).toEqual(3);
    });
  });
  describe('isTop', () => {
    it('checks if the requested card is at the top of the discard', () => {
      expect(isTop(disNext(myGame))(myGame)).toBeTruthy();
    });
  });
  describe('disDelTo', () => {
    it('removes all cards from the beginning to the selected card', () => {
      expect(discard(disDelTo(deck(myGame)[2])(disAdd(...first6)(myGame))).length).toEqual(3);
    });
  });
  describe('drop', () => {
    it('returns a game with a card appeneded to the discard pile', () => {
      expect(discard(drop(deckNext(myGame))(myGame)).length).toEqual(1);
    });
  });
});
