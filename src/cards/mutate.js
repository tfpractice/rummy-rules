import { append, popElem, } from 'fenugreek-collections';
import { Compare, } from 'bee52';
const { isMatch, xMatch, } = Compare;

export const idx = arr => c => [ ...arr, ].findIndex(isMatch(c));
export const find = arr => c => [ ...arr, ].find(isMatch(c));
export const spliceMatch = c => (el, id, arr) => isMatch(c)(el) && arr.splice(id,1);

export const findPop = c => arr => popElem(arr)(find(arr)(c));

export const transfer = c => a0 => a1 => addCard(findPop(c)(a0))(a1);
