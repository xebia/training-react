import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js';
import SimpleFormPage from '../simple-form/SimpleFormPage.js';

export default () => (
  <Provider store={store}>
    <SimpleFormPage />
  </Provider>
);

