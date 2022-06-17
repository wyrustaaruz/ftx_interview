import React, { SyntheticEvent } from 'react';
import classnames from 'classnames';

import { NavLink } from 'react-router-dom';

import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

export interface LinkItem {
  path: string;
  icon: React.FC;
  label: string;
}

type SidebarProps = {
  links: LinkItem[];
  externalLink: LinkItem;
  handleLogOut: (e: SyntheticEvent) => void;
  isOpened: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  links,
  externalLink,
  handleLogOut,
  isOpened,
}) => {
  return (
    <aside
      id="sidebar"
      className={classnames(
        'fixed',
        'z-30',
        'h-full',
        'top-0',
        'left-0',
        'pt-16',
        'flex',
        'lg:flex',
        'flex-shrink-0',
        'flex-col',
        'w-64',
        'transition-width',
        'duration-75',
        { hidden: !isOpened }
      )}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={(activity) =>
                        'text-base font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group' +
                        (!activity.isActive
                          ? ' text-gray-900'
                          : 'text-blue-900 bg-gray-100')
                      }
                    >
                      <link.icon />
                      <span className="ml-3">{link.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 pt-2">
                <a
                  href={externalLink.path}
                  target="_blank"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2"
                  rel="noreferrer"
                >
                  <externalLink.icon />
                  <span className="ml-3">{externalLink.label}</span>
                </a>
              </div>
            </div>
            <div className="space-y-1 px-3 bg-white divide-y">
              <a
                // href="#"
                onClick={handleLogOut}
                target="_blank"
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2"
                rel="noreferrer"
              >
                <LogoutSharpIcon />
                <span className="ml-3">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
