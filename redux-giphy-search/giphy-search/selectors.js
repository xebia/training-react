import { createSelector } from 'reselect';

const getGiphyList = state => state.giphyResponse.giphyList;

export const getTotalGiphyPayloadSize = createSelector(
  [getGiphyList],
  (giphyList) => {
    if (giphyList) {
      return giphyList
        .map(giphy => parseInt(giphy.images.original.mp4_size, 10))
        .reduce((total, size) => size + total, 0);
    }

    return undefined;
  }
);
