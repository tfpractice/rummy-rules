import { spread, } from 'fenugreek-collections';
import { players, } from '../data';
import { turn, } from './players';
import { deckNext, draw, shiftDk, } from './deck';
import { disAdd, } from './discard';

const range = (len = 0) => spread(Array(len).keys());
const revRange = (len = 0) => range(len).reverse();
const pCount = g => players(g).length;
const dealRange = (ct = 0) => g => revRange(ct * pCount(g));

export const dropNext = g => disAdd(deckNext(g))(shiftDk(g));
export const dealBin = (g, n) => n ? turn(draw(g)) : dropNext(turn(draw(g)));
export const deal = amt => g => dealRange(amt)(g).reduce(dealBin, g);
