import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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

function mapStateToProps({ randomImage: { imageMp4Url } }) {
  return { imageMp4Url };
}

export default connect(mapStateToProps)(randomImagePage);
