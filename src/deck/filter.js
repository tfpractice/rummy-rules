import { isMatch, } from 'bee52';
import { filter, some, } from 'fenugreek-collections';
import { rankAdj, suitAdj, } from '../compare';

export const byAdj = c => arr => filter(arr)(rankAdj(c));
export const bySet = c => arr => filter(arr)(suitAdj(c));
export const hasMatch = card => arr => card && some(arr)(isMatch(card));
