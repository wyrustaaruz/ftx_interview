import React from 'react';

interface Props {
  handleToggleIsOpened: () => void;
  isOpened: boolean;
}

const Header: React.FC<Props> = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-40 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a
              href="/"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <span className="self-center whitespace-nowrap mx-2 text-black">
                FTX - NFT
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <span className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap">
              Login With Wallet
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
