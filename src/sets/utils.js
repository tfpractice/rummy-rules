import { spread, } from 'fenugreek-collections';

export const len = coll => spread(coll).length;
export const exceeds = (lim = 0) => coll => len(coll) > lim;
export const xExceeds = lim => coll => !exceeds(lim)(coll);

export const isEmpty = a => len(a) === 0;
export const single = coll => len(coll) === 1;
export const sameSize = a => b => len(a) === len(b);
