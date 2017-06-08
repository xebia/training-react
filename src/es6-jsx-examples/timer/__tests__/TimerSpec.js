import React from 'react';
import { shallow } from 'enzyme';
import Timer from '../Timer';

jest.useFakeTimers();
Date = jest.fn();
Date.now = jest.fn();

describe('Component: Timer', () => {
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    setInterval.mockRestore();
    wrapper = shallow(<Timer />);
  });
  
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should render the current time based on the state', () => {
    wrapper.setState({ time: new Date(10000) });
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state.time every 500ms', () => {
    expect(wrapper.state().time).toBe(Date.mock.instances[0]);
    jest.runTimersToTime(499);
    expect(wrapper.state().time).toBe(Date.mock.instances[0]);
    jest.runTimersToTime(1);
    expect(wrapper.state().time).toBe(Date.mock.instances[1]);
    jest.runTimersToTime(500);
    expect(wrapper.state().time).toBe(Date.mock.instances[2]);
  });

  it('should clear the interval on unmount', () => {
    expect(clearInterval).not.toHaveBeenCalled();
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
