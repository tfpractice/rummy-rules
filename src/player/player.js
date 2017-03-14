
const init = { name: '', id: null, plays: [], hand: [], }; 

export const player = (name = '', hand = [], plays = [], id = name) => 
  ({ name, hand, plays, id, });
  
export const name = ({ name, } = init) => name;
export const id = ({ id, } = init) => id;
export const hand = ({ hand, } = init) => hand;
export const plays = ({ plays, } = init) => plays;

export const setName = n => p => player(n, hand(p), plays(p), id(p));
export const setHand = h => p => player(name(p), h, plays(p), id(p));
export const setPlays = ps => p => player(name(p), hand(p), ps, id(p));
export const setID = i => p => player(name(p), hand(p), plays(p), i);
