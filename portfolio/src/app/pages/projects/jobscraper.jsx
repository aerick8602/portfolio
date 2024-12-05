import React from "react";

const JobScraper = () => {
  const rows = Array.from({ length: 40 }, (_, index) => index + 1);
  return (
    <div className="about">
      <code className="row">
        {rows.map((row) => (
          <p key={row}>{row}</p>
        ))}
      </code>
    </div>
  );
};

export default JobScraper;
