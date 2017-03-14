import { Deck, } from 'bee52';

const { deck: bDeck, shuffle, } = Deck;
const init = { players: [], deck: shuffle(bDeck()), discard: [], }; 

export const game = (players = [], deck = [], discard = []) =>
 ({ players, deck, discard, });
 
export const players = ({ players, } = init) => players;
export const deck = ({ deck, } = init) => deck;
export const discard = ({ discard, } = init) => discard;

export const setPlayers = plrs => g => game(plrs, deck(g), discard(g));
export const setDeck = dk => g => game(players(g), dk, discard(g));
export const setDiscard = ds => g => game(players(g), deck(g), ds);
