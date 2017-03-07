import { Card, } from 'bee52';
export const { suit, rank, } = Card;

export const card = (rank, suit) => ({ rank, suit, id: `${rank}_${suit}`, });
export const copy = c => card(rank(c), suit(c));

export const hasRank = r => c => r === rank(c);
export const hasSuit = s => c => s === suit(c);
