export type Nft = {
  group_id: string;
  group_type: string;
  total: number;
  volume: number;
};

export type NftStateType = {
  data: Nft[];
  error?: string;
  isPending: boolean;
};
