import React from 'react';
import { useParams } from 'react-router-dom';

const NftsView: React.FC = () => {
  const { collectionId } = useParams();
  return (
    <div>
      <div className="card">
        <h1 className="mb-0 py-5">Nfts</h1>
        <div className="m-10">hasan - {collectionId}</div>
      </div>
    </div>
  );
};

export default NftsView;
