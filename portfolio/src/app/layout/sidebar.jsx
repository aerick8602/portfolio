'use client';

import Link from 'next/link';
import FilesIcon from '../assets/icons/FilesIcon';
import GithubIcon from '../assets/icons/GithubIcon';
import LeetCodeIcon from '../assets/icons/LeetcodeIcon';
import MailIcon from '../assets/icons/MailIcon';
import AccountIcon from '../assets/icons/AccountIcon';
import SettingsIcon from '../assets/icons/SettingsIcon';
import { useRouter } from 'next/navigation';
import '../styles/sidebar.css'; 
import LinkedinIcon from '../assets/icons/LinkedinIcon';

const sidebarTopItems = [
  { Icon: FilesIcon, path: '#' },
  { Icon: GithubIcon, path: 'https://github.com/aerick8602' },
  { Icon: LeetCodeIcon, path: 'https://leetcode.com/problemset/' },
  { Icon: LinkedinIcon, path: 'https://www.linkedin.com/in/ayush-katiyar-6a0935238/' },
  { Icon: MailIcon, path: 'mailto:katiyarayush@gmail.com' },
];

const sidebarBottomItems = [
  { Icon: AccountIcon, path: '/about' },
  { Icon: SettingsIcon, path: '/settings' },
];

const Sidebar = ({ isExplorerVisible, toggleExplorer }) => {
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
