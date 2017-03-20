import { flattenBin as flat, spreadK, } from 'fenugreek-collections';
import { Deck, } from 'bee52';
import { allFit, isFull, } from '../../sets';
import { addHand, hand, play as playC, plays, setHand, } from '../../player';
import { active, allSets, deck, discard as dPile, next, passive, players, rest, 
  setActive as setAct, setDeck as setDk, setDiscard as setDs, setPlayers, } from '../data';

const { add, drop: dropD, drawTo: multiDraw, } = Deck;

const range = (len = 0) => [ ...Array(len).keys(), ];
const revRange = (len = 0) => range(len).reverse();
const pCount = g => players(g).length;
const dealRange = (ct = 0) => g => revRange(ct * pCount(g));

export const rotate = ([ first, ...rem ]) => [ ...rem, first, ];

export const turn = game => setPlayers(rotate(players(game)))(game);
export const addAct = (...cards) => g => setAct(addHand(...cards)(active(g)))(g);

export const shiftDk = game => setDk(rest(game))(game);
export const rmDeck = (...cards) => g => setDk(dropD(...cards)(deck(g)))(g);

export const rmDs = (...cards) => g => 
  setDs(dropD(...cards)(dPile(g)))(rmDeck(...cards)(g));
  
export const addToDs = (...cards) => g =>
  setDs(add(...cards)(dPile(g)))(rmDeck(...cards)(g));

export const drop = (...cards) => g => addToDs(...cards)(rmDeck(...cards)(g));
export const dropNext = g => drop(next(g))(g);

export const draw = g => addAct(next(g))(shiftDk(g));

export const drawDs = (...cards) => g => addAct(...cards)(rmDs(...cards)(g));
export const drawTo = card => g => drawDs(...Deck.drawTo(card)(dPile(g)))(g);

export const dealBin = (g, n) => n ? turn(draw(g)) : dropNext(turn(draw(g)));
export const deal = amt => g => dealRange(amt)(g).reduce(dealBin, g);

export const actPlay = (...cards) => g => playC(...cards)(active(g));
export const playWhole = (...cards) => g => setAct(playC(cards)(active(g)))(g);
export const playPartial = (...cards) => g => setAct(playC(...cards)(active(g)))(g);

export const playByType = set => g =>
  isFull(...set) ? playWhole(...set)(g) : playPartial(...set)(g);

export const playable = (...cards) => g =>
 [ isFull, allFit(allSets(g)), ].some(f => f(...cards));

export const play = (...cards) => g =>
 playable(...cards)(g) ? turn(playByType(cards)(rmDeck(...cards)(g))) : g;
