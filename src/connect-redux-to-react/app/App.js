import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js';
import RandomImagePage from '../random-image/RandomImagePage.js';

export default () => (
  <Provider store={store}>
    <RandomImagePage />
  </Provider>
);

