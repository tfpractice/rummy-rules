import { Deck, } from 'bee52';
import { first, flattenBin as flat, map, spread, } from 'fenugreek-collections';
import { reset as reset_p, sets, } from '../player';

const fresh = () => Deck.shuffle(Deck.deck());
const init = { players: [], deck: fresh(), discard: [], id: 'default', }; 

export const game = (players = [], deck = fresh(), discard = [], id = 'default') =>
 ({ players, deck, discard, id, });

export const players = ({ players, } = init) => spread(players);
export const deck = ({ deck, } = init) => spread(deck);
export const discard = ({ discard, } = init) => spread(discard);
export const id = ({ id, } = init) => id;

export const setPlayers = plrs => g => game(spread(plrs), deck(g), discard(g), id(g));
export const setDeck = (dk = fresh()) => g => game(players(g), spread(dk), discard(g), id(g));
export const setDiscard = ds => g => game(players(g), deck(g), spread(ds), id(g));
export const setID = i => g => game(players(g), deck(g), discard(g), i);

export const copy = g => game(players(g), deck(g), discard(g), id(g));
export const reset = g => [ setPlayers(map(players(g))(reset_p)),
  setDiscard(), setDeck(), ].reduce((res, f) => f(res), copy(g));
export const matches = next => g => id(next) === id(g);

export const next = g => Deck.next(deck(g));
export const rest = g => Deck.rest(deck(g));

export const active = g => first(players(g));
export const passive = g => players(g).slice(1);

export const allSets = g => players(g).map(sets).reduce(flat, []);
