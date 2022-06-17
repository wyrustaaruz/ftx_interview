import { all, fork } from 'redux-saga/effects';

import collectionSaga from './collection';

export function* rootSaga() {
  yield all([fork(collectionSaga)]);
}
