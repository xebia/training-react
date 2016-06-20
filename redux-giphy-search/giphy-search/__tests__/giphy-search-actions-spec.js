import { submitSearch } from '../giphy-search-actions.js';
import nock from 'nock';

function makeDispatchMock(done, callIndex, actionAssertion) {
  let call = 0;
  return (...args) => {
    try {
      if (call === callIndex) {
        expect(args).to.deep.equal([actionAssertion]);
        done();
      }
      call++;
    } catch (e) {
      done(e);
    }
  };
}

describe('Action creators: giphy search', () => {
  describe('submitSearch()', () => {
    function getStateMock() {
      return {
        searchTerm: 'mockSearchTerm',
      };
    }

    afterEach(() => {
      // note you always need to cleanup your monkey patch
      nock.cleanAll();
    });

    it('should dispatch SUBMIT_SEARCH immediately', () => {
      const dispatchMock = sinon.spy();
      submitSearch()(dispatchMock, getStateMock);
      expect(dispatchMock).to.have.been.calledWithExactly({
        type: 'SUBMIT_SEARCH',
      });
    });

    it('should dispatch a GIPHY_RESPONSE', (done) => {
      nock('http://api.giphy.com/')
        .get('/v1/gifs/search?q=mockSearchTerm&api_key=dc6zaTOxFJmzC')
        .reply(200, { data: 'mockGiphyList' });

      const dispatchMock = makeDispatchMock(done, 1, {
        type: 'GIPHY_RESPONSE',
        giphyList: 'mockGiphyList',
      });

      submitSearch()(dispatchMock, getStateMock);
    });

    it('should dispatch a GIPHY_ERROR on invalid status', (done) => {
      nock('http://api.giphy.com/')
        .get('/v1/gifs/search?q=mockSearchTerm&api_key=dc6zaTOxFJmzC')
        .reply(404);

      const dispatchMock = makeDispatchMock(done, 1, {
        type: 'GIPHY_ERROR',
        error: 'Error: Response 404 Not Found',
      });

      submitSearch()(dispatchMock, getStateMock);
    });

    it('should dispatch a GIPHY_ERROR on invalid response', (done) => {
      nock('http://api.giphy.com/')
        .get('/v1/gifs/search?q=mockSearchTerm&api_key=dc6zaTOxFJmzC')
        .reply(200, 'not json');

      const dispatchMock = makeDispatchMock(done, 1, {
        type: 'GIPHY_ERROR',
        error: 'SyntaxError: Unexpected token o',
      });

      submitSearch()(dispatchMock, getStateMock);
    });
  });
});
