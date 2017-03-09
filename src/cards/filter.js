import { isAdj, suitAdj, } from './compare';

export const byAdj = arr => c => arr.filter(isAdj(c));
export const bySAdj = arr => c => arr.filter(suitAdj(c));
