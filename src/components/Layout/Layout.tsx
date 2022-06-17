import React, { useCallback, useState } from 'react';

import SupportSharpIcon from '@mui/icons-material/SupportSharp';
import GroupsIcon from '@mui/icons-material/Groups';

import Footer from './Footer';
import Header from './Header';
import Sidebar, { LinkItem } from './Sidebar';
import classNames from 'classnames';

const links: LinkItem[] = [
  {
    path: '/',
    icon: GroupsIcon,
    label: 'Collections',
  },
];

const externalLink: LinkItem = {
  path: 'http://github.com/',
  icon: SupportSharpIcon,
  label: 'Documentation',
};

const Layout: React.FC = ({ children }) => {
  const handleLogOut = useCallback((e) => {
    e.preventDefault();
    alert('Log Out!');
  }, []);

  const [isOpened, setIsOpened] = useState(false);

  const handleToggleIsOpened = useCallback(() => {
    setIsOpened((value) => !value);
  }, [setIsOpened]);

  return (
    <>
      <Header handleToggleIsOpened={handleToggleIsOpened} isOpened={isOpened} />
      <div className="flex overflow-hidden bg-white pt-16 w-full">
        <Sidebar
          links={links}
          externalLink={externalLink}
          handleLogOut={handleLogOut}
          isOpened={isOpened}
        />
        <div
          className={classNames(
            'bg-gray-900',
            'opacity-50',
            'fixed',
            'inset-0',
            'z-10',
            'lg:hidden',
            { hidden: !isOpened }
          )}
          id="sidebarBackdrop"
          onClick={handleToggleIsOpened}
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
