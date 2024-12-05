import React from 'react';
import '../styles/welcome.css';

const WelcomeScreen = () => {
  return (
    <div className='welcomepage'>
      <div className='col-1'>
        <code className='greet'>Hello, I'm</code>  
        <code className="content">
          <h2>Ayush Katiyar</h2>
          <h2>Ayush Katiyar</h2>
        </code>
        <code className='welcomedesc'>
        An experienced full-stack developer with a passion for creating visually stunning, user-friendly websites and crafting seamless digital experiences.
        </code>
         <div className='connect'>
         <span className="relative flex h-3 w-3 wping">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06c]"></span>
          </span>
          <code className="learn">
            <a href='https://www.linkedin.com/in/ayush-katiyar-6a0935238/' target='_blank'>Let&apos;s connect and learn together! </a>
          </code>
         </div>
      </div>
      <div className='col-2'>
        <h2 style={{color:'CCCCCC', width:'65%',fontSize:'18px'}}><h3>Walkthroughs</h3></h2>
        <div className='faqs'>

          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/skills.png' width={20}></img></div>
              <div className='welcomedata'>kkkkkkkk</div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'40%',backgroundColor:'#007ACC', height:'7px', borderRadius:'0px 0px 0px 10px'}}></div>
            </div>
          </div>

          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/skills.png' width={20}></img></div>
              <div className='welcomedata'>kkkkkkkk</div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'55%',backgroundColor:'#007ACC', height:'7px', borderRadius:'0px 0px 0px 10px'}}></div>
            </div>
          </div>


          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/skills.png' width={20}></img></div>
              <div className='welcomedata'>kkkkkkkk</div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'80%',backgroundColor:'#007ACC', height:'7px', borderRadius:'0px 0px 0px 10px'}}></div>
            </div>
          </div>



          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/skills.png' width={20}></img></div>
              <div className='welcomedata'>kkkkkkkk</div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'30%',backgroundColor:'#007ACC', height:'7px', borderRadius:'0px 0px 0px 10px'}}></div>
            </div>
          </div>
          <h6 style={{ color: 'hsl(210, 100%, 60%,1)', fontSize:'14px'}}>&nbsp;&nbsp;More...</h6>


        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
