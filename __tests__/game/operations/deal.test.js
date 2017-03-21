import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { deck, discard, game, } from 'src/game/data';

import { deal, dealBin, } from 'src/game/operations/deal';
const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);

const myGame = game([ dick, jane, ], (Deck.deck()), []);

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
