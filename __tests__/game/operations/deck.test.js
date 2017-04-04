import 'jasmine-expect';
import { Card, Deck, } from 'bee52';
import { player, } from 'src/player';
import { deck, game, setDeck, } from 'src/game/data';
import { deckAdd, deckDel, deckDraw, deckNext, draw, shiftDk, } from 'src/game/operations/deck';

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
  describe('deckAdd', () => {
    it('removes a set of cards form the deck', () => {
      expect(deck(deckAdd(...first3)(myGame)).length).toEqual(52);
    });
  });
  describe('deckNext', () => {
    it('retrieves the next card in the deck', () => {
      expect(Card.suit(deckNext(myGame))).toBeTruthy();
      expect(Card.rank(deckNext(myGame))).toBeTruthy();
      expect((deckNext(setDeck([])(myGame)))).toBeFalsy();
      expect((deckNext(setDeck([])(myGame)))).toBeFalsy();
    });
  });
  describe('draw', () => {
    it('draws the next card to the activ player', () => {
      expect(deck(draw(myGame)).length).toEqual(51);
    });
  });
});
