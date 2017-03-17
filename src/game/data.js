import { Deck, } from 'bee52';
import { flattenBin as flat, } from 'fenugreek-collections';
import { plays, } from '../player';
const { deck: bDeck, shuffle, } = Deck;
const init = { players: [], deck: shuffle(bDeck()), discard: [], }; 

export const game = (players = [], deck = [], discard = []) =>
 ({ players, deck, discard, });

export const players = ({ players, } = init) => players;
export const deck = ({ deck, } = init) => deck;
export const discard = ({ discard, } = init) => discard;
export const copy = g => game(players(g), deck(g), discard(g));

export const setPlayers = plrs => g => game(plrs, deck(g), discard(g));
export const setDeck = dk => g => game(players(g), dk, discard(g));
export const setDiscard = ds => g => game(players(g), deck(g), ds);

export const next = g => deck(g)[0];
export const rest = g => deck(g).slice(1);

export const active = ({ players: [ act, ], }) => act;
export const passive = ({ players: [ act, ...pass ], }) => pass;

export const setActive = a => g => (setPlayers([ a, ...passive(g), ]))(g);
export const allPlays = g => players(g).map(plays);
