import { searchGiphy } from '../giphy-search-service.js';
import { submitSearch } from '../giphy-search-actions';

jest.mock('../giphy-search-service');

describe('Action creators: giphy search', () => {
  describe('submitSearch()', () => {

    function getStateMock() {
      return {
        searchTerm: 'mockSearchTerm',
      };
    }

    describe('when giphy search succeeds', () => {
      beforeEach(() => searchGiphy.mockImplementation(() => Promise.resolve({ data: 'mockGiphyList' })));

      it('should dispatch SUBMIT_SEARCH immediately', () => {
        const dispatchMock = jest.fn();
        submitSearch()(dispatchMock, getStateMock);
        expect(dispatchMock).toHaveBeenCalledWith({
          type: 'SUBMIT_SEARCH',
        });
      });

      it('should dispatch a GIPHY_RESPONSE', async () => {
        const dispatchMock = jest.fn();

        await submitSearch()(dispatchMock, getStateMock);
        expect(dispatchMock.mock.calls).toEqual([[{
          type: 'SUBMIT_SEARCH',
        }], [{
          type: 'GIPHY_RESPONSE',
          giphyList: 'mockGiphyList',
        }]]);
        expect(searchGiphy).toHaveBeenCalledWith('mockSearchTerm');
      });
    });

    describe('when giphy search fails', () => {
      beforeEach(() => searchGiphy.mockImplementation(() => Promise.reject(new Error('mock error'))));

      it('should dispatch a GIPHY_ERROR on invalid status', async () => {
        const dispatchMock = jest.fn();

        await submitSearch()(dispatchMock, getStateMock);
        expect(dispatchMock.mock.calls).toEqual([[{
          type: 'SUBMIT_SEARCH',
        }], [{
          type: 'GIPHY_ERROR',
          error: 'Error: mock error',
        }]]);
        expect(searchGiphy).toHaveBeenCalledWith('mockSearchTerm');
      });
    });
  });
});
