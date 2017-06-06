import { createStore, compose, combineReducers } from 'redux';

import simpleFormReducer from '../simple-form/simple-form-reducer.js';

const debugStoreEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;

const combinedReducers = combineReducers({
  form: simpleFormReducer,
});

const store = compose(
  debugStoreEnhancer
)(createStore)(combinedReducers);

export default store;
