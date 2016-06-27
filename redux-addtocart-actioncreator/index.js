export function addToCart(productId, amount) {
  return {
    type: 'ADD_TO_CART',
    payload: { productId, amount }
  };
}
