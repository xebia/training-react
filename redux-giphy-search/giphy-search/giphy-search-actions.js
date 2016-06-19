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
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(({ data }) => dispatch({
        type: 'GIPHY_RESPONSE',
        giphyList: data,
      }))
      .catch(error => dispatch({
        type: 'GIPHY_ERROR',
        error,
      }));
  };
}
