import { append, popElem, } from 'fenugreek-collections';
import { isMatch, xMatch, } from './compare';

export const idx = arr => c => [ ...arr, ].findIndex(isMatch(c));
export const find = arr => c => [ ...arr, ].find(isMatch(c));
export const spliceMatch = c => (el, id, arr) => isMatch(c)(el) && arr.splice(id,1);

export const remove = c => arr => arr.filter(xMatch(c));
export const findPop = c => arr => popElem(arr)(find(arr)(c));
export const addCard = c => arr => c ? append(arr)(c) : arr;

export const contains = arr => c => arr.some(isMatch(c));

export const transfer = c => a0 => a1 => addCard(findPop(c)(a0))(a1);
export const drawTo = c => arr => find(arr)(c) ? arr.slice(0, idx(arr)(c) + 1) : [];
