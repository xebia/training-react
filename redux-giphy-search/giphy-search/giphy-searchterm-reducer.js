const initialState = '';

export default function giphySearchTermReducer(state = initialState, action) {
  const { type, searchTerm } = action;
  switch (type) {
    case 'UPDATE_SEARCH_TERM':
      return searchTerm;
    default:
      return state;
  }
}
