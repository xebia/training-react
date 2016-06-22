import nock from 'nock';
import proxyquire from 'proxyquire';

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
    let searchGiphyMock;
    let submitSearch;

    function getStateMock() {
      return {
        searchTerm: 'mockSearchTerm',
      };
    }

    beforeEach(() => {
      searchGiphyMock = sinon.stub();

      const giphySearchActions = proxyquire('../giphy-search-actions.js', {
        './giphy-search-service.js': {
          searchGiphy: searchGiphyMock,
        },
      });

      submitSearch = giphySearchActions.submitSearch;
    });

    describe('when giphy search succeeds', () => {
      beforeEach(() => searchGiphyMock.returns(Promise.resolve({ data: 'mockGiphyList' })));

      it('should dispatch SUBMIT_SEARCH immediately', () => {
        const dispatchMock = sinon.spy();
        submitSearch()(dispatchMock, getStateMock);
        expect(dispatchMock).to.have.been.calledWithExactly({
          type: 'SUBMIT_SEARCH',
        });
      });

      it('should dispatch a GIPHY_RESPONSE', (done) => {
        const dispatchMock = makeDispatchMock(done, 1, {
          type: 'GIPHY_RESPONSE',
          giphyList: 'mockGiphyList',
        });

        submitSearch()(dispatchMock, getStateMock);
        expect(searchGiphyMock).to.have.been.calledWithExactly('mockSearchTerm');
      });
    });

    describe('when giphy search fails', () => {
      beforeEach(() => searchGiphyMock.returns(Promise.reject(new Error('mock error'))));

      it('should dispatch a GIPHY_ERROR on invalid status', (done) => {
        nock('http://api.giphy.com/')
          .get('/v1/gifs/search?q=mockSearchTerm&api_key=dc6zaTOxFJmzC')
          .reply(404);

        const dispatchMock = makeDispatchMock(done, 1, {
          type: 'GIPHY_ERROR',
          error: 'Error: mock error',
        });

        submitSearch()(dispatchMock, getStateMock);
        expect(searchGiphyMock).to.have.been.calledWithExactly('mockSearchTerm');
      });
    });
  });
});
