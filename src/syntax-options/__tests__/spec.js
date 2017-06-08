import React from 'react';
import { shallow } from 'enzyme';
import { Classic, Classy, Functional } from '../index';

describe('syntax-options', () => {
  describe('Classic component', () => {
    it('renders Hello world', () => {
      const component = shallow(<Classic />);
      expect(component.html()).toBe("<div>Hello world from classic component</div>");
    });
  });

  describe('Classy component', () => {
    it('renders Hello world', () => {
      const component = shallow(<Classy />);
      expect(component.html()).toBe("<div>Hello world from classy component</div>");
    });
  });

  describe('Functional component', () => {
    it('renders Hello world', () => {
      const component = shallow(<Functional />);
      expect(component.html()).toBe("<div>Hello world from functional component</div>");
    });
  });
});
