'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import ChevronRight from '../assets/icons/ChevronRight';
import '../styles/explorer.css';

const explorerItems = [
  { name: 'about.md', path: '/about', type: 'file', src: '/svg/info-svgrepo-com.svg' },
  { name: 'resume.cv', path: '/skills', type: 'file', src: '/png/cv.png' },
  { name: 'skills.cvs', path: '/skills', type: 'file', src: '/png/tie.png' },
  {
    name: 'projects',
    type: 'folder',
    src: '/png/start-up.png',
    items: [
      { name: 'visulax.html', path: '/projects/projectA', type: 'file', src: '/png/html.png' },
      { name: 'myportfolio.css', path: '/projects/projectB', type: 'file', src: '/png/css.png' },
      { name: 'clerk_template.js', path: '/projects/projectB', type: 'file', src:'/png/js.png' },
      { name: 'inotepad.jsx', path: '/projects/projectB', type: 'file', src: '/svg/react_icon.svg' },
      { name: 'eBook_Haven.jsx', path: '/projects/projectB', type: 'file', src: '/svg/react_icon.svg' },
      { name: 'job_scraper.py', path: '/projects/projectB', type: 'file', src: '/png/python.png' },
    ],
  },
  {
    name: 'education',
    type: 'folder',
    src: '/png/graduation.png',
    items: [
      { name: 'btech.txt', path: '/education/btech', type: 'file', src: '/png/writing.png' },
      { name: 'sr.secondary.txt', path: '/education/highschool', type: 'file', src: '/png/writing.png' },
      { name: 'matriculation.txt', path: '/education/highschool', type: 'file', src: '/png/writing.png' },
    ],
  },
  {
    name: 'achievements',
    type: 'folder',
    src: '/png/band.png',
    items: [
      { name: 'dsa.cpp', path: '/achievements/bbb', type: 'file', src: '/png/c-.png' },
      { name: 'flipkart.grid', path: '/achievements/aaa', type: 'file', src: '/png/favourites.png' },
    ],
  },
  { name: 'contact', path: '/contact', type: 'file', src: '/png/phone.png' },
];

const Explorer = ({ onWidthChange, explorerWidth }) => {
  const [openFolders, setOpenFolders] = useState({
    portfolio: true,
    projects: false,
    education: false,
    achievements: false,
  });

  const resizerRef = useRef(null);

  const toggleFolder = (folderName) => {
    setOpenFolders((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  };

  const collapseFolder = () => {
    setOpenFolders({
      portfolio: false,
      projects: false,
      education: false,
      achievements: false,
    });
  };

  const refreshExplorer = () => {
    setOpenFolders({
      portfolio: true,
      projects: false,
      education: false,
      achievements: false,
    });
  };

  const renderItems = (items, folderName) => {
    return items.map((item) => {
      if (item.type === 'file') {
        return (
          <Link href={item.path} key={item.name} className="file-item">
            {folderName=='folder'?<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>:<p></p>}
            <img src={item.src} alt={`${item.name} icon`} className="file-icon" />
            <p className={`file-name ${item.name.length > 20 ? 'short' : ''}`}>
              {item.name}
            </p>
          </Link>
        );
      }

      if (item.type === 'folder') {
        return (
          <div key={item.name} className='folderheading'>
            <label
              className="folder-checkbox"
              onClick={() => toggleFolder(item.name)}
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ChevronRight
                style={openFolders[item.name] ? { transform: 'rotate(90deg)' } : {}}
              />
              <img src={item.src} alt={`${item.name} icon`} className="folder-icon" />
              <p className={`folder-name ${item.name.length > 20 ? 'short' : ''}`}>
                {item.name}
              </p>
            </label>
            {openFolders[item.name] && (
              <div className="file-list">
                <div>{renderItems(item.items,'folder')}</div>
              </div>
            )}
          </div>
        );
      }
    });
  };

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startWidth = explorerWidth;

    const handleMouseMove = (moveEvent) => {
      const newWidth = startWidth + moveEvent.clientX - startX;
      const updatedWidth = Math.max(newWidth, 220); // Prevent shrinking too small
      onWidthChange(updatedWidth); // Notify the parent of the width change
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="explorerbar" style={{ width: `${explorerWidth}px` }}>
      <div className="explorer">
        <p>EXPLORER</p>
        <img className='dots' src='/svg/dots-horizontal-svgrepo-com.svg' width={30}></img>
      </div>
      <div className="folder">
        <label
          className="main-folder"
          onClick={() => toggleFolder('portfolio')}
        >
          <ChevronRight
            style={openFolders.portfolio ? { transform: 'rotate(90deg)' } : {}}
          />
          <p className="portfolio">PORTFOLIO</p>
          <div className='expolrericons'>
          <div onClick={refreshExplorer} className="refreshfolder">
            <img src="/svg/refresh-cw-alt-svgrepo-com.svg" width={14} />
          </div>
          <div onClick={collapseFolder} className="collapsefolder">
            <img src="/svg/folder-remove-1-svgrepo-com.svg" width={14} />
          </div>
          </div>
        </label>
        {openFolders.portfolio && (
          <div className="file-list">
            {renderItems(explorerItems, 'portfolio')}
          </div>
        )}
      </div>
      <div
        className="resizer"
        ref={resizerRef}
        onMouseDown={handleMouseDown}
        style={{
          cursor: 'ew-resize',
          position: 'absolute',
          right: 0,
          top: 0,
          width: '1px',
          height: '100%',
          backgroundColor: '#1E1E1E',
        }}
      />
    </div>
  );
};
export default Explorer;
