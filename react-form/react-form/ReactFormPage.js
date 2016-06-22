import React, { Component } from 'react';

class ReactFormPage extends Component {
  constructor() {
    super();
    this.state = {};

    this.onChangeName = e => this.setState({
      ...this.state,
      name: e.target.value,
    });

    this.onChangeGender = e => this.setState({
      ...this.state,
      gender: e.target.value,
    });
  }

  render() {
    const {
      name,
      gender,
    } = this.state;

    return (
      <form>
        <p>Name: <input name="name" value={name} onChange={this.onChangeName} /></p>
        <p>Gender:
          m
          <input
            name="gender" type="radio" value="m"
            checked={gender === 'm'} onChange={this.onChangeGender}
          />
          f
          <input
            name="gender" type="radio" value="f"
            checked={gender === 'f'} onChange={this.onChangeGender}
          />
        </p>
        <pre>{JSON.stringify(this.state, null, ' ')}</pre>
      </form>
    );
  }
}

export default ReactFormPage;
