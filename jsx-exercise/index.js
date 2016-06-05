import React from 'react';
import ReactDOM from 'react-dom';

import ExamplePage from './example-page/ExamplePage.js';

import data from './data.js';

ReactDOM.render(<ExamplePage {...data} />, document.getElementById('app'));
