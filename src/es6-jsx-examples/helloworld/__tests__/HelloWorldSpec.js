import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld.js';

describe('Component: HelloWorld', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HelloWorld />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain the text "Hello World"', () => {
    expect(wrapper).toIncludeText('Hello World');
  });

  it('should render a list of 3 items', () => {
    expect(wrapper.find('li').map(e => e.text())).toEqual(['item 1', 'item 2', 'item 3']);
  });

  it('should contain the first item', () => {
    // Use toContainReact
    expect(wrapper).toContainReact(<li key="1">item 1</li>);
  })
});