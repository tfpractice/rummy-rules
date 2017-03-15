import 'jasmine-expect';
import { Deck, } from 'bee52';

import { deck, discard, game, players, setDeck, setDiscard, setPlayers, } 
from 'src/game/data';

import { rotate, turn, } from 'src/game/operations';

const myGame = game([ 1,2, ], Deck.shuffle(Deck.deck()), []);

describe('operations', () => {
  describe('rotate', () => {
    it('places the first element in an array at the end', () => {
      expect(rotate([ 1, 2, 3, ])).toEqual([ 2, 3, 1, ]);
    });
  });
  describe('turn', () => {
    it('rotates the ggames players', () => {
      expect(players(turn(myGame))).toEqual([ 2, 1, ]);
    });
  });
});
