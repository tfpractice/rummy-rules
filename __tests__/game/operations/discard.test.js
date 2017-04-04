import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { deck, discard, game, next, setDiscard, } from 'src/game/data';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);
const first6 = Deck.deck().slice(0, 6);

import { disAdd, disDel, disDelTo, drop, selectTo, } from 'src/game/operations/discard';
const myGame = game([ dick, jane, ], Deck.deck(), []);

describe('discard ops', () => {
  describe('disAdd', () => {
    it('adds a set of cards to the discard pile', () => {
      expect(discard(disAdd(...first3)(myGame)).length).toEqual(3);
    });
  });
  describe('disDel', () => {
    it('removes a set of cards form the discard', () => {
      expect(discard(disDel(...first3)(disAdd(...first6)(myGame))).length).toEqual(3);
    });
  });
  describe('selectTo', () => {
    it('returns all the cards in the discard pile up to the card', () => {
      expect(selectTo(deck(myGame)[2])((disAdd(...first6)(myGame))).length).toEqual(3);
    });
  });
  describe('disDelTo', () => {
    it('removes all cards from the beginning to the selected card', () => {
      console.log('discard(disDelTo(deck(myGame)[2])(disAdd(...first6)(myGame)))', discard(disDelTo()(disAdd(...first6)(myGame))));
      expect(discard(disDelTo(deck(myGame)[2])(disAdd(...first6)(myGame))).length).toEqual(3);
    });
  });

  // describe('disDraw', () => {
  //   it('draws multiple cards from the discard pile', () => {
  //     expect(discard(disDraw(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame))).length).toEqual(5);
  //     expect(discard(disDraw(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame)))).not.toContain(first3[2]);
  //   });
  // });
  // describe('drawTo', () => {
  //   it('draws multiple cards into the active players hand', () => {
  //     expect(discard(drawTo(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame)))).not.toContain(first3[2]);
  //     expect(discard(drawTo(first3[2])(setDiscard(deck(myGame).slice(0, 6))(myGame))).length).toEqual(3);
  //   });
  // });
  // describe('disAdd', () => {
  //   it('adds cards to the discard pile', () => {
  //     expect(discard(disAdd(...first3)(myGame))).toContain(first3[0]);
  //   });
  // });
  describe('drop', () => {
    it('returns a game with a card appeneded to the discard pile', () => {
      expect(discard(drop(next(myGame))(myGame)).length).toEqual(1);
    });
  });
  
  // describe('dropNext', () => {
  //   it('shifts the deck and discards the first card in the deck', () => {
  //     expect(deck(dropNext(myGame)).length).toEqual(51);  
  //   });
  // });
});
