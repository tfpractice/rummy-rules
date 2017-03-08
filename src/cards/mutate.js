import { isEquiv, } from './compare';

export const idx = arr => c => [ ...arr, ].findIndex(isEquiv(c));
export const find = arr => c => [ ...arr, ].find(isEquiv(c));
export const spliceMatch = c => (el, id, arr) => isEquiv(c)(el) && arr.splice(id,1);
export const remove = c => arr => arr.find(spliceMatch(c));
export const contains = arr => c => arr.some(isEquiv(c));

export const transfer = c => a0 => a1 => contains(a0)(c) && a1.unshift(remove(c)(a0));
