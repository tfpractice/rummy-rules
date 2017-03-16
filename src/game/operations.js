import { spreadK, } from 'fenugreek-collections';
import { Deck, } from 'bee52';
import { add as addHand, hand, setHand, } from '../player';
import { active, deck, discard, next, passive, players, rest, setActive, 
  setDeck, setDiscard, setPlayers, } from './data';

const { removeCards, addCards, } = Deck;

const range = (len = 0) => [ ...Array(len).keys(), ];
const revRange = (len = 0) => range(len).reverse();
const pCount = g => players(g).length;
const dealRange = (ct = 0) => g => revRange(ct * pCount(g));

export const rotate = ([ first, ...rem ]) => [ ...rem, first, ];

export const turn = game => setPlayers(rotate(players(game)))(game);

export const shiftDk = game => setDeck(rest(game))(game);

export const drop = card => g => setDiscard(addCards(card)(discard(g)))(g);

export const dropNext = g => drop(next(g))(shiftDk(g));

export const actDraw = g => setActive(addHand(next(g))(active(g)))(shiftDk(g));

export const dealBin = (g, n) => n ? turn(actDraw(g)) : dropNext(turn(actDraw(g)));

export const deal = ct => g => dealRange(ct)(g).reduce(dealBin, g);
