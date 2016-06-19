const initialState = { message: 'Use the search bar to find giphy\'s' };
export default function giphyResponseReducer(state = initialState, action) {
  const { type, giphyList, error } = action;
  switch (type) {
    case 'GIPHY_RESPONSE':
      return { giphyList };
    case 'GIPHY_ERROR':
      return { message: `Failed to search, got error: ${error}` };
    default:
      return state;
  }
}
