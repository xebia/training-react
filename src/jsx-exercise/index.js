import React from 'react';

import ExamplePage from './example-page/ExamplePage.js';

import data from './data.js';

export default function JsxExercise() {
  return <ExamplePage {...data} />;
}
