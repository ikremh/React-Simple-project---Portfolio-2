import React from 'react';

function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Bootstrap", level: 80 },
    { name: "Git", level: 70 }
  ];

  return (
    <div id='section3'>
    <section className="container" aria-label="Skills Section" >
      <h2 className="mb-4">Skills</h2>
      {skills.map((skill, i) => (
        <div key={i} className="mb-3">
          <h5>{skill.name}</h5>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width: `${skill.level}%`}}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </section>
    </div>
  );
}

export default Skills;
