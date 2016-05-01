import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function getState() {
  return {
    time: new Date(),
  };
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = getState();
  }

  componentDidMount() {
    const updateState = () => this.setState(getState());
    this.interval = window.setInterval(updateState, 500);
  }

  componentDidUnMount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (<div>
      <h1>Hello World!</h1>
      <p>this is a paragraph</p>
      <p>The time is {this.state.time.toString()}</p>
    </div>);
  }
}

ReactDOM.render(<Timer />, document.getElementById('app'));
