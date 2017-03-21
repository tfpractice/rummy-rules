import { addHand, matches,update, } from '../../player';
import { active, players, setPlayers as setP, } from '../data';

export const rotate = ([ first, ...rem ]) => [ ...rem, first, ];

export const turn = game => setP(rotate(players(game)))(game);
export const hasP = p => g => players(g).some(matches(p));
export const updateP = p => g => setP(players(g).map(update(p)))(g);
export const catPlr = p => g => setP(players(g).concat(p))(g);
export const addPlr = p => g => hasP(p)(g) ? updateP(p)(g) : catPlr(p)(g);
export const addPlayer = p => g => hasP(p)(g) ? updateP(p)(g) : catPlr(p)(g);

export const addCards = (...cards) => p => g =>
  addPlr(addHand(...cards)(p))(g); 
export const actAdd = (...cards) => g => 
  addCards(...cards)(active(g))(g);
