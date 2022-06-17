import React, { useState, useCallback, useEffect } from 'react';
import { useMount } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { List, Pagination, Tabs } from 'antd';
import {
  selectCollectionsData,
  selectPendingData,
  selectCollectionTotalCount,
} from 'store/selectors/collection';
import { getCollectionsRequestedAction } from 'store/actions/collection';
import { history } from 'store';
import { Collection } from 'store/reducers/collection/types';
import type { PaginationProps } from 'antd';
import ProgressiveImg from 'components/Common/ProgressiveImg';

const CollectionsView: React.FC = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState<number>(1);
  const [startInclusive, setStartInclusive] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const collections = useSelector(selectCollectionsData);
  const isPending = useSelector(selectPendingData);
  const total = useSelector(selectCollectionTotalCount);
  const itemSize = 9;
  const onChangePage: PaginationProps['onChange'] = useCallback((page) => {
    setCurrent(page);
    setStartInclusive((page - 1) * itemSize);
  }, []);

  useEffect(() => {
    dispatch(
      getCollectionsRequestedAction({
        collectionType: selectedTab,
        startInclusive: startInclusive.toString(),
        endExclusive: (startInclusive + itemSize).toString(),
      })
    );
  }, [dispatch, startInclusive, selectedTab]);

  useMount(() => {
    dispatch(
      getCollectionsRequestedAction({
        collectionType: selectedTab,
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
          className="hover:bg-gray-100 cursor-pointer	 inline-block w-full border border-gray-300 rounded-lg"
        >
          <div className="flex flex-1 w-full rounded-t-lg border-b border-gray-500">
            <ProgressiveImg
              src={
                collection.collectionDict?.bannerImageUrl ||
                collection.first_nft?.imageUrl
              }
              alt={
                collection.collectionDict?.bannerImageUrl ||
                collection.first_nft?.name
              }
              className="h-60 w-full object-cover rounded-t-lg"
            />
          </div>
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
                <ProgressiveImg
                  src={collection.collectionDict?.avatarImageUrl}
                  className="w-20 h-20 rounded-full -mt-12 "
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

  const tabsRender = useCallback(() => {
    return (
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
          {total > itemSize && (
            <Pagination
              current={current}
              onChange={onChangePage}
              showQuickJumper={false}
              showSizeChanger={false}
              pageSize={itemSize}
              total={total}
            />
          )}
        </div>
      </div>
    );
  }, [collections, current, isPending, onChangePage, renderListItem, total]);

  return (
    <div>
      <div className="card">
        <h1 className="mb-0 py-5">Collection</h1>
        <Tabs
          onChange={(value: string) => setSelectedTab(value)}
          defaultActiveKey={selectedTab}
        >
          <Tabs.TabPane tab="All" key="all">
            {tabsRender()}
          </Tabs.TabPane>
          <Tabs.TabPane tab="FTX" key="ftx">
            {tabsRender()}
          </Tabs.TabPane>
          <Tabs.TabPane tab="SOLANA" key="sol">
            {tabsRender()}
          </Tabs.TabPane>
          <Tabs.TabPane tab="ETHEREUM" key="eth">
            {tabsRender()}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default CollectionsView;
