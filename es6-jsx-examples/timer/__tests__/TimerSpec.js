import React from 'react';
import { shallow } from 'enzyme';
import Timer from '../Timer.js';

describe('Component: Timer', () => {
  let wrapper;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.useFakeTimers();
    sandbox.spy(global, 'setInterval');
    sandbox.spy(global, 'clearInterval');
    wrapper = shallow(<Timer />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render the current time based on the state', () => {
    wrapper.setState({ time: new Date(10000) });
    expect(wrapper.find('p').text()).to.equal(`The time is ${new Date(10000)}`);
  });

  it('should update state.time every 500ms', () => {
    expect(wrapper.state()).to.deep.equal({ time: new Date(0) });
    sandbox.clock.tick(499);
    expect(wrapper.state()).to.deep.equal({ time: new Date(0) });
    sandbox.clock.tick(1);
    expect(wrapper.state()).to.deep.equal({ time: new Date(500) });
    sandbox.clock.tick(500);
    expect(wrapper.state()).to.deep.equal({ time: new Date(1000) });
  });

  it('should clear the interval on unmount', () => {
    expect(setInterval).to.have.callCount(1);
    wrapper.unmount();
    expect(clearInterval).to.have.been.calledWithExactly(setInterval.returnValues[0]);
  });
});
