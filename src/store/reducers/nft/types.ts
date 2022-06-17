/* eslint-disable @typescript-eslint/no-explicit-any */
export type Nft = {
  animationUrl: string;
  attributes: any;
  attributesList: Array<AttributesType>;
  auction: AuctionType;
  collection: string;
  createdAt: string;
  created_at: string;
  depositMethods: Array<any>;
  description: string;
  donation: boolean;
  ethContractAddress: any;
  ethContractType: any;
  ethTokenId: any;
  fungible: boolean;
  hasOwner: boolean;
  id: string;
  imageUrl: string;
  issuer: string;
  minBidNotification: number;
  minNextBid: number;
  mintSource: string;
  name: string;
  needsListingFee: boolean;
  number: any;
  offerPrice: any;
  quoteCurrency: string;
  redeemable: boolean;
  redeemed: boolean;
  royaltyFeeRate: number;
  series: any;
  solMintAddress: string;
  status: string;
  thumbnailUrl: any;
  totalQuantity: any;
  totalSellerFeeRate: number;
  useCloudflare: boolean;
  userNotes: any;
  userReason: any;
  videoUrl: any;
  withdrawalMethods: Array<string>;
};

export type AttributesType = {
  trait_type: string;
  value: string;
};

export type AuctionType = {
  bestBid: any;
  bidTime: any;
  bids: number;
  endTime: string;
  minNextBid: number;
};

export type NftStateType = {
  data: Nft[];
  error?: string;
  isPending: boolean;
};
