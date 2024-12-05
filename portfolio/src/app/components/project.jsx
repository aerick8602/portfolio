import React from "react";

const Project = ({data,link}) => {
  const rows = Array.from({ length: 40 }, (_, index) => index + 1);
  const style = {
    keyword: { color: "#ff8976" },
    link: { color: "#76d3ff", cursor: "pointer", textDecoration: "underline" },
    comment: { color: "#7d7d7d" },
    tag: { color: "#4eda7f" },
    default: { color: "#d4d2d2" },
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
          {data.map((line, index) => {
            let styleType = style.default;
            if (line.startsWith("import") || line.startsWith("export")) {
              styleType = style.keyword;
            } else if (line.startsWith("//")) {
              styleType = style.comment;
            } else if (line.includes("<") && line.includes(">") ) {
              styleType = style.tag;
            }else if(line.includes("{") || line.includes("}")){
                styleType = style.tag;
            }
            if (line.includes("<a")) {
              const urlMatch = line.match(/href='([^']+)'/);
              const textMatch = line.match(/>([^<]+)</);
              const url = urlMatch ? urlMatch[1] : "#";
              const text = textMatch ? textMatch[1] : "Link";
              return (
                <span key={index} style={style.tag}>
                  <span>     {'<'}Link href=</span>
                  <a href={url} target="_blank" rel="noopener noreferrer" style={style.link}>
                    {link}
                  </a>
                  <span> target='_blank'{'>'}<span style={style.default}>Live Demo</span>{'<'}Link{'>'}</span>
                  <br />
                </span>
              );
            }
            return (
              <span key={index} style={styleType}>
                {line}
                <br />
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
};

export default Project;
