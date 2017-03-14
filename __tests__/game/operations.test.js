import 'jasmine-expect';
import { Deck, } from 'bee52';
import { deck,discard, game, players,setDeck,setDiscard,setPlayers, } 
from 'src/game/data';
import { rotate, } from 'src/game/operations';

const myGame = game([], Deck.shuffle(Deck.deck()),[]);

describe('operations', () => {
  describe('rotate', () => {
    it('places the first element in an array at the end', () => {
      expect(rotate([ 1,2,3, ])).toEqual([ 2,3,1, ]);
    });
  });
});
