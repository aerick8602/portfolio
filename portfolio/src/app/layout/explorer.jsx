'use client';

import { useState, useRef } from 'react';
import ChevronRight from '../assets/icons/ChevronRight';
import '../styles/explorer.css';
import explorerItems from '../utils/fileexplorer';
import { useDispatch, useSelector } from 'react-redux';
import { addFile, setActiveFile } from '../toolkit/fileslice';
import files from '../utils/files';

const Explorer = ({ onWidthChange, explorerWidth }) => {
  const resizerRef = useRef(null);
  const [openfile, setOpenfile] = useState();
  const [openFolders, setOpenFolders] = useState({
    portfolio: true,
    projects: false,
    education: false,
    achievements: false,
  });
  const [isResizing, setIsResizing] = useState(false);
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.files.activefiles);
  console.log(fileData);

  const handleOpenfile = (item) => {
    const file = files.find((f) => f.id === item.id);
    if (file) {
      dispatch(addFile(file));
      dispatch(setActiveFile({ name: file.name }));
      console.log('Dispatched file data:', file);
    } else {
      console.log(`File with name "${item.name}" not found.`);
    }
  };

  const toggleFolder = (folderName) => {
    setOpenFolders((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  };

  const collapseFolder = () => {
    setOpenFolders({});
  };
  
  const refreshExplorer = () => {
    setOpenFolders({ portfolio: true });
  };

  const renderItems = (items, folderName, depth = 0) => {
    return items.map((item) => {
      if (item.type === 'file') {
        return (
          <div
            key={item.name}
            className="file-item"
            onClick={() => handleOpenfile(item)}
          >
            <p style={{ marginLeft: `${depth * 28}px` }}></p>
            {folderName === 'folder' ? (
              <p className='folderbarone'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            ) : (
              <p></p>
            )}
            &nbsp;
            <img src={item.icon} alt={`${item.name} icon`} className="file-icon" />
            <p className='file-name'>
              {item.name.length + item.fileExtension.length > 20 ? (
                <>
                  {item.name.slice(0, 20)}... 
                </>
              ) : (
                <>
                  {`${item.name}` + `${item.fileExtension}`}
                </>
              )}
            </p>
          </div>
        );
      }

      if (item.type === 'folder') {
        return (
          <div key={item.name} className="folderheading">
            <label
              className="folder-checkbox"
              onClick={() => toggleFolder(item.name)}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p style={{ marginLeft: `${depth * 50}px` }}></p>
              <ChevronRight
                style={openFolders[item.name] ? { transform: 'rotate(90deg)' } : {}}
              />
              <img src={item.icon} alt={`${item.name} icon`} className="folder-icon" />
              <p className='folder-name'>
                {item.name.length > 20 ? (
                  <>
                    {item.name.slice(0, 20)}... 
                  </>
                ) : (
                  item.name
                )}
              </p>
            </label>
            {openFolders[item.name] && (
              <div className="file-list">
                <div>{renderItems(item.items, 'folder', depth + 1)}</div>
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
    setIsResizing(true); // Start resizing

    const handleMouseMove = (moveEvent) => {
      let newWidth = startWidth + moveEvent.clientX - startX;
      newWidth = Math.max(newWidth, 195);
      newWidth = Math.min(newWidth, 500);
      onWidthChange(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false); // Stop resizing
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
        <img className='dots' src='/svg/dots-horizontal-svgrepo-com.svg' width={30} />
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
              <img src="/svg/refresh-cw-alt-svgrepo-com.svg" width={16} />
            </div>
            <div onClick={collapseFolder} className="collapsefolder">
              <img src="/svg/folder-remove-1-svgrepo-com.svg" width={16} />
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
          width: isResizing ? '6px' : '5px',
          height: '100%',
          backgroundColor: isResizing ? '#007ACC' : '#1E1E1E',
        }}
      />
    </div>
  );
};

export default Explorer;
