import { Collection } from 'store/reducers/collection/types';
export type GetCollectionsRequestedActionPayloadType = Record<string, string>;

type CollectionsType = {
  collections: Collection[];
  count: number;
};
type ResponseDataType = {
  result: CollectionsType;
};

export type GetCollectionRequestedActionPayloadType = {
  collectionType: string;
  startInclusive: string;
  endExclusive: string;
};
export type GetCollectionsRequestedSucceededActionPayloadType = {
  data: ResponseDataType;
};
export type GetCollectionsFailedActionPayloadType = {
  error?: string;
};
