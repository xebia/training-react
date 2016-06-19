const initialState = { message: 'Use the search bar to find giphy\'s' };
export default function giphyResponseReducer(state = initialState, action) {
  const { type, giphyList, error } = action;
  switch (type) {
    case 'SUBMIT_SEARCH':
      return { message: 'Loading...' };
    case 'GIPHY_RESPONSE':
      if (giphyList.length) {
        return { giphyList };
      }
      return { message: 'No giphy found' };
    case 'GIPHY_ERROR':
      return { message: `Failed to search, got error: ${error}` };
    default:
      return state;
  }
}
