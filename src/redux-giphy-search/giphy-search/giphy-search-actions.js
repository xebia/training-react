import { searchGiphy } from './giphy-search-service.js';

export function changeSearchTerm(searchTerm) {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchTerm,
  };
}

export function submitSearch() {
  return (dispatch, getState) => {
    dispatch({
      type: 'SUBMIT_SEARCH',
    });

    const { searchTerm } = getState();
    return searchGiphy(searchTerm)
      .then(({ data }) => dispatch({
        type: 'GIPHY_RESPONSE',
        giphyList: data,
      }))
      .catch(error => dispatch({
        type: 'GIPHY_ERROR',
        error: error.toString(),
      }));
  };
}
