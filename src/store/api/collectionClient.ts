import axios, { AxiosResponse } from 'axios';
import { Collection } from 'store/reducers/collection/types';
import { ENDPOINT_BASE } from 'constants/index';

const COLLECTION_PATH = 'api/nft/collections_page';

export function getCollections(
  collectionType: string,
  startInclusive: string,
  endExclusive: string
): Promise<AxiosResponse<Collection[]>> {
  let dynamicPart = '';
  if (collectionType || startInclusive || endExclusive) {
    dynamicPart = `?`;
    if (collectionType) {
      dynamicPart += `collectionType=${collectionType}`;
    }
    if (startInclusive) {
      dynamicPart += `&startInclusive=${startInclusive}`;
    }
    if (endExclusive) {
      dynamicPart += `&endExclusive=${endExclusive}`;
    }
  }
  const finalUrl = ENDPOINT_BASE + COLLECTION_PATH + dynamicPart;
  const collections = axios.get(finalUrl);
  return collections;
}
