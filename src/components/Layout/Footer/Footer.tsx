import React from 'react';

const Footer: React.FC = () => (
  <footer className="md:flex md:items-center md:justify-end md:p-6 xl:p-8 my-6 mx-4 justify-end">
    <p className="text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()}{' '}
      <a href="#" className="hover:underline" target="_blank" rel="noreferrer">
        FTX - NFT
      </a>
      . Made with 🖤 by Hasan Rıza.
    </p>
  </footer>
);

export default Footer;
