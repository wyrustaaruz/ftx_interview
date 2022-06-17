import React, { useState, useCallback, Suspense, useEffect } from 'react';
import { useMount } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { List, Pagination } from 'antd';
import {
  selectCollectionsData,
  selectPendingData,
  selectCollectionTotalCount,
} from 'store/selectors/collection';
import { getCollectionsRequestedAction } from 'store/actions/collection';
import { history } from 'store';
import { Collection } from 'store/reducers/collection/types';
import type { PaginationProps } from 'antd';

const CollectionsView: React.FC = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const [startInclusive, setStartInclusive] = useState(0);
  const collections = useSelector(selectCollectionsData);
  const isPending = useSelector(selectPendingData);
  const total = useSelector(selectCollectionTotalCount);
  const pageSize = Math.ceil(total / 9);
  const itemSize = 9;
  const onChangePage: PaginationProps['onChange'] = useCallback((page) => {
    setCurrent(page);
    if (page === 1) {
      setStartInclusive(0);
    } else {
      setStartInclusive(page * itemSize);
    }
  }, []);

  useEffect(() => {
    dispatch(
      getCollectionsRequestedAction({
        collectionType: 'ftx',
        startInclusive: startInclusive.toString(),
        endExclusive: (startInclusive + itemSize).toString(),
      })
    );
  }, [dispatch, startInclusive]);

  useMount(() => {
    dispatch(
      getCollectionsRequestedAction({
        collectionType: 'ftx',
        startInclusive: '0',
        endExclusive: itemSize.toString(),
      })
    );
  });

  const renderListItem = useCallback((collection: Collection) => {
    return (
      <List.Item>
        <div
          onClick={() => {
            history.push(`nft/${collection.group_id}`);
          }}
          style={{
            display: 'inline-block',
            border: '1px solid light-gray',
            cursor: 'pointer',
            width: '100%',
            borderWidth: 1,
            borderRadius: 20,
          }}
          className="hover:bg-gray-100"
        >
          <Suspense fallback={<div>Loading</div>}>
            <div
              style={{
                display: 'flex',
                flex: 1,
                height: 200,
                width: '100%',
                backgroundImage: `url(${
                  collection.collectionDict?.bannerImageUrl ||
                  collection.first_nft?.imageUrl
                })`,
                backgroundPosition: 'center',
                borderRadius: 20,
              }}
            />
          </Suspense>
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-start',
              height: 236,
              width: '100%',
              flexDirection: 'column',
              padding: '10px',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {collection.collectionDict?.avatarImageUrl ? (
                <img
                  src={collection.collectionDict?.avatarImageUrl}
                  alt={collection.collectionDict?.name}
                  style={{
                    marginTop: -40,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: '50%',
                  }}
                  className="w-20 h-20"
                />
              ) : (
                <p
                  style={{
                    marginTop: -40,
                    backgroundColor: 'white',
                    display: 'flex',
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                  }}
                  className="w-20 h-20"
                >
                  {collection.collectionDict?.displayName.charAt(0)}
                </p>
              )}
            </div>
            <p className="flex-1 text-center justify-center">
              {collection.collectionDict?.displayName}
            </p>
            <p className="flex-1 text-center justify-center">
              by {collection.issuer?.issuer}
            </p>
            <p className="flex-1 text-center justify-center">
              {collection.collectionDict?.description?.substring(0, 150)}
              {collection.collectionDict?.description?.length > 150
                ? '...'
                : ''}
            </p>
          </div>
        </div>
      </List.Item>
    );
  }, []);

  return (
    <div>
      <div className="card">
        <h1 className="mb-0 py-5">Collection</h1>
        <div className="m-10">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            loading={isPending}
            dataSource={collections}
            renderItem={(collection) => renderListItem(collection)}
          />
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {pageSize > 0 && (
              <Pagination
                current={current}
                onChange={onChangePage}
                total={pageSize}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsView;
