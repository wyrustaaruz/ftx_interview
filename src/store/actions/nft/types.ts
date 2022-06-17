import { Nft } from 'store/reducers/nft/types';
export type GetNftsRequestedActionPayloadType = Record<string, string>;

type NftsType = {
  nfts: Nft[];
};
type ResponseDataType = {
  result: NftsType;
};

export type GetNftRequestedActionPayloadType = {
  nftType: string;
  startInclusive: string;
  endExclusive: string;
};
export type GetNftsRequestedSucceededActionPayloadType = {
  data: ResponseDataType;
};
export type GetNftsFailedActionPayloadType = {
  error?: string;
};
