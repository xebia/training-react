import PropTypes from 'prop-types';
import React from 'react';

import Navigation from './Navigation.js';
import Jumbotron from './Jumbotron.js';
import Block from './Block.js';
import Footer from './Footer.js';

const ExamplePage = ({
  project,
  navigationLinks,
  jumbotron,
  blocks,
  footer,
}) => (
  <div>
    <Navigation project={project} links={navigationLinks} />
    <Jumbotron {...jumbotron} />
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        {blocks.map((block, index) => <Block key={index} {...block} />)}
      </div>
      <hr />
      <Footer {...footer} />
    </div> {/* /container */}
  </div>
);

ExamplePage.propTypes = {
  project: PropTypes.string.isRequired,
  navigationLinks: PropTypes.array.isRequired,
  jumbotron: PropTypes.object.isRequired,
  blocks: PropTypes.array.isRequired,
  footer: PropTypes.object.isRequired,
};

export default ExamplePage;
