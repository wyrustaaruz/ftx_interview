import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsView from 'views/Collections';
import NftsView from 'views/Nfts';
import Layout from 'components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CollectionsView />} />
        <Route path="/nft/:collectionId" element={<NftsView />} />
      </Routes>
    </Layout>
  );
};

export default App;
