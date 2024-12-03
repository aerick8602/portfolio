'use client';

import Link from 'next/link';


import { useRouter } from 'next/navigation';
import '../styles/sidebar.css'; 

import  { sidebarBottomItems, sidebarTopItems } from '../utils/externallinks';


const Sidebar = ({toggleExplorer }) => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="topsidebar">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`iconContainer ${router.pathname === path ? 'active' : ''}`}
              onClick={path === '#' ? toggleExplorer : undefined}
            >
              <Icon
                fill={router.pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
                className="icon"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="bottomsidebar">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div className="iconContainer">
              <Icon
                fill={router.pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
                className="icon"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
