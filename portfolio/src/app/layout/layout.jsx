'use client'
import { useState, useEffect } from 'react';
import Titlebar from './titlebar';
import Sidebar from './sidebar';
import Bottombar from './bottombar';
import { useRouter } from 'next/navigation';
import styles from '../styles/layout.css';
import Visulax from '../pages/projects/visulax';
import Explorer from './explorer';
import Welcome from '../pages/welcome';

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
      <Titlebar className="titlebar" />
      <div className={styles.main}>
        <Sidebar
          className="sidebar"
          isExplorerVisible={isExplorerVisible}
          toggleExplorer={toggleExplorer}
        />

        <div
          className="main-content"
          style={{
            width: isExplorerVisible ? `calc(100vw - ${explorerWidth}px+40px)` : '100vw', 
            marginLeft: isExplorerVisible ? `${explorerWidth}px` : '0px',
          }}
        >

          {isExplorerVisible && (
            <Explorer onWidthChange={handleExplorerWidthChange} explorerWidth={explorerWidth} />
          )}

          <div className="main-editor">
            <Welcome/>
            
            {/* <main className='editor-content'> </main> */}
          </div>
        </div>
      </div>

      <Bottombar className="bottombar" />
    </main>
  );
};

export default Layout;
