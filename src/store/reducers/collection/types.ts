/* eslint-disable @typescript-eslint/no-explicit-any */
export type Collection = {
  collectionDict: CollectionDictType;
  first_nft: FirstNftType;
  issuer: IssuerType;
  group_id: string;
  group_type: string;
  total: number;
  volume: number;
};

export type CollectionDictType = {
  avatarImageId: number;
  avatarImageUrl: string;
  bannerImageId: number;
  bannerImageUrl: string;
  cardImageId: number;
  cardImageUrl: string;
  createdAt: number;
  description: string;
  discordUrl: string;
  displayName: string;
  featured: true;
  homepageUrl: string;
  id: number;
  markdownDescription: string;
  name: string;
  position: number;
  twitterUrl: string;
};

export type FirstNftType = {
  animationUrl: string;
  attributes: any;
  attributesList: Array<AttributesListType>;
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
  quoteCurrency: 'USD' | 'ETH';
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
};

export type AttributesListType = {
  trait_type: string;
  value: string;
};

export type AuctionType = {
  bestBid: number;
  bidTime: string;
  bids: any;
  endTime: any;
  minNextBid: number;
};

export type IssuerType = {
  createdAt: number;
  id: number;
  isVerified: boolean;
  issuer: string;
  mintSource: string;
  status: string;
  time: string;
};

export type CollectionStateType = {
  data: Collection[];
  error?: string;
  isPending: boolean;
};
