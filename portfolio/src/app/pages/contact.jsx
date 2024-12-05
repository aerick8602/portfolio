import React from 'react';
import '../styles/contact.css'

const Contact = () => {
  const rows = Array.from({ length: 30 }, (_, index) => index + 1);
  const contactInfo = {
    name: "Ayush Katiyar",
    email: "katiyarayush02@gmail.com",
    phone: "+916267208453",
    linkedin: "https://www.linkedin.com/in/ayush-katiyar-6a0935238/",
    github: "https://github.com/aerick8602",
    twitter: "https://x.com/katiyarayush02",
    telegram: "@Ayush_8602"
  };

  const renderJSON = (data) => {
    return Object.keys(data).map((key) => (
      <div key={key} >
        <code style={{ color: '#9CDCFE' }} className='data'>&quot;{key}&quot;:</code>{''}
        <code style={{ color: '#CE9178' }}>&quot;{data[key]}&quot;</code>
      </div>
    ));
  };

  return (
    <div className="contact">
      <code className="row">
        {rows.map((row) => (
          <p key={row}>{row}</p>
        ))}
      </code>
      <code className="info">
        <span style={{ color: '#F8D700' }}>{'{'}</span> 
        {renderJSON(contactInfo)}
        <span style={{ color: '#F8D700' }}>{'}'}</span>
      </code>
    </div>
  );
};

export default Contact;
