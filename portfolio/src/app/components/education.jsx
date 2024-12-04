import '../styles/education.css';

const Education = ({ data }) => {
  const rows = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className="education">
      <code className="row">
        {rows.map((row) => (
          <p key={row}>{row}</p>
        ))}
      </code>

      <div className="details">
        <code>
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </code>
      </div>
    </div>
  );
};

export default Education;
