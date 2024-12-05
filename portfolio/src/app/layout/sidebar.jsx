'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../styles/sidebar.css'; 
import { sidebarBottomItems, sidebarTopItems } from '../utils/externallinks';

const Sidebar = ({ toggleExplorer }) => {
  const router = useRouter();

  const handleBottomLinkClick = (e) => {
    e.preventDefault();
    alert('Awwww, you really thought clicking this would do something? 😏😏 Too bad, I didn\'t even bother making it work! 😂😂 Try again later.. maybe!');
  };
  

  return (
    <div className="sidebar">
      <div className="topsidebar">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path} target="_blank">
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
          <div
            key={path}
            className="iconContainer"
            onClick={handleBottomLinkClick}
          >
            <Icon
              fill={router.pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
              className="icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
