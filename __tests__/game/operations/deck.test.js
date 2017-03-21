import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, allSets, deck, discard, game, next, players, setDeck, setDiscard, setPlayers, } 
from 'src/game/data';

import { addToDs, deal, dealBin, drawDs, drawTo, drop, dropNext, play,
   playable, playPartial, playWhole, rmDs, } from 'src/game/operations';

import { actAdd, addCards, addPlayer, addPlr, catPlr, hasP, rotate, turn, updateP, } from 'src/game/operations/players';
import { draw,rmDeck,shiftDk, } from 'src/game/operations/deck';
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
  describe('rmDeck', () => {
    it('removes a set of cards form the deck', () => {
      expect(deck(rmDeck(...first3)(myGame)).length).toEqual(49);
    });
  });
  describe('draw', () => {
    it('draws the next card to the activ player', () => {
      expect(deck(draw(myGame)).length).toEqual(51);
    });
  });
});