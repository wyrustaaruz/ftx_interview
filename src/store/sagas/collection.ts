import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
  GetCollectionRequestedActionPayloadType,
  GetCollectionsFailedActionPayloadType,
  getCollectionsRequestedAction,
  getCollectionsFailedAction,
  getCollectionsSucceededAction,
} from 'store/actions/collection';
import { getCollections } from 'store/api/collectionClient';

function* getCollectionsSaga(
  action: PayloadAction<GetCollectionRequestedActionPayloadType>
) {
  try {
    const payload = yield call(
      getCollections,
      action.payload.collectionType || '',
      action.payload.startInclusive || '',
      action.payload.endExclusive || ''
    );
    yield put(getCollectionsSucceededAction(payload));
  } catch (e) {
    if (e instanceof Error) {
      const payload: GetCollectionsFailedActionPayloadType = {
        error: e.message,
      };
      yield put(getCollectionsFailedAction(payload));
    }
  }
}

function* collectionSaga() {
  yield all([
    takeLatest(getCollectionsRequestedAction.type, getCollectionsSaga),
  ]);
}

export default collectionSaga;
