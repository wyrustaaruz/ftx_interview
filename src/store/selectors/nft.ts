import { createSelector } from 'reselect';
import { RootState } from 'store';
import { NftStateType } from 'store/reducers/nft';
import { Nft } from 'store/reducers/nft/types';

export const selectPending = (state: RootState): boolean => state.nft.isPending;
export const selectPendingData = createSelector(
  selectPending,
  (isPending): boolean => isPending
);

export const selectNft = (state: RootState): NftStateType => state.nft;
export const selectNftsData = createSelector(
  selectNft,
  (nfts): Nft[] => nfts.data
);

export const selectNftTotalCount = (state: RootState): number =>
  state.nft.total;
export const selectNftsTotalCountData = createSelector(
  selectNftTotalCount,
  (total): number => total
);
