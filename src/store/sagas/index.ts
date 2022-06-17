import { all, fork } from 'redux-saga/effects';

import collectionSaga from './collection';
import nftSaga from './nft';

export function* rootSaga() {
  yield all([fork(collectionSaga), fork(nftSaga)]);
}
