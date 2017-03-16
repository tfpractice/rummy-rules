import 'jasmine-expect';
import { Deck, } from 'bee52';
import { active, allPlays,deck, discard, game,next, passive, players, rest, setDeck, setDiscard, setPlayers, } 
from 'src/game/data';

const myGame = game([], Deck.shuffle(Deck.deck()), []);

describe('Game', () => {
  describe('game', () => {
    it('returns an object with players, deck, and discard arrays', () => {
      expect(players(myGame)).toBeArray();
      expect(deck(myGame)).toBeArray();
      expect(discard(myGame)).toBeArray();
    });
  });
  describe('next', () => {
    it('returns the next card in the deck', () => {
      expect(next(myGame)).toEqual(deck(myGame)[0]);
    });
  });
  describe('rest', () => {
    it('returns the cards after the first in the deck', () => {
      expect(rest(myGame)).toEqual(deck(myGame).slice(1));
    });
  });
  describe('active', () => {
    it('returns the first player in the players array', () => {
      expect(active(myGame)).toBe(undefined);
      expect(active(setPlayers([ 'active', 'rest', ])(myGame))).toBe('active');
    });
  });
  describe('passive', () => {
    it('returns the inactive players', () => {
      expect(passive(myGame)).toEqual([ ]);
    });
  });
  describe('setPlayers', () => {
    it('updates the players array', () => {
      expect(players(setPlayers([ 'player1', ])(myGame)).length).toEqual(1);
    });
  });
  describe('setDeck', () => {
    it('sets the deck attribute', () => {
      expect(deck(setDeck(Deck.deck())(myGame)).length).toEqual(52);
    });
  });
  describe('setDiscard', () => {
    it('setst he discard attribute', () => {
      expect(discard(setDiscard(Deck.deck().slice(3))(myGame)).length).toBe(49);
    });
  });
  describe('allPlays', () => {
    it('returns all of the plays in the game', () => {
      expect(allPlays(myGame)).toBeArray();
    });
  });
});
