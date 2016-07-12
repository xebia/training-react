import React, { PropTypes } from 'react';

const randomImagePage = ({ imageMp4Url }) => (
  <div>
    <h1>
      Hello image!
    </h1>
    <video src={imageMp4Url} autoPlay loop />
  </div>
);

randomImagePage.propTypes = {
  imageMp4Url: PropTypes.string.isRequired,
};

export default randomImagePage;
