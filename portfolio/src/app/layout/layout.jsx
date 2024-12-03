'use client'
import { useState, useEffect } from 'react';
import Titlebar from './titlebar';
import Sidebar from './sidebar';
import Bottombar from './bottombar';
import { useRouter } from 'next/navigation';
import styles from '../styles/layout.css';
import Visulax from '../pages/projects/visulax';
import Explorer from './explorer';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isExplorerVisible, setIsExplorerVisible] = useState(true);
  const [explorerWidth, setExplorerWidth] = useState(240); // Track explorer width

  const toggleExplorer = () => setIsExplorerVisible((prev) => !prev);

  const handleExplorerWidthChange = (newWidth) => {
    setExplorerWidth(newWidth); // Update explorer width
  };

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [router.pathname]);

  return (
    <main>
      {/* Title bar at the top */}
      <Titlebar className="titlebar" />
      <div className={styles.main}>
        {/* Sidebar to the left */}
        <Sidebar
          className="sidebar"
          isExplorerVisible={isExplorerVisible}
          toggleExplorer={toggleExplorer}
        />

        <div
          className="main-content"
          style={{
            width: isExplorerVisible ? `calc(100vw - ${explorerWidth}px+40px)` : '100vw', // Adjust dynamically based on explorer width
            marginLeft: isExplorerVisible ? `${explorerWidth}px` : '0px', // Adjust margin for explorer visibility
          }}
        >
          {/* Explorer bar, conditionally visible */}
          {isExplorerVisible && (
            <Explorer onWidthChange={handleExplorerWidthChange} explorerWidth={explorerWidth} />
          )}

          {/* Main editor content */}
          <div className="main-editor">
            <Visulax />
            {/* <main className='editor-content'> {children}</main> */}
          </div>
        </div>
      </div>

      {/* Bottom bar at the bottom */}
      <Bottombar className="bottombar" />
    </main>
  );
};

export default Layout;
