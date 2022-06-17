import React, { useCallback, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleIsOpened = useCallback(() => {
    setIsOpened((value) => !value);
  }, [setIsOpened]);

  return (
    <>
      <Header handleToggleIsOpened={handleToggleIsOpened} isOpened={isOpened} />
      <div className="flex overflow-hidden bg-white pt-16 w-full">
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto "
        >
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
