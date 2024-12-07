import React from 'react';
import '../styles/welcome.css';

const WelcomeScreen = () => {
  return (
    <div className='welcomepage'>
      <div className='col-1'>
        <code className="greet">Hello, I&#39;m</code>  
        <code className="content">
          <h2>Ayush Katiyar</h2>
          <h2>Ayush Katiyar</h2>
        </code>
        <code className='welcomedesc'>
        {"An experienced full-stack developer with a passion for creating visually stunning, user-friendly websites and crafting seamless digital experiences."}
        </code>
         <div className='connect'>
         <span className="relative flex h-3 w-3 wping">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06c]"></span>
          </span>
          <code className="learn">
            <a href='https://www.linkedin.com/in/ayush-katiyar-6a0935238/' target='_blank'>{"Let's connect and learn together! "}</a>
          </code>
          
         </div>
      </div>
      <div className='col-2'>

        <div className='faqs'>
        {/* <div style={{width:'100%',paddingLeft:'100px'}}>
        <h2 style={{color:'CCCCCC',fontSize:'18px'}}><h3></h3></h2>
        </div> */}
        <div >
            <div>
              <div >
              <div style={{paddingLeft:'10px',fontSize:'18px'}}>Walkthroughs</div>
              </div>
            </div>
        </div>


          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/information.png' width={22}></img></div>
              <div className='welcomedata'>
              <div className='question'>Know About Me</div>
              {/* <h6 style={{fontSize:'12px'}}>Who am I, and why should you care?</h6> */}
              <h6 style={{fontSize:'12px'}}>Who I am and what I do?</h6>
              </div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'40%',backgroundColor:'#007ACC', height:'7px', borderRadius:'0px 0px 0px 10px'}}></div>
            </div>
          </div>

          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/new-hire.png' width={26}></img></div>
              <div className='welcomedata'>
              <div className='question' >Why Hire Me</div>
              {/* <h6 style={{fontSize:'12px'}}>What makes me the right choice for you?</h6> */}
              <h6 style={{fontSize:'12px'}}>Reasons why I&apos;m the right fit for you.</h6>
              </div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'55%',backgroundColor:'#007ACC', height:'7px', borderRadius:'0px 0px 0px 10px'}}></div>
            </div>
          </div>


          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/star.png' width={26}></img></div>
              <div className='welcomedata'>
              <div className='question'> Project Highlights</div>
              {/* <h6 style={{fontSize:'12px'}}>What have I worked on that’s worth seeing?</h6> */}
              <h6 style={{fontSize:'12px'}}>Notable projects worth exploring!!.</h6>
              </div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'90%',backgroundColor:'#007ACC', height:'7px', borderRadius:'0px 0px 0px 10px'}}></div>
            </div>
          </div>



          <div className='faq'>
            <div className='content'>
              <div className='welcomeicon'><img src='/png/chat.png' width={26}></img></div>
              <div className='welcomedata'>
              <div className='question' >Get in Touch</div>
              {/* <h6 style={{fontSize:'12px'}}>How can you reach me?</h6> */}
              <h6 style={{fontSize:'12px'}}>How to reach me?</h6>
              </div>
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
