/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Collection, CollectionStateType } from './types';

import {
  GetCollectionRequestedActionPayloadType,
  GetCollectionsRequestedSucceededActionPayloadType,
  GetCollectionsFailedActionPayloadType,
} from 'store/actions/collection/types';

const collectionReducerInitialState: CollectionStateType = {
  isPending: false,
  data: [],
  error: undefined,
};

const collectionSlice = createSlice({
  name: 'collections',
  initialState: collectionReducerInitialState,
  reducers: {
    getCollectionsRequestedAction: (
      state,
      action: PayloadAction<GetCollectionRequestedActionPayloadType>
    ) => {
      state.isPending = true;
    },
    getCollectionsSucceededAction: (
      state,
      action: PayloadAction<GetCollectionsRequestedSucceededActionPayloadType>
    ) => {
      state.isPending = false;
      state.data = action.payload.data.result.collections;
    },
    getCollectionsFailedAction: (
      state,
      action: PayloadAction<GetCollectionsFailedActionPayloadType>
    ) => {
      state.isPending = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  getCollectionsRequestedAction,
  getCollectionsSucceededAction,
  getCollectionsFailedAction,
} = collectionSlice.actions;

const collectionReducer = collectionSlice.reducer;

export { collectionReducer };

export type { Collection, CollectionStateType };
