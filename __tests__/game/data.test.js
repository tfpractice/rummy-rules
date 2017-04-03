import 'jasmine-expect';
import { Deck, } from 'bee52';
import { active, allSets, deck, discard, game, id, matches, next, passive, players, reset, 
  rest, setDeck, setDiscard, setID, setPlayers, } from 'src/game/data';

const myGame = game([]);

describe('Game', () => {
  describe('game', () => {
    it('returns an object with players, deck, and discard arrays', () => {
      expect(players(myGame)).toBeArray();
      expect(deck(myGame)).toBeArray();
      expect(discard(myGame)).toBeArray();
      expect(id(myGame)).toEqual('default');
    });
  });
  describe('next', () => {
    it('returns the next card in the deck', () => {
      expect(next(myGame)).toEqual(deck(myGame)[0]);
    });
  });
  describe('reset', () => {
    it('returns a game copy with a reshuffled deck and empty discard ', () => {
      expect(deck(reset(myGame)).length).toEqual(52);
    });
  });
  describe('matches', () => {
    it('checks for id equality between games', () => {
      expect(matches(myGame)(myGame)).toBeTruthy();
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
  }); describe('setID', () => {
    it('returns a copy of the game with a new Id', () => {
      expect(id(setID('lol')(game))).toEqual('lol');
    });
  });
  describe('allSets', () => {
    it('returns all of the plays in the game', () => {
      expect(allSets(myGame)).toBeArray();
    });
  });
});
