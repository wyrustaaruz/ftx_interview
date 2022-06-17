import React, { useState, useCallback, useEffect } from 'react';
import { useMount } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { List, Pagination, Modal } from 'antd';
import {
  selectNftsData,
  selectPendingData,
  selectNftTotalCount,
} from 'store/selectors/nft';
import { getNftsRequestedAction } from 'store/actions/nft';
import { history } from 'store';
import NftModal from './NftModal';
import { Nft } from 'store/reducers/nft/types';
import type { PaginationProps } from 'antd';
import { formatMoney } from 'utils/formatMoney';

const NftsView: React.FC = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNft, setSelectedNft] = useState<Nft | undefined>();
  const [startInclusive, setStartInclusive] = useState(0);
  const nfts = useSelector(selectNftsData);
  const isPending = useSelector(selectPendingData);
  const total = useSelector(selectNftTotalCount);
  const pageSize = Math.ceil(total / 9);
  const { collectionId } = useParams();
  const itemSize = 9;

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
    setSelectedNft(undefined);
  }, [setIsModalVisible, setSelectedNft]);

  const onChangePage: PaginationProps['onChange'] = useCallback((page) => {
    console.log('page', page);
    setCurrent(page);
    if (page === 1) {
      setStartInclusive(0);
    } else {
      setStartInclusive(page * itemSize);
    }
  }, []);

  useEffect(() => {
    dispatch(
      getNftsRequestedAction({
        nftFilterString: collectionId || '',
        startInclusive: startInclusive.toString(),
        endExclusive: (startInclusive + itemSize).toString(),
      })
    );
  }, [dispatch, startInclusive, collectionId]);

  useMount(() => {
    dispatch(
      getNftsRequestedAction({
        nftFilterString: collectionId || '',
        startInclusive: '0',
        endExclusive: '9',
      })
    );
  });

  const renderListItem = useCallback(
    (nft: Nft) => {
      const date = new Date(nft.createdAt);
      const dateString = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return (
        <List.Item key={nft.id}>
          <div
            onClick={() => {
              setSelectedNft(nft);
              showModal();
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
            <div
              style={{
                display: 'flex',
                flex: 1,
                height: 200,
                width: '100%',
                backgroundPosition: 'stretch',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={nft.imageUrl}
                alt={nft.imageUrl}
                className="h-full w-auto"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'flex-start',
                width: '100%',
                flexDirection: 'column',
                padding: '10px',
              }}
            >
              <p className="flex-1 text-center justify-center">{nft.name}</p>
              <p className="flex-1 text-center justify-center">Price:</p>
              <p className="flex-1 text-center justify-center">
                {formatMoney(nft.offerPrice || 0)} {nft.quoteCurrency}
              </p>
              <p className="flex-1 text-center justify-center">
                Status: {nft.status}
              </p>
              <p className="flex-1 text-center justify-center">{dateString}</p>
            </div>
          </div>
        </List.Item>
      );
    },
    [showModal]
  );

  return (
    <div>
      <div className="card">
        <h2
          style={{ cursor: 'pointer', paddingBottom: 5 }}
          onClick={() => history.back()}
        >
          Back
        </h2>
        <h1 className="mb-0 py-5">{nfts[0]?.collection || 'Nft'}</h1>
        <p className="mb-0 py-5">{nfts[0]?.description || ''}</p>
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
            dataSource={nfts}
            renderItem={(nft) => renderListItem(nft)}
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
                showQuickJumper={false}
                showSizeChanger={false}
                total={pageSize}
              />
            )}
          </div>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={closeModal}
        width="800px"
        centered
        footer={null}
        destroyOnClose
      >
        <NftModal initialData={selectedNft} />
      </Modal>
    </div>
  );
};

export default NftsView;
