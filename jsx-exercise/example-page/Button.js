import React, { PropTypes } from 'react';

const Button = ({
  text,
  href,
  classNames,
}) => (
  <a className={`btn ${classNames}`} href={href} role="button">{text}</a>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
};


export default Button;
