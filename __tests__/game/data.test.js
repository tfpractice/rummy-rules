import 'jasmine-expect';
import { Deck, } from 'bee52';
import { deck,discard, game, players,setDeck,setDiscard,setPlayers, } 
from 'src/game/data';

const myGame = game([], Deck.shuffle(Deck.deck()),[]);

describe('Game', () => {
  describe('game', () => {
    it('returns an object with players, deck, and discard arrays', () => {
      expect(players(myGame)).toBeArray();
      expect(deck(myGame)).toBeArray();
      expect(discard(myGame)).toBeArray();
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
});
