import { Deck, } from 'bee52';
import { flattenBin as flat, spread, } from 'fenugreek-collections';
import { sets, } from '../player';

const { deck: bDeck, shuffle, next: nextC, } = Deck;
const init = { players: [], deck: shuffle(bDeck()), discard: [], }; 

export const game = (players = [], deck = [], discard = []) =>
 ({ players, deck, discard, });

export const players = ({ players, } = init) => spread(players);
export const deck = ({ deck, } = init) => spread(deck);
export const discard = ({ discard, } = init) => spread(discard);
export const copy = g => game(players(g), deck(g), discard(g));

export const setPlayers = plrs => g => game(spread(plrs), deck(g), discard(g));
export const setDeck = dk => g => game(players(g), spread(dk), discard(g));
export const setDiscard = ds => g => game(players(g), deck(g), spread(ds));

export const next = g => nextC(deck(g));
export const rest = g => deck(g).slice(1);

export const active = ({ players: [ act, ], }) => act;
export const passive = ({ players: [ act, ...pass ], }) => pass;

export const setActive = a => g => (setPlayers([ a, ...passive(g), ]))(g);
export const allSets = g => players(g).map(sets).reduce(flat, []);
