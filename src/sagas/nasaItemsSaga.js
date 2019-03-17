import {
  takeLatest, all,
  call, put,
} from 'redux-saga/effects';
import { isEmpty } from 'lodash';

import { itemsApi } from '../services/api/Nasa';

import {
  fetchNasaItems,
  updateNasaItems,
  cleanNasaItems,
} from '../actions/nasaItemsActions';
import { responseDataSelector } from '../selectors/nasaItemsSelector';

export function* fetchNasaItemsSaga(actions) {
  try {
    const { payload: { keyword } } = actions;
    if (isEmpty(keyword)) {
      yield put(cleanNasaItems());
    } else {
      const response = yield call([itemsApi, itemsApi.search], keyword);
      yield put(updateNasaItems(responseDataSelector(response.data)));
    }
  } catch (e) {
    // do nothing at the moment
  }
}

export default function* () {
  yield all([
    takeLatest(fetchNasaItems, fetchNasaItemsSaga),
  ]);
}
