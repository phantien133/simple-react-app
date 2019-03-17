import { all, fork } from 'redux-saga/effects';

import nasaItemsSaga from './nasaItemsSaga';

export default function* () {
  yield all([
    fork(nasaItemsSaga),
  ]);
}
