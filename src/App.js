import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { components } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React Training</h2>
        </div>
        <p className="App-intro">
          Try one of these examples:
          <ul>
            {
              components.map(c => <li key={c}><a href={`/?component=${c}`}>{c}</a></li>)
            }
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
