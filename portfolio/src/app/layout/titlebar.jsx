'use client';

import '../styles/titlebar.css';
import { useState } from 'react';

const Titlebar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const closeWindow = () => {
    console.log('Window closed');
    window.close();
  };

  return (
    <div className="titlebar" id="titlebar">
      <div className="titlebar-left">
        <div className="vscode-icon">
          <img src='/vscode-svgrepo-com.svg' width={20}></img>
        </div>
        <div className="menu-items">
          <p>File</p>
          <p>Edit</p>
          <p>Selection</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
      </div>
      <div className="titlebar-center">
        <div className="navigation-buttons">
        <img src='/svg/arrow-sm-left-svgrepo-com.svg' width={20}></img>
        <img src='/svg/arrow-sm-right-svgrepo-com.svg' width={20}></img>
        </div>
        <div className="search-box">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src='/svg/search-svgrepo-com.svg' width={16}></img>
          &nbsp;&nbsp;
          <img 
              className="herokuapp"
              src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=16&color=ffffff&vCenter=true&width=290&height=70&duration=4000&lines=%20%20%20%20%20%20Hi+There!+%F0%9F%91%8B+%F0%9F%91%8B;%20%20%20%20%20%20%20I%27m+Ayush+Katiyar%F0%9F%98%81!;Welcome+to+my+portfolio❤️!!;Prepare+to+be+amazed+.........+or+not+%F0%9F%98%82;"
              alt="Typing SVG"
          />
        </div>
      </div>
      <div className="titlebar-right">
        <div className="mini">
        <img src='/svg/minimize-window-svgrepo-com.svg' width={13}></img>
        </div>
        <div className="maxi" onClick={toggleFullscreen}>
        <img src='/png/maximize.png' width={16}></img>
        </div>
        <div className="close" onClick={closeWindow}>
          <img src='/svg/close-svgrepo-com.svg' width={15}></img>
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
