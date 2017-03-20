import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { allSets, deck, game, } from 'src/game/data';

import { play,playable, playPartial, playWhole, } from 'src/game/operations';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);

const myGame = game([ dick, jane, ], (Deck.deck()), []);

describe('play', () => {
  describe('playWhole', () => {
    it('adds a set of cards to the active playerrs sets', () => {
      expect(allSets(playWhole(...first3)(myGame)).length).toEqual(1);
    });
  });
  describe('playPartial', () => {
    it('plays a partial set of cards', () => {
      const clubGame = playWhole(...first3)(myGame);
      const next2 = deck(myGame).slice(3, 5);

      expect(allSets(playPartial(...next2)(clubGame)).length).toEqual(3);
    });
  });
  describe('playable', () => {
    it('checks if a set of cards is playable', () => {
      expect(playable(...first3)(myGame)).toBeTruthy();
    });
  });
  describe('play', () => {
    it('returns a new game with players changed', () => {
      expect(allSets(play(...first3)(myGame))).toBeTruthy();
    });
  });
});
