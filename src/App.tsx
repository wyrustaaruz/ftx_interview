import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsView from 'views/Collections';
import Layout from 'components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CollectionsView />} />
      </Routes>
    </Layout>
  );
};

export default App;
