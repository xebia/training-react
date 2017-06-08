import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button.js';

const Jumbotron = ({
  heading,
  body,
  button,
}) => (
  /* Main jumbotron for a primary marketing message or call to action */
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">{heading}</h1>
      <p>{body}</p>
      <p><Button classNames="btn-primary btn-lg" {...button} /></p>
    </div>
  </div>
);

Jumbotron.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
};


export default Jumbotron;
