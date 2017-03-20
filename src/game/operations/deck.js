import { flattenBin as flat, spreadK, } from 'fenugreek-collections';
import { Deck, } from 'bee52';
import { allFit, isFull, } from '../../sets';
import { addHand, hand, matches, play as playC, plays, setHand,update, } from '../../player';
import { actAdd, } from './players';
import { active, allSets, deck, discard as dPile, next, passive, players, rest, 
  setActive as setAct, setDeck as setDk, setDiscard as setDs, setPlayers as setP, } from '../data';

const { drop, } = Deck;

export const shiftDk = game => setDk(rest(game))(game);
export const rmDeck = (...cards) => g => setDk(drop(...cards)(deck(g)))(g);
export const draw = g => actAdd(next(g))(shiftDk(g));
export const drawNext = g => actAdd(next(g))(shiftDk(g));
