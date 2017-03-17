const init = { name: '', id: null, sets: [], hand: [], }; 

export const player = (name = '', hand = [], sets = [], id = name) => 
  ({ name, hand, sets, id, });
  
export const name = ({ name, } = init) => name;
export const id = ({ id, } = init) => id;
export const hand = ({ hand, } = init) => hand;
export const sets = ({ sets, } = init) => sets;

export const copy = p => player(name(p), hand(p), sets(p), id(p));
export const update = next => p => next.id === p.id ? copy(next) : p;

export const setName = n => p => player(n, hand(p), sets(p), id(p));
export const setHand = h => p => player(name(p), h, sets(p), id(p));
export const setSets = s => p => player(name(p), hand(p), s, id(p));
export const setID = i => p => player(name(p), hand(p), sets(p), i);
