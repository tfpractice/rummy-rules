// import { spread, } from 'fenugreek-collections';
import { players, setPlayers, } from './data';

export const rotate = ([ first, ...rest ]) => [ ...rest, first, ];

export const turn = game => setPlayers(rotate(players(game)))(game);
