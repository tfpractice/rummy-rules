import { spread, } from 'fenugreek-collections';

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

export const copy = p => player(name(p), hand(p), sets(p), id(p));
export const reset = p => 
  [ setHand(), setSets(), ].reduce((res, fn) => fn(res), copy(p));
