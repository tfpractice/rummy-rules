import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, allSets,deck, discard, game, next, players, setDeck, setDiscard, setPlayers, } 
from 'src/game/data';

import { actDraw, deal, dealBin,drop, dropNext, play,playable, rotate, shiftDk, turn, } from 'src/game/operations';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const first3 = Deck.deck().slice(0, 4);

const myGame = game([ dick, jane, ], Deck.shuffle(Deck.deck()), []);

describe('operations', () => {
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
  describe('dealBin', () => {
    describe('when given a deal amount', () => {
      it('adds one card to the active players hand', () => {
        expect(deck(dealBin(myGame, 1)).length).toEqual(51);
      });
    });
    describe('when given 0/null', () => {
      it('discards the next card', () => {
        expect(discard(dealBin(myGame, 0)).length).toEqual(1);
        expect(deck(dealBin(myGame, 0)).length).toEqual(50);
      });
    });
  });
  describe('deal', () => {
    it('deals 7 cards to each player', () => {
      expect(deck(deal(7)(myGame)).length).toEqual(37);
    });
  });
  describe('shiftDk', () => {
    it('returns a game with a deck containg one fewer card', () => {
      expect(deck(shiftDk(myGame)).length).toEqual(51);
    });
  });
  describe('drop', () => {
    it('returns a game with a card appeneded to the discard pile', () => {
      expect(discard(drop(next(myGame))(myGame)).length).toEqual(1);
    });
  });
  describe('dropNext', () => {
    it('shifts the deck and discards the first card in the deck', () => {
      expect(deck(dropNext(myGame)).length).toEqual(51);  
    });
  });
  describe('playable', () => {
    it('checks if a set of cards is playable', () => {
      // console.log('playable(...Deck.deck().slice(0,3))(myGame)', playable(...Deck.deck().slice(0, 3))(myGame));
      // console.log÷('...Deck.deck().slice(0, 3)', ...Deck.deck().slice(0, 3));
      const f3 = Deck.deck().slice(0, 4);

      expect(playable(...first3)(myGame)).toBeTruthy();

      // expect(playable(...Deck.deck().slice(0,3))(myGame)).toBeTruthy();
    });
  });
  describe('play', () => {
    it('returns a new game with players changed', () => {
      console.log('allSets(play(first3)(myGame))', play(first3)(myGame));
      expect(allSets(play(first3)(myGame))).toBeTruthy();
    });
  });
});
