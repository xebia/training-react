// import { searchGiphy } from './giphy-search-service.js';

export function changeSearchTerm(searchTerm) {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchTerm,
  };
}

export function submitSearch() {
}
