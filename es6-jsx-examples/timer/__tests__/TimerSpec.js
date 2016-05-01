import React from 'react';
import { shallow } from 'enzyme';
import Timer from '../Timer.js';

describe('Component: Timer', () => {
  let wrapper;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.useFakeTimers();
    sandbox.stub(global, 'setInterval').returns('mockInterval');
    sandbox.spy(global, 'clearInterval');
    wrapper = shallow(<Timer />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should initially set the state to the current date', () => {
    expect(wrapper.state()).to.deep.equal({ time: new Date(0) });
  });

  it('should update state.time every 500ms', () => {
    sandbox.clock.tick(499);
    expect(wrapper.state()).to.deep.equal({ time: new Date(0) });
    sandbox.clock.tick(1);
    expect(wrapper.state()).to.deep.equal({ time: new Date(500) });
    sandbox.clock.tick(500);
    expect(wrapper.state()).to.deep.equal({ time: new Date(1000) });
  });

  it('should clear the interval on unmount', () => {
    wrapper.unmount();
    expect(clearInterval).to.have.been.calledWith('mockInterval');
  });
});
