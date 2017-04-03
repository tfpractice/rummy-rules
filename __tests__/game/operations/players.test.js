import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, discard, game, players, } from 'src/game/data';
import { addPlr, claim, claimCards, dropCards, hasPlr, isActive, mendPlr, 
  pushPlr, rmPlr, rotate, turn, } from 'src/game/operations/players';

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
  describe('hasPlr', () => {
    it('checks if any of the players match by id', () => {
      expect(hasPlr(dick)(myGame)).toBeTruthy();
      expect(hasPlr(bob)(myGame)).toBeFalse();
    });
  });
  describe('isActive', () => {
    it('checks for id equality between player and active player of the game', () => {
      expect(isActive(myGame)(dick)).toBeTruthy();
      expect(isActive(myGame)(jane)).toBeFalse();
    });
  });
  describe('mendPlr', () => {
    it('updates players', () => {
      expect(players(mendPlr(jane)(myGame))).toContain(dick);
    });
  });
  describe('pushPlr', () => {
    it('concatenates a new player', () => {
      expect(players(pushPlr(bob)(myGame))).toContain(bob);
    });
  }); 
  describe('addPlr', () => {
    it('concatenates a new player', () => {
      expect(players(addPlr(bob)(myGame))).toContain(bob);
    });
  }); 
  describe('rmPlr', () => {
    it('drops matching player', () => {
      expect(players(rmPlr(jane)(myGame))).not.toContain(jane);
    });
  });
  describe('claimCards', () => {
    it('adds cards to a players hands', () => {
      expect(players(claimCards(...first3)(jane)(myGame))).toBeArray();
    });
  }); 
  describe('dropCards', () => {
    it('adds cards to a players hands', () => {
      expect(players(dropCards(...first3)(jane)(myGame))).toBeArray();
      expect(discard(dropCards(...first3)(jane)(myGame))).toContain(...first3);
    });
  });
  describe('claim', () => {
    it('adds cards to a players hands', () => {
      expect(active(claim(...first3)(myGame)).hand).toContain(first3[0]);
    }); 
  });
});
