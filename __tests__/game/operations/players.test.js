import 'jasmine-expect';
import { Deck, } from 'bee52';
import { hand, matches, player, } from 'src/player';
import { active, deck, discard, game, players, } from 'src/game/data';
import { disAdd, } from 'src/game/operations/discard';
import { actClaim, addPlr, canDraw, canPlayDraw, claimCards, deckDraw, disDraw, 
  drawable, drawTo, dropCards, findPlr, hasPlr, isActive, mendPlr, playerByID,
   pushPlr, rmPlr, rotate, scrapCards, turn, } from 'src/game/operations/players';

import { claimSet, deckDel, play, } from 'src/game/operations';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);
const first6 = Deck.deck().slice(0, 6);
const spade3 = Deck.deck()[40];
const club2 = Deck.deck().splice(0, 1).pop();
const club5 = Deck.deck().splice(3, 1).pop();
const myGame = game([ dick, jane, ], (Deck.deck()), []);
const rumGame = game([ dick, jane, ], (Deck.deck().slice(9)), Deck.deck().slice(0, 9).concat(spade3));
const d4 = deck(rumGame).slice(0, 4);
const rClaim = actClaim(...d4)(deckDel(...d4)(rumGame)); 
const queens = deck(rumGame).filter(c => c.rank === 'q');
const rPlay = (play(d4)(active(rClaim))(rClaim));

describe('Player ops', () => {
  describe('rotate', () => {
    it('places the first element in an array at the end', () => {
      expect(rotate([ 1, 2, 3, ])).toEqual([ 2, 3, 1, ]);
      expect(rotate([])).toEqual([ ]);
      expect(rotate()).toEqual([ ]);
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
      expect(hasPlr()(myGame)).toBeFalsy();
    });
  });  
  describe('findPlr', () => {
    it('returns a matched player', () => {
      expect(findPlr(dick)(myGame)).toBeTruthy();
      expect(findPlr(bob)(myGame)).toBeFalsy();
      expect(findPlr()(myGame)).toBeFalsy();
    });
  });
  describe('playerByID', () => {
    it('returns a matched player', () => {
      expect(playerByID((dick.id))(myGame)).toBeTruthy();
      expect(playerByID((bob.id))(myGame)).toBeFalsy();
      expect(playerByID()(myGame)).toBeFalsy();
      expect(playerByID(null)(myGame)).toBeFalsy();
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
      expect(hand(players(claimCards(...first3)(jane)(myGame)).find(matches(jane)))).toContain(...first3);
      expect(players(claimCards()()())).toBeArray();
    });
  }); 
  describe('actClaim', () => {
    it('adds cards to the active players hand', () => {
      expect(players(actClaim(...first3)(myGame))).toBeArray();
      expect(hand(players(actClaim(...first3)(myGame)).find(matches(active(myGame))))).toContain(...first3);
      expect(players(actClaim()())).toBeArray();
    });
  }); 
  describe('scrapCards', () => {
    it('removes cards from a players hand', () => {
      expect(hand(players(scrapCards(...first3)(jane)(myGame)).find(matches(jane)))).not.toContain(...first3);
    });
  });
  describe('dropCards', () => {
    it('adds cards to a players hands', () => {
      expect(players(dropCards(...first3)(active(myGame))(myGame))).toBeArray();
      expect(discard(dropCards(...first3)(active(myGame))(myGame))).toContain(...first3);
      expect(discard(dropCards(...first3)(jane)(myGame))).not.toContain(...first3);
    });
  });
  describe('actClaim', () => {
    it('adds cards to a players hands', () => {
      expect(active(actClaim(...first3)(myGame)).hand).toContain(first3[0]);
    }); 
  });
  
  describe('deckDraw', () => {
    describe('when player is active', () => {
      it('draws the next card to thespecified player', () => {
        expect(deck(deckDraw(dick)(myGame)).length).toEqual(51);
      });
    });
    describe('when player is inactive', () => {
      it('draws the next card to thespecified player', () => {
        expect(deck(deckDraw(jane)(myGame)).length).toEqual(52);
      });
    });
  });
  describe('disDraw', () => {
    it('draws multiple cards from the discard pile', () => {
      expect(discard(disDraw(first3[2])(dick)(disAdd(...first6)(myGame))).length).toEqual(5);
      expect(discard(disDraw(first3[2])(jane)(disAdd(...first6)(myGame))).length).not.toEqual(5);
      expect(discard(disDraw(first3[2])(dick)(disAdd(...first6)(myGame)))).not.toContain(first3[2]);
      expect(discard(disDraw(first3[2])(jane)(disAdd(...first6)(myGame)))).not.toContain(first3[2]);
    });
  });  
  describe('drawTo', () => {
    it('draws multiple cards into the active players hand', () => {
      expect(discard(drawTo(first3[2])(jane)(disAdd(...first6)(myGame)))).not.toContain(first3[2]);
      expect(discard(drawTo(first3[2])(dick)(disAdd(...first6)(myGame))).length).not.toEqual(5);
    });
  });
  describe('canPlayDraw', () => {
    it('determins if a player can draw a card from discard', () => {
      expect(canPlayDraw(club5)(active(rPlay))(rPlay)).toBeTrue();
      expect(canPlayDraw(club2)(active(rPlay))(rPlay)).toBeTrue();
      expect(canPlayDraw(spade3)(active(rPlay))(rPlay)).toBeFalse();
    });
  }); 
  describe('drawable', () => {
    it('checks if a card is the top card or can be played as part of a set', () => {
      expect(drawable(club5)(active(rPlay))(rPlay)).toBeTrue();
      expect(drawable(club2)(active(rPlay))(rPlay)).toBeTrue();
      expect(drawable(spade3)(active(rPlay))(rPlay)).toBeFalse();
    });
  });
  describe('canDraw', () => {
    it('determins if a player can draw a card from discard', () => {
      expect(canDraw(club2)(active(rPlay))(rPlay)).toBeTrue();
      expect(canDraw(club2)(jane)(rPlay)).toBeFalse();
      expect(canDraw(club5)(active(rPlay))(rPlay)).toBeTrue();
      expect(canDraw(spade3)(active(rPlay))(rPlay)).toBeFalse();
    });
  });
});
