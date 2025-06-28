import React from 'react';
import '../styles/contact.css'

const Skills = () => {
  const rows = Array.from({ length: 70 }, (_, index) => index + 1);

  const skillstech = {
    "&_technicalSkills": {
      proficiency: "proficiency level",
      details: {
        "@_programmingLanguages": {
          "C++": "9.5",
          "Python": "7",
          "HTML": "8.5",
          "CSS": "9",
          "JavaScript": "9",
          "TypeScript": "6.5"
        },
        "@_cloudAndDatabases": {
          "&_databases": {
            "MongoDB": "8.5",
            "MySQL": "7.5",
            "PostgreSQL": "7",
            "Prisma": "6"
          },
          "&_cloudServices": {
            "AWS": "2.5",
            "Google Cloud": "2.5"
          }
        },
        "@_librariesAndFrameworks": {
          "&_frameworks": {
            "Express.js": "9.6",
            "Tailwind CSS": "9",
            "Bootstrap": "8",
            "React.js": "8.5",
            "Next.js": "9.4"
          },
          "&_utilities": {
            "JWT": "7.5",
            "Zod": "6",
            "Axios": "9",
            "Redux":"7"
          }
        }
      }
    },
    "&_developerTools": {
      "details": {
        "@_tools": {
          "Node.js": "8.5",
          "JSON": "9",
          "VS Code": "9",
          "Git": "9",
          "GitHub": "9.5",
          "Postman": "8"
        },
        "@_databaseTools": {
          "MySQL Workbench": "7.5",
          "MATLAB": "7"
        }
      }
    },
    "&_relevantCoursework": {
      "details": {
        "DSA": "9.5",
        "OOPs": "8.5",
        "Fundamentals of Electrical Engineering": "7"
      },
      "**notes": "Courses relevant to the field of computer science and electrical engineering."
    }
  };

  const renderJSON = (data, level = 0) => {
    const braceColors = ['#8f14c0', '#51fcff', '#5eff51', '#F8D700'];
    const braceColor = braceColors[level % braceColors.length];

    return Object.keys(data).map((key) => (
      <div key={key} style={{ marginLeft: `${level * 15}px` }}>
        {/* <code style={{ color: '#9CDCFE' }} className="data">"{key}": </code> */}
        <code style={{ color: '#9CDCFE' }} className="data">{typeof data[key]==='object'?<code style={{color:'#FF5F1F'}}>&quot;{key}&quot;:</code>:<code>&quot;{key}&quot;"</code>} </code>

        {typeof data[key] === 'object' ? (
          <>
            <span style={{ color: braceColor }}>{'{'}</span>
          
            {Array.isArray(data[key]) ? (
              <div style={{ marginLeft: '10px' }}>
                {data[key].map((item, index) => (
                  <div key={index}>
                    <code style={{ color: '#CE9178' }}>"{item}"</code>
                  </div>
                ))}
              </div>
            ) : (
              renderJSON(data[key], level + 1)
            )}
            
            <span style={{ color: braceColor }}>{'},'}</span>
          </>
        ) : (
          <code style={{ color: '#CE9178' }}>"{data[key]}"</code>
        )}
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
        {renderJSON(skillstech)}
        <span style={{ color: '#F8D700' }}>{'}'}</span>
      </code>
    </div>
  );
};

export default Skills;
