import React from 'react';
import { shallow } from 'enzyme';

import ReactFormPage from '../ReactFormPage.js';

describe('Component: ReactFormPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReactFormPage />);
  });

  it('should update the state when name input changes', () => {
    const name = wrapper.find('input[name="name"]');
    name.simulate('change', { target: { value: 'new name' } });
    expect(wrapper.state()).to.deep.equal({ name: 'new name' });
  });

  it('should update the state when gender changes', () => {
    const maleRadio = wrapper.find('input[name="gender"]').at(0);
    maleRadio.simulate('change', { target: { value: maleRadio.props().value } });
    expect(wrapper.state()).to.deep.equal({ gender: 'm' });

    const femaleRadio = wrapper.find('input[name="gender"]').at(1);
    femaleRadio.simulate('change', { target: { value: femaleRadio.props().value } });
    expect(wrapper.state()).to.deep.equal({ gender: 'f' });
  });

  it('should bind the state to the form fields', () => {
    wrapper.setState({ name: 'unit name', gender: 'f' });
    const name = wrapper.find('input[name="name"]');
    expect(name.props().value).to.equal('unit name');

    const maleRadio = wrapper.find('input[name="gender"]').at(0);
    expect(maleRadio.props().checked).to.equal(false);

    const femaleRadio = wrapper.find('input[name="gender"]').at(1);
    expect(femaleRadio.props().checked).to.equal(true);
  });
});
