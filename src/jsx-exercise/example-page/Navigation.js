import PropTypes from 'prop-types';
import React from 'react';

import NavigationLink from './NavigationLink.js';

const Navigation = ({
  project,
  links,
}) => (
  <nav className="navbar navbar-static-top navbar-dark bg-inverse">
    <a className="navbar-brand" href="#/project">{project}</a>
    <ul className="nav navbar-nav">
      {links.map(link => <NavigationLink key={link.text} {...link} />)}
    </ul>
  </nav>
);

Navigation.propTypes = {
  project: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default Navigation;
