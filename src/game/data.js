import { Deck, } from 'bee52';
import { first, flattenBin as flat, map, spread, } from 'fenugreek-collections';
import { reset as reset_p, sets, } from '../player';

export const game = (players = [], deck = Deck.shuffle(), discard = [], id = 'default') =>
 ({ players, deck, discard, id, });

export const players = ({ players, } = game()) => spread(players);
export const deck = ({ deck, } = game()) => spread(deck);
export const discard = ({ discard, } = game()) => spread(discard);
export const id = ({ id, } = game()) => id;

export const setPlayers = plrs => g => game(plrs, deck(g), discard(g), id(g));
export const setDeck = dk => g => game(players(g), dk, discard(g), id(g));
export const setDiscard = ds => g => game(players(g), deck(g), ds, id(g));
export const setID = i => g => game(players(g), deck(g), discard(g), i);

export const matches = next => g => id(next) === id(g);
export const copy = g => game(players(g), deck(g), discard(g), id(g));
export const reset = g => [ setPlayers(map(players(g))(reset_p)),
  setDiscard(), setDeck(), ].reduce((res, f) => f(res), copy(g));

export const active = g => first(players(g));
export const passive = g => players(g).slice(1);

export const allSets = g => players(g).map(sets).reduce(flat, []);
