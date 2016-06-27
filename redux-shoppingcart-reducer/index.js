export default function shoppingCart(state = [], action) {
  // ...
}

function alreadyInCart(cart, lineItem) {
  return cart.filter(l => l.productId === lineItem.productId).length > 0;
}
