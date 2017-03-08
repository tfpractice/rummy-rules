import { append, popElem,removeSet, spread, } from 'fenugreek-collections';
import { isEquiv, xMatch, } from './compare';

export const idx = arr => c => [ ...arr, ].findIndex(isEquiv(c));
export const find = arr => c => [ ...arr, ].find(isEquiv(c));
export const spliceMatch = c => (el, id, arr) => isEquiv(c)(el) && arr.splice(id,1);

// export const remove = c => arr => arr.find(spliceMatch(c));
export const remove = c => arr => arr.filter(xMatch(c));
export const findPop = c => arr => popElem(arr)(find(arr)(c));
export const addCard = c => arr => c ? append(arr)(c) : arr;

export const contains = arr => c => arr.some(isEquiv(c));

export const transfer = c => a0 => a1 => addCard(findPop(c)(a0))(a1);

// contains(a0)(c) && a1.unshift(remove(c)(a0));
