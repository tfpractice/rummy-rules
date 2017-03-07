import { isAdj, } from './compare';
export const byAdj = arr => c => arr.filter(isAdj(c));
