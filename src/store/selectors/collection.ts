import { createSelector } from 'reselect';
import { RootState } from 'store';
import { CollectionStateType } from 'store/reducers/collection';
import { Collection } from 'store/reducers/collection/types';

export const selectPending = (state: RootState): boolean =>
  state.collection.isPending;
export const selectPendingData = createSelector(
  selectPending,
  (isPending): boolean => isPending
);

export const selectCollection = (state: RootState): CollectionStateType =>
  state.collection;
export const selectCollectionsData = createSelector(
  selectCollection,
  (collections): Collection[] => collections.data
);
