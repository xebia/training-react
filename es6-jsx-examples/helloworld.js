import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => <div>
  <h1>Hello World!</h1>
  <p>this is a paragraph</p>
  <p>Look at this list:</p>
  <ol>
    {[1, 2, 3].map(number => <li key={number}>item {number}</li>)}
  </ol>
</div>;

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
