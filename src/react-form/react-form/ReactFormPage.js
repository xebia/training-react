import React, { Component } from 'react';

class ReactFormPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form>
        Implement a form here!
        <pre>state = {JSON.stringify(this.state, null, ' ')}</pre>
      </form>
    );
  }
}

export default ReactFormPage;
