import React from 'react';

export const Classic = React.createClass({
  render() {
    return (
      <div>Hello world from classic component</div>
    );
  }
});

export class Classy extends React.Component {
  render() {
    return (
      <div>Hello world from classy component</div>
    );
  }
}

export function Functional() {
  return (
    <div>Hello world from functional component</div>
  );
}
