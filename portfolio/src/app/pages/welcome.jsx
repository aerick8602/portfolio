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
        <code className='desc'>
          An experienced full-stack website developer with a passion for crafting unique digital experiences.
        </code>
      </div>
      <div className='col-2'>
        <h2>Walkthroughs</h2>
        <div className='faqs'>
          <div className='faq'>
            <div className='content'>
              <div className='icon'></div>
              <div className='data'></div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'40%',backgroundColor:'purple', height:'10px'}}></div>
            </div>
          </div>

          
          <div className='faq'>
            <div className='content'>
              <div className='icon'></div>
              <div className='data'></div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'40%',backgroundColor:'purple', height:'10px'}}></div>
            </div>
          </div>

          <div className='faq'>
            <div className='content'>
              <div className='icon'></div>
              <div className='data'></div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'40%',backgroundColor:'purple', height:'10px'}}></div>
            </div>
          </div>


          <div className='faq'>
            <div className='content'>
              <div className='icon'></div>
              <div className='data'></div>
            </div>
            <div className='radio'>
              <div className='radioval' style={{width:'40%',backgroundColor:'purple', height:'10px'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
