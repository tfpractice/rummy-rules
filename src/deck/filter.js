import { Deck, } from 'bee52';
import { filter, } from 'fenugreek-collections';
import { rankAdj, suitAdj, } from '../compare';

const { contains, } = Deck;

export const byAdj = c => arr => filter(arr)(rankAdj(c));
export const bySet = c => arr => filter(arr)(suitAdj(c));
export const hasMatch = card => arr => contains(arr)(card);
