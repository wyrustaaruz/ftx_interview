import React from 'react';
import { Nft } from 'store/reducers/nft/types';

type NftModalProps = {
  initialData?: Nft;
};

const NftModal: React.FC<NftModalProps> = ({ initialData }) => {
  return (
    <>
      {console.log('initialData', initialData)}
      <h2 className="flex-1 text-center justify-center">Attrubutes List:</h2>
      <ul>
        {initialData?.attributesList.map((attribute) => (
          <li key={attribute.value}>
            {attribute.trait_type}: {attribute.value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NftModal;
