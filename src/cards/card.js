import { Card, Rank, } from 'bee52';
const { nextRank, prevRank, } = Rank;

export const { suit, rank, sameSuit, sameRank, } = Card;

export const card = (rank, suit) => ({ rank, suit, id: `${rank}_${suit}`, });
export const copy = c => card(rank(c), suit(c));

export const hasRank = r => c => r === rank(c);
export const hasSuit = s => c => s === suit(c);

export const next = c => nextRank(rank(c));
export const prev = c => prevRank(rank(c));
export const adjRanks = c => [ prev(c), next(c), ]; 

// export const 
// export const nextRank = c=>
