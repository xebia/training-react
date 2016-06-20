import 'isomorphic-fetch';

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import nock from 'nock';

// no ajax during test
nock.disableNetConnect();

chai.use(sinonChai);
chai.use(chaiEnzyme());

global.expect = expect;
global.sinon = sinon;
