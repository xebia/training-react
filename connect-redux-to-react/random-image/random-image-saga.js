import { delay } from 'redux-saga';
import { call, apply, put } from 'redux-saga/effects';
import { imageResponse } from './random-image-actions.js';
import humps from 'humps';

const imageDuration = 5000;

const tag = 'cats';
const randomImageUrl = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`;

function* randomImageSaga() {
  do { // eslint-disable-line no-constant-condition
    const response = yield call(fetch, randomImageUrl);
    const { data } = yield apply(response, response.json);
    const camelcasedData = humps.camelizeKeys(data);
    yield put(imageResponse(camelcasedData));
    yield delay(imageDuration);
  } while (true);
}

export default randomImageSaga;
