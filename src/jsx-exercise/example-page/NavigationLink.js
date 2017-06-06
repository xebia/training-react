import React, { PropTypes } from 'react';

const NavigationLink = ({
  text,
  href,
  current,
}) => {
  const liClassNames = current ? 'nav-item active' : 'nav-item';
  const srOnly = current ? <span className="sr-only">(current)</span> : null;
  return (
    <li className={liClassNames}>
      <a className="nav-link" href={href}>{text}{srOnly}</a>
    </li>
  );
};

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
};

export default NavigationLink;
