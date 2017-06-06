import { addToCart } from '../index';

describe('addToCart', () => {
  it('should return an action object', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload: {
        productId: '12345',
        amount: 42
      }
    };
    const result = addToCart('12345', 42);
    expect(result).to.deep.equal(expected);
  });
});
