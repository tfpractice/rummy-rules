import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, game, players, } 
from 'src/game/data';

import { actAdd, addCards, addPlayer, addPlr, catPlr, hasP, rotate, turn, updateP, } from 'src/game/operations/players';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);

const myGame = game([ dick, jane, ], (Deck.deck()), []);

describe('Player ops', () => {
  describe('rotate', () => {
    it('places the first element in an array at the end', () => {
      expect(rotate([ 1, 2, 3, ])).toEqual([ 2, 3, 1, ]);
    });
  });
  describe('turn', () => {
    it('rotates the ggames players', () => {
      expect(players(turn(myGame))).toEqual([ jane, dick, ]);
    });
  });
  describe('hasP', () => {
    it('checks if any of the players match by id', () => {
      expect(hasP(dick)(myGame)).toBeTruthy();
      expect(hasP(bob)(myGame)).toBeFalse();
    });
  });
  describe('updateP', () => {
    it('updates players', () => {
      expect(players(updateP(jane)(myGame))).toContain(dick);
    });
  });
  describe('catPlr', () => {
    it('concatenates a new player', () => {
      expect(players(catPlr(bob)(myGame))).toContain(bob);
    });
  });
  describe('addCards', () => {
    it('adds cards to a players hands', () => {
      expect(players(addCards(...first3)(jane)(myGame))).toBeArray();
    });
  });
  describe('actAdd', () => {
    it('adds cards to a players hands', () => {
      expect(active(actAdd(...first3)(myGame)).hand).toContain(first3[0]);
    }); 
  });
});
