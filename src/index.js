import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './App';
import Es6JsxExampleTimer from './es6-jsx-examples/timer/Timer';
import Es6JsxExampleHelloWorld from './es6-jsx-examples/helloworld/HelloWorld';
import JsxExercise from './jsx-exercise';
import ConnectReduxToReact from './connect-redux-to-react/app/App';
import ReactForm from './react-form/react-form/ReactFormPage';
import ReactGiphySearch from './react-giphy-search/giphy-search/GiphySearchPage'
import ReduxGiphySearch from './redux-giphy-search/app/App';
import SimpleReduxFrom from './simple-redux-form/app/App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const parsedUrl = /component=(.*)/.exec(window.location.search);
const allComponents = {
  Es6JsxExampleTimer,
  Es6JsxExampleHelloWorld,
  JsxExercise,
  ConnectReduxToReact,
  ReactForm,
  ReactGiphySearch,
  ReduxGiphySearch,
  SimpleReduxFrom,
};

if (parsedUrl && parsedUrl.length === 2 && allComponents[parsedUrl[1]]) {
  const Component = allComponents[parsedUrl[1]];
  ReactDOM.render(<Component />, document.getElementById('root'));
} else {
  ReactDOM.render(<HomePage components={Object.keys(allComponents)} />, document.getElementById('root'));
}

registerServiceWorker();
