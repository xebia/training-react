import reducer from '../index';

const line1 = { productId: '123', amount: 1 };
const line2 = { productId: '456', amount: 2 };

describe('Shopping cart reducer', () => {
  it('should initially return an empty array', () => {
    const result = reducer(undefined, {});
    expect(result).to.deep.equal([]);
  });

  it('should return the state unchanged when called with an unmatched action type', () => {
    const state = [line1, line2];
    const action = {
      type: 'UNKNOWN',
      payload: {}
    };
    const result = reducer(state, action);
    expect(result).to.equal(state);
  });

  describe('ADD_TO_CART', () => {
    it('should add the line item to the array', () => {
      const state = [];
      const action = {
        type: 'ADD_TO_CART',
        payload: line1
      };
      const result = reducer(state, action);
      expect(result).to.deep.equal([line1]);
    });

    it('should append additional products at the end', () => {
      const state = [line1];
      const action = {
        type: 'ADD_TO_CART',
        payload: line2
      };
      const result = reducer(state, action);
      expect(result).to.deep.equal([line1, line2]);
    });

    it('should add the amount if a product is added a second time', () => {
      const state = [line1];
      const action = {
        type: 'ADD_TO_CART',
        payload: line1
      };
      const result = reducer(state, action);
      expect(result).to.deep.equal([{ ...line1, amount: 2 }]);
    });
  });

  describe('INCREMENT_AMOUNT', () => {
    it('should increment the amount for a line item', () => {
      const state = [line1];
      const action = {
        type: 'INCREMENT_AMOUNT',
        payload: { productId: '123' }
      };
      const result = reducer(state, action);
      expect(result).to.deep.equal([{ ...line1, amount: 2 }]);
    });
  });
});
