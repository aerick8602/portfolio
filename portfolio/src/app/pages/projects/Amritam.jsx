import React from "react";
import '../../styles/project/visulax.css';

const Amritam = () => {
  const rows = Array.from({ length: 35 }, (_, index) => index + 1);
  const style = {
    keyword: { color: '#ff8976' },
    string: { color: '#76d3ff' },
    comment: { color: '#7d7d7d' },
    tag: { color: '#4eda7f' },
    default: { color: '#fff' }
  };

  return (
    <div className="about">
      <code className="row">
        {rows.map((row) => (
          <p key={row}>{row}</p>
        ))}
      </code>
      <pre>
        <code>
          {"import Amritam from 'me❤️✨';"}
          <br />
          <span style={style.comment}>{"// import './Amritam.css';  // Link to your CSS file"}</span>
          <br />
          <span style={style.keyword}>{"const Amritam = () => {"}</span>
          <br />
          {"  return ("}
          <br />
          <span style={style.tag}>{"    <div>"}</span>
          <br />
          <span style={style.tag}>{"      <h1 className='heading'>"}</span>
          <span style={style.default}>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Amritam is a website focused on reintroducing natural and organic products into kitchens"}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"emphasizing health, wellness, and sustainability. The platform provides detailed information about"}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"the products, their benefits, and their sources, aiming to promote a healthier lifestyle. The "}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"website has a user-friendly design, featuring a prominent logo, concise content, and clear calls to"}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"action to encourage user engagement."}
          </span>
          <span style={style.tag}>{"</h1>"}</span>
          <br />
          <span style={style.tag}>{"      <h4 className='technologies'>"}</span>
          <span style={style.default}>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Technologies Used:"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Frontend: React, TypeScript, Tailwind CSS"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Backend: Node.js (if applicable, for any backend features)"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Key Features:"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"• Clean, modern UI with a focus on the brand’s values."}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"• Responsive design for seamless experience across devices."}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"• Call-to-action buttons to encourage user interaction."}
          </span>
          <span style={style.tag}>{"</h4>"}</span>
          <br />
          <span style={style.tag}>{"    <div>"}</span>
          <br />
          <span style={style.keyword}>{"  );"}</span>
          <br />
          <span style={style.keyword}>{"};"}</span>
          <br />
          <br />
          <span style={style.keyword}>{"export default to you 😂😂;"}</span>
        </code>
      </pre>
    </div>
  );
};

export default Amritam;
