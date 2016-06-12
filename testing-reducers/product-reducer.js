import { combineReducers } from 'redux';
import { actionTypes } from './fetch-product-actions.js';

const {
  fetchingProduct,
  fetchProductResult,
  fetchProductError,
} = actionTypes;

function loadingReducer(state = false, action) {
  switch (action.type) {
    case fetchingProduct:
      return true;
    case fetchProductResult:
    case fetchProductError:
      return false;
    default:
      return state;
  }
}

function productReducer(state = null, action) {
  switch (action.type) {
    case fetchProductResult:
      return action.result;
    case fetchProductError:
      return null;
    default:
      return state;
  }
}

function errorReducer(state = null, action) {
  switch (action.type) {
    case fetchProductResult:
      return null;
    case fetchProductError:
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  product: productReducer,
});
