import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({
  text,
}) => (
  <footer>
    <p>{text}</p>
  </footer>
);

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
