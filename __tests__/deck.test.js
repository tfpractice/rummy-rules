import 'jasmine-expect';
import { deck, } from 'src/deck';
import * as rummy from '../';
console.log(rummy);

// import * as Deck from 'src/deck';
describe('deck', () => {
  it('description', () => {
    expect(deck).toBeTruthy();
  });
});
