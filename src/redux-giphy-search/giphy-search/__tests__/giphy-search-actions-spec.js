import proxyquire from 'proxyquire';

function assertDispatchCall(done, callIndex, actionAssertion) {
  let call = 0;
  return (...args) => {
    try {
      if (call === callIndex) {
        expect(args).toEqual([actionAssertion]);
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
        const dispatchMock = assertDispatchCall(done, 1, {
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
        const dispatchMock = assertDispatchCall(done, 1, {
          type: 'GIPHY_ERROR',
          error: 'Error: mock error',
        });

        submitSearch()(dispatchMock, getStateMock);
        expect(searchGiphyMock).to.have.been.calledWithExactly('mockSearchTerm');
      });
    });
  });
});
