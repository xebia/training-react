import React, { PropTypes } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const simpleFormPage = ({
  name,
  gender,
}) => (
  <form>
    <p>Name: <input name="name" value={name} /></p>
    <p>Gender:
      m
      <input
        name="gender" type="radio" value="m"
        checked={gender === 'm'}
      />
      f
      <input
        name="gender" type="radio" value="f"
        checked={gender === 'f'}
      />
    </p>
    <pre>name: "{name}" gender: "{gender}"</pre>
  </form>
);

simpleFormPage.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default simpleFormPage;
