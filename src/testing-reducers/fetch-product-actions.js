export const actionTypes = {
  fetchingProduct: 'FETCHING_PRODUCT',
  fetchProductResult: 'FETCH_PRODUCT_RESULT',
  fetchProductError: 'FETCH_PRODUCT_ERROR',
};

export function fetchingProduct() {
  return {
    type: actionTypes.fetchingProduct,
  };
}

export function fetchProductResult(result) {
  return {
    type: actionTypes.fetchProductResult,
    result,
  };
}

export function fetchProductError(error) {
  return {
    type: actionTypes.fetchProductError,
    error,
  };
}
