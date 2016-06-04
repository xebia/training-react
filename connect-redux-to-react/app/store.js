import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import randomImageReducer from '../random-image/random-image-reducer.js';
import randomImageSaga from '../random-image/random-image-saga.js';

const debugStoreEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;
const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  randomImage: randomImageReducer,
});

const store = compose(
  applyMiddleware(sagaMiddleware),
  debugStoreEnhancer
)(createStore)(combinedReducers);

sagaMiddleware.run(randomImageSaga);

export default store;
