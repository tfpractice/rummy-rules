import { Deck, } from 'bee52';

const { draw, } = Deck;

export const hand = deck => draw(7)(deck);

// export const discard = card=> deck=> draw(1)()
