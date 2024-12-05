import '../styles/experience.css';

const Experience = ({ data }) => {
  const rows = Array.from({ length: 36 }, (_, index) => index + 1);

  return (
    <div className="experience">
      <code className="row">
        {rows.map((row) => (
          <p key={row}>{row}</p>
        ))}
      </code>

      <div className="details">
        <code>
          <p className="title">#Company</p>
          <p className="desc">*.{data.Company}</p>
          <br />
          <p className="title">#Role</p>
          <p className="desc">/{data.Role}</p>
          <p className="title">#Location</p>
          <p className="desc">/{data.Location}</p>

          <p className="title">#Duration</p>
          <p className="desc">/{data.Duration}</p>
          <br />
          <p className="title">#Responsibilities</p>
          {data.Responsibilities.map((r, index) => (
            <p key={index}>.!{r}</p> 
            
          ))}
          <br />
          <p className="title">#TechStack</p>
          {data.TechStack.map((t, index) => (
            <p key={index}>{t}</p>
          ))}
        </code>
      </div>
    </div>
  );
};

export default Experience;
