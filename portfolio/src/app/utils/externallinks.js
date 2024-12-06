import FilesIcon from '../assets/icons/FilesIcon';
import GithubIcon from '../assets/icons/GithubIcon';
import LeetCodeIcon from '../assets/icons/LeetcodeIcon';
import MailIcon from '../assets/icons/MailIcon';
import LinkedinIcon from '../assets/icons/LinkedinIcon';
import AccountIcon from '../assets/icons/AccountIcon';
import SettingsIcon from '../assets/icons/SettingsIcon';


const sidebarTopItems = [
    { Icon: FilesIcon, path: '#' },
    { Icon: GithubIcon, path: 'https://github.com/aerick8602' },
    { Icon: LeetCodeIcon, path: 'https://leetcode.com/u/aerick_8602/' },
    { Icon: LinkedinIcon, path: 'https://www.linkedin.com/in/ayush-katiyar-6a0935238/' },
    { Icon: MailIcon, path: 'mailto:katiyarayush02@gmail.com' },
  ];

  const sidebarBottomItems = [
    { Icon: AccountIcon, path: '/about' },
    { Icon: SettingsIcon, path: '/settings' },
  ];

export {sidebarTopItems,sidebarBottomItems};