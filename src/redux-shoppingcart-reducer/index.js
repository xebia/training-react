export default function shoppingCart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return alreadyInCart(state, action.payload) ? state.map(lineItem => {
        return (lineItem.productId === action.payload.productId) ?
          { ...lineItem, amount: lineItem.amount + action.payload.amount } : lineItem;
      }) : [...state, action.payload];
    case 'INCREMENT_AMOUNT':
      return state.map(lineItem => {
        return (lineItem.productId === action.payload.productId) ?
          { ...lineItem, amount: lineItem.amount + 1 } : lineItem;
      });
    default:
      return state;
  }
}

function alreadyInCart(cart, lineItem) {
  return cart.filter(l => l.productId === lineItem.productId).length > 0;
}
