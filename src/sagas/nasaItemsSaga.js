import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';

import { itemsApi } from '../services/api/Nasa';

import {
  fetchNasaItems,
  updateNasaItems,
} from '../actions/nasaItemsActions';

export function* fetchNasaItemsSaga(actions) {
  try {
    const { payload: { keyword } } = actions;
    const response = yield call([itemsApi, itemsApi.search], keyword);
    yield put(updateNasaItems(response.data));
  } catch (e) {
    // do nothing at the moment
  }
}

export default function* () {
  yield all([
    takeLatest(fetchNasaItems, fetchNasaItemsSaga),
  ]);
}
