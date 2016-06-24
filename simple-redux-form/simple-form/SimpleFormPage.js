import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeName, changeGender } from './simple-form-actions.js';

const simpleFormPage = ({
  name,
  gender,
  onChangeName,
  onChangeGender,
}) => (
  <form>
    <p>Name: <input name="name" value={name} onChange={onChangeName} /></p>
    <p>Gender:
      m
      <input
        name="gender" type="radio" value="m"
        checked={gender === 'm'} onChange={onChangeGender}
      />
      f
      <input
        name="gender" type="radio" value="f"
        checked={gender === 'f'} onChange={onChangeGender}
      />
      <pre>name: "{name}" gender: "{gender}"</pre>
    </p>
  </form>
);

simpleFormPage.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeGender: PropTypes.func.isRequired,
};

function mapStateToProps({
  form: {
    name,
    gender,
  },
}) {
  return { name, gender };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onChangeName: e => changeName(e.target.value),
    onChangeGender: e => changeGender(e.target.value),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(simpleFormPage);
