'use client'
import { useState, useEffect } from 'react';
import Titlebar from './titlebar';
import Sidebar from './sidebar';
import Bottombar from './bottombar';
import { useRouter } from 'next/navigation';
import styles from '../styles/layout.css';

import Explorer from './explorer';
import TabBar from './tabbar';
import { useSelector } from 'react-redux';
import WelcomeScreen from '../pages/welcome';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isExplorerVisible, setIsExplorerVisible] = useState(true);
  const [explorerWidth, setExplorerWidth] = useState(240); 
  const fileData = useSelector((state) => state.files.activefiles);


  const toggleExplorer = () => setIsExplorerVisible((prev) => !prev);

  const handleExplorerWidthChange = (newWidth) => {
    console.log("isExplorerVisible",isExplorerVisible);
    // console.log(newWidth);
    setExplorerWidth(newWidth); // Update explorer width
  };

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [router.pathname]);



// const ok = () => {
//   fileData.map((file) => {
//     console.log(file);
//   });
// };

  return (
    <main>
      <Titlebar className="titlebar" />
      <div className={styles.main}>
        <Sidebar
          className="sidebar"
          toggleExplorer={toggleExplorer}
        />

        <div
          className="main-content"
          style={{
            width: isExplorerVisible ? `calc(100vw - ${explorerWidth}px )` : '100%',
            marginLeft: isExplorerVisible ? `${explorerWidth}px` : '0px',
          }}          
        >
          {isExplorerVisible && (
            <Explorer onWidthChange={handleExplorerWidthChange} explorerWidth={explorerWidth} />
          )}
          
          <div className="main-editor">
          {/* <button onClick={ok}>Show ActiveFiles</button> */}
          <TabBar fileData={fileData} />
          <div className='main-file'>
            {fileData.map((file) => {
                if (file.isactive) {
                  return file.component; 
                }
                return null; 
              })}
          </div>
          </div>
        </div>
      </div>
      <Bottombar className="bottombar" />
    </main>
  );
};

export default Layout;
