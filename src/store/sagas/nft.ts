import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
  GetNftRequestedActionPayloadType,
  GetNftsFailedActionPayloadType,
  getNftsRequestedAction,
  getNftsFailedAction,
  getNftsSucceededAction,
} from 'store/actions/nft';
import { getNfts } from 'store/api/nftClient';

function* getNftsSaga(action: PayloadAction<GetNftRequestedActionPayloadType>) {
  try {
    const payload = yield call(
      getNfts,
      action.payload.nftFilterString || '',
      action.payload.startInclusive || '',
      action.payload.endExclusive || ''
    );
    yield put(getNftsSucceededAction(payload));
  } catch (e) {
    if (e instanceof Error) {
      const payload: GetNftsFailedActionPayloadType = {
        error: e.message,
      };
      yield put(getNftsFailedAction(payload));
    }
  }
}

function* nftSaga() {
  yield all([takeLatest(getNftsRequestedAction.type, getNftsSaga)]);
}

export default nftSaga;
