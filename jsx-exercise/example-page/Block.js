import React, { PropTypes } from 'react';

import Button from './Button.js';

const Block = ({
  heading,
  body,
  button,
}) => (
  <div className="col-md-4">
    <h2>{heading}</h2>
    <p>{body}</p>
    <p><Button classNames="btn-secondary" {...button} /></p>
  </div>
);

Block.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
};

export default Block;
