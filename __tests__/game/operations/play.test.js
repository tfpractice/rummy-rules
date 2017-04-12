import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, allSets, deck, discard, game, } from 'src/game/data';
import { actClaim, claimSet, deckDel, isRummable, play, playable, rumCheck, 
  rumDrop, rummable, rummy, } from 'src/game/operations';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);

const myGame = game([ dick, jane, ], (Deck.deck()), []);
const rumGame = game([ dick, jane, ], (Deck.deck().slice(9)), Deck.deck().slice(0, 9));
const d4 = deck(rumGame).slice(0, 4);
const rClaim = actClaim(...d4)(deckDel(...d4)(rumGame)); 
const queens = deck(rumGame).filter(c => c.rank === 'q');
const rPlay = (play(d4)(active(rClaim))(rClaim));

describe('play', () => {
  describe('playable', () => {
    it('checks if a set of cards is playable', () => {
      // expect(playable(myGame)(first3)).toBeTruthy();
      // expect(playable(myGame)()).toBeFalsy();
    });
  });
  describe('claimSet', () => {
    it('adds a set to the specified player', () => {
      expect(allSets(claimSet(first3)(jane)(myGame))).toBeArray();
    });
  });
  describe('play', () => {
    it('returns a new game with players changed', () => {
      expect(allSets(play(first3)(active(myGame))(myGame))).toBeTruthy();
    });
  });
  describe('rumCheck', () => {
    it('checks if any of the discarded cards will fit into a set', () => {
      expect(rumCheck(myGame)).toBeFalse();
      expect(rumCheck(rPlay)).toBeTrue();
    });
  });
  describe('rummable', () => {
    it('finds the cards that can be played', () => {
      expect(rummable(rPlay).length).toEqual(9);
    });
  });
  describe('isRummable', () => {
    it('checks if a card can be played', () => {
      expect(isRummable(Deck.deck()[0])(rPlay)).toBeTruthy(); 
    });
  });
  describe('rumDrop', () => {
    it('drops the rummable cards from the discard', () => {
      expect(rummable(rumDrop(rPlay)).length).toEqual(0);
    });
  });
  describe('rummy', () => {
    it('adds any rummable cards to the callers sets', () => {
      expect(rummable(rummy(jane)(rPlay)).length).toEqual(0);
      expect(discard(rummy(jane)(rPlay))).not.toContain(rummable(rPlay)[0]);
    });
  });
});
