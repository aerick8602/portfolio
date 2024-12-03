'use client'
import ErrorIcon from '../assets/icons/ErrorIcon';
import WarningIcon from '../assets/icons/WarningIcon';
import BellIcon from '../assets/icons/BellIcon';
import CheckIcon from '../assets/icons/CheckIcon';
import SourceControlIcon from '../assets/icons/SourceControlIcon';
import '../styles/bottombar.css'
import RemoteIcon from '../assets/icons/RemoteIcon';
import UploadIcon from '../assets/icons/UploadIcon';
import RocketIcon from '../assets/icons/RocketIcon';


const Bottombar = () => {
  return (
    <footer className='bottombar'>
      <div className='remote'><RemoteIcon/></div>

      <div className='container'>
      <SourceControlIcon/>
      <p>master*</p>
      <p><UploadIcon/></p>
      <a
          href="https://github.com/aerick8602/portfolio"
          className='githubrepo'
        >
          <RocketIcon/>
          &nbsp;
          <p>github.com/aerick8602/portfolio</p>
      </a>

      <a
          href="mailto:katiyarayush@gmail.com"
          className='githubrepo'
        >
          <img src='/png/telegram.png' width={14}></img>
          &nbsp;
          <p>katiyarayush@gmail.com</p>
      </a>
      <ErrorIcon/>
      <p>6</p>
      <WarningIcon />
      <p>4</p>
  
      &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src='svg/copyright-svgrepo-com.svg' width={14}height={20}></img>
      <p> 2024 <b className='god'>AYUSH KATIYAR</b>. All rights reserved... for now 😎</p>
      {/* <img className='herokuapp' 
  src='https://readme-typing-svg.herokuapp.com/?font=Righteous&size=16&color=000000&vCenter=true&width=350&height=70&duration=4000&lines=Hi+There!+%F0%9F%91%8B;+I%27m+Ayush+Katiyar%F0%9F%98%81!;Welcome+to+my+portfolio❤️!!;Prepare+to+be+amazed+............+or+not+%F0%9F%98%82;' 
  alt='Typing SVG'/> */}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


  Spaces: 2
  &nbsp;
  UTF-8
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  Powerd by 
  <img src='/png/chat-gpt.png' width={16}></img>
  <img src='/next.svg' width={50}></img>
  <div class="loader">
<svg class="car" width="102" height="40" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(2 1)" stroke="#002742" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <path class="car__body" d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01" stroke-width="3"/>
    <ellipse class="car__wheel--left" stroke-width="3.2" fill="#FFF" cx="83.493" cy="30.25" rx="6.922" ry="6.808"/>
    <ellipse class="car__wheel--right" stroke-width="3.2" fill="#FFF" cx="46.511" cy="30.25" rx="6.922" ry="6.808"/>
    <path class="car__line car__line--top" d="M22.5 16.5H2.475" stroke-width="3"/>
    <path class="car__line car__line--middle" d="M20.5 23.5H.4755" stroke-width="3"/>
    <path class="car__line car__line--bottom" d="M25.5 9.5h-19" stroke-width="3"/>
  </g>
</svg>
</div>

      
      <img src='/png/internet.png' width={16}></img>
      <p>Webview Panel</p>

      <CheckIcon />
      <p>Prettier</p>
      <BellIcon />
      </div>
    </footer>
  );
};

export default Bottombar;
