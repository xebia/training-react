import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js';
import GiphySearchPage from '../giphy-search/GiphySearchPage.js';

export default () => (
  <Provider store={store}>
    <GiphySearchPage />
  </Provider>
);

