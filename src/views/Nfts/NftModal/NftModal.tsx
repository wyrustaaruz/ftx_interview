import React from 'react';
import { Nft } from 'store/reducers/nft/types';

type NftModalProps = {
  initialData?: Nft;
};

const NftModal: React.FC<NftModalProps> = ({ initialData }) => {
  return (
    <>
      {initialData?.attributesList.length ? (
        <>
          <h2 className="flex-1 text-center justify-center">
            Attrubutes List:
          </h2>
          <ul>
            {initialData?.attributesList.map((attribute) => (
              <li key={attribute.value}>
                {attribute.trait_type}: {attribute.value}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <h2 className="flex-1 text-center justify-center">
        Additinal Informations:
      </h2>
      <p>
        Withdrawal Methods:
        {initialData?.withdrawalMethods.map((method) => ` ${method} `)}
      </p>
      <p>Mint Source: {initialData?.mintSource || '-'}</p>
      <p>Needs Listing Fee: {initialData?.needsListingFee ? 'Yes' : 'No'}</p>
      <p>Redeemable: {initialData?.redeemable ? 'Yes' : 'No'}</p>
      <p>Fungible: {initialData?.fungible ? 'Yes' : 'No'}</p>
      <p>Donation: {initialData?.donation ? 'Yes' : 'No'}</p>
      <p>Has Owner: {initialData?.hasOwner ? 'Yes' : 'No'}</p>
      <p>Video Url: {initialData?.videoUrl || '-'}</p>
      <p>Needs Listing Fee: {initialData?.needsListingFee ? 'Yes' : 'No'}</p>
      <p>Eth Contract Address: {initialData?.ethContractAddress || '-'}</p>
      <p>Sol Mint Address: {initialData?.solMintAddress || '-'}</p>
      <p>User Notes: {initialData?.userNotes || '-'}</p>
      <p>User Reason: {initialData?.userReason || '-'}</p>
    </>
  );
};

export default NftModal;
