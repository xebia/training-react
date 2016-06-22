export function searchGiphy(searchTerm) {
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response ${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json());
}
