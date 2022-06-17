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
    },
    getNftsSucceededAction: (
      state,
      action: PayloadAction<GetNftsRequestedSucceededActionPayloadType>
    ) => {
      state.isPending = false;
      state.data = action.payload.data.result.nfts;
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
