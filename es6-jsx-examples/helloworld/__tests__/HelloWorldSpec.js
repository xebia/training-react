import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld.js';

describe('Component: HelloWorld', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HelloWorld />);
  });

  it('should contain the text "Hello World"', () => {
    expect(wrapper).to.contain.text('Hello World');
  });

  it('should render a list of 3 items', () => {
    expect(wrapper.find('li').map(e => e.text())).to.deep.equal(['item 1', 'item 2', 'item 3']);
  });
});
