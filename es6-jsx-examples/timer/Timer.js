import React, { Component } from 'react';

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

  componentWillMount() {
    const updateState = () => this.setState(getState());
    this.interval = setInterval(updateState, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (<div>
      <h1>Hello World!</h1>
      <p>this is a paragraph</p>
      <p>The time is {this.state.time.toString()}</p>
    </div>);
  }
}

export default Timer;
