import { spreadK, } from 'fenugreek-collections';
import { Deck, } from 'bee52';
import { add, draw, hand, setHand, } from '../player';
import { active, deck,passive,players,setActive,setDeck,setPlayers, } from './data';

const { diff, removeCards, addCards, } = Deck;

const range = len => [ ...Array(len).keys(), ];
const revRange = len => range(len).reverse();
const pCount = g => players(g).length;

export const rotate = ([ first, ...rest ]) => [ ...rest, first, ];

export const turn = game => setPlayers(rotate(players(game)))(game);
export const shiftDeck = game => setDeck(deck(game).slice(1))(game);

export const actDraw = g => setActive(draw(1)(deck(g))(active(g)))(shiftDeck(g));
export const dealBin = (g,num) => num ? turn(actDraw(g)) : g;

export const deal = (amt = 0) => g => revRange(amt * pCount(g)).reduce(dealBin, g);
