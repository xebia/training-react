import React, { PropTypes } from 'react';

const ExamplePage = ({
  project,
}) => (
  <div>{project}</div>
);

ExamplePage.propTypes = {
  project: PropTypes.string.isRequired,
};

export default ExamplePage;
