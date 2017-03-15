import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, deck, discard, game, players, setDeck, setDiscard, setPlayers, } 
from 'src/game/data';

import { deal, dealBin, rotate,turn, } from 'src/game/operations';

const dick = player('dick', [],[],'dick');
const jane = player('jane', [],[],'jane');

const myGame = game([ dick, jane, ], Deck.shuffle(Deck.deck()), []);

describe('operations', () => {
  describe('rotate', () => {
    it('places the first element in an array at the end', () => {
      expect(rotate([ 1, 2, 3, ])).toEqual([ 2, 3, 1, ]);
    });
  });
  describe('turn', () => {
    it('rotates the ggames players', () => {
      expect(players(turn(myGame))).toEqual([ jane,dick, ]);
    });
  });
  describe('dealBin', () => {
    it('draws 7 cards from the game', () => {
      expect(deck(dealBin(myGame, 1)).length).toEqual(51);
    });
  });
  describe('deal', () => {
    it('deals 7 cards to each player', () => {
      console.log(players(deal(7)(myGame)));
      expect(deck(deal(7)(myGame)).length).toEqual(39);
    });
  });
});
