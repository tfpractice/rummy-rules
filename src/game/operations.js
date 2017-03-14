import { spread, } from 'fenugreek-collections';

export const rotate = ([ first, ...rest ]) => [ ...rest, first, ];
