/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Nft, NftStateType } from './types';

import {
  GetNftRequestedActionPayloadType,
  GetNftsRequestedSucceededActionPayloadType,
  GetNftsFailedActionPayloadType,
} from 'store/actions/nft/types';

const nftReducerInitialState: NftStateType = {
  isPending: false,
  data: [],
  error: undefined,
  total: 0,
};

const nftSlice = createSlice({
  name: 'nfts',
  initialState: nftReducerInitialState,
  reducers: {
    getNftsRequestedAction: (
      state,
      action: PayloadAction<GetNftRequestedActionPayloadType>
    ) => {
      state.isPending = true;
      state.data = [];
      state.total = 0;
    },
    getNftsSucceededAction: (
      state,
      action: PayloadAction<GetNftsRequestedSucceededActionPayloadType>
    ) => {
      state.isPending = false;
      state.data = action.payload.data.result.nfts;
      state.total = action.payload.data.result.total;
    },
    getNftsFailedAction: (
      state,
      action: PayloadAction<GetNftsFailedActionPayloadType>
    ) => {
      state.isPending = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  getNftsRequestedAction,
  getNftsSucceededAction,
  getNftsFailedAction,
} = nftSlice.actions;

const nftReducer = nftSlice.reducer;

export { nftReducer };

export type { Nft, NftStateType };
