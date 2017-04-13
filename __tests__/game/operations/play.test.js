import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, allSets, deck, discard, game, } from 'src/game/data';
import { actClaim, claimSet, clearCards, deckDel, isRummable, play, playable, rumCheck, 
  rumDrop, rummable, rummy,rumSets, } from 'src/game/operations';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const first3 = Deck.deck().slice(0, 3);

const myGame = game([ dick, jane, ], (Deck.deck()), []);
const rumGame = game([ dick, jane, ], (Deck.deck().slice(9)), Deck.deck().slice(0, 9));
const d4 = deck(rumGame).slice(0, 4);
const rClaim = actClaim(...d4)(deckDel(...d4)(rumGame)); 
const queens = deck(rumGame).filter(c => c.rank === 'q');
const rPlay = (play(d4)(active(rClaim))(rClaim));

describe('play', () => {
  describe('clearCards', () => {
    it('removes cards form both the deck and the discard ', () => {
      expect(deck(clearCards(...first3)(myGame))).not.toContain(...first3);
      expect(discard(clearCards(...first3)(myGame))).not.toContain(...first3);
    });
  });
  describe('claimSet', () => {
    it('adds a set to the specified player', () => {
      claimSet(first3.slice(1))(jane)(myGame);
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
  describe('rumSets', () => {
    it('returns al of the playable sets in the discrad pile', () => {
      expect(rumSets(rPlay).length).toEqual(3);
    });
  });
  describe('rummable', () => {
    it('finds the cards that can be played', () => {
      expect(rummable(rPlay).length).toEqual(9);
    });
  });
  describe('isRummable', () => {
    it('checks if a card can be played', () => {
      expect(isRummable(rPlay)(Deck.deck()[0])).toBeTruthy(); 
    });
  });
  describe('rumDrop', () => {
    it('drops the rummable cards from the discard', () => {
      expect(rummable(rumDrop(rPlay)).length).toEqual(0);
    });
  });
  describe('rummy', () => {
    it('adds any rummable cards to the callers sets', () => {
      expect(rumSets(rummy(rumSets(rPlay)[0])(jane)(rPlay)).length).toEqual(0);
      expect(discard(rummy(rumSets(rPlay)[0])(jane)(rPlay))).not.toContain(rummable(rPlay));
    });
  });
});
