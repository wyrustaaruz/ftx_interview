import axios, { AxiosResponse } from 'axios';
import { Nft } from 'store/reducers/nft/types';
import { ENDPOINT_BASE } from 'constants/index';

const NFT_PATH = 'api/nft/nfts_filtered';

export function getNfts(
  nft_filter_string: string,
  startInclusive: string,
  endExclusive: string
): Promise<AxiosResponse<Nft[]>> {
  let dynamicPart = '';
  if (nft_filter_string || startInclusive || endExclusive) {
    dynamicPart = `?`;
    if (nft_filter_string) {
      dynamicPart += `nft_filter_string=${nft_filter_string}`;
    }
    if (startInclusive) {
      dynamicPart += `&startInclusive=${startInclusive}`;
    }
    if (endExclusive) {
      dynamicPart += `&endExclusive=${endExclusive}`;
    }
  }
  const finalUrl = ENDPOINT_BASE + NFT_PATH + dynamicPart;
  const nfts = axios.get(finalUrl);
  return nfts;
}
