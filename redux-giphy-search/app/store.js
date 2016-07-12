import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';

import giphySearchTermReducer from '../giphy-search/giphy-searchterm-reducer.js';
import giphyResponseReducer from '../giphy-search/giphy-response-reducer.js';

const debugStoreEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;

const combinedReducers = combineReducers({
  searchTerm: giphySearchTermReducer,
  giphyResponse: giphyResponseReducer,
});

const store = debugStoreEnhancer(createStore)(combinedReducers);

export default store;
