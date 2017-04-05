import { spread, } from 'fenugreek-collections';
import { deduct, total, } from '../score';

export const player = (name = '', hand = [], sets = [], id = name) => 
  ({ name, hand, sets, id, });

export const name = ({ name, } = player()) => name;
export const id = ({ id, } = player()) => id;
export const hand = ({ hand, } = player()) => spread(hand);
export const sets = ({ sets, } = player()) => spread(sets);

export const setName = n => p => player(n, hand(p), sets(p), id(p));
export const setHand = h => p => player(name(p), spread(h), sets(p), id(p));
export const setSets = s => p => player(name(p), hand(p), spread(s), id(p));
export const setID = i => p => player(name(p), hand(p), sets(p), i);

export const matches = next => p => id(next) === id(p);
export const xMatches = next => p => !matches(next)(p);

export const copy = p => player(name(p), hand(p), sets(p), id(p));
export const update = next => p => matches(next)(p) ? copy(next) : p;
export const reset = p => 
  [ setHand(), setSets(), ].reduce((res, fn) => fn(res), copy(p));

export const score = p => total(sets(p));
export const final = p => total(sets(p)) + deduct(hand(p));
