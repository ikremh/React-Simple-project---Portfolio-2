import React from 'react';

function Experience() {
  const experiences = [
    {
      position:`     Sales & Technical Contractor
Ahmed Abu Hashish Real Estate Development Establishment – Irbid, Jordan
2021 – 2025`,
      
      description: `Managed sales, purchasing, and inventory for real estate projects
// Automated invoicing and sales tracking by converting manual systems to digital platforms`





    },
    {
      position: `Computer Teacher
Jordanian Ministry of Education – Jordan
2018 – 2020`,

      description:`Taught computer science curriculum and managed IT resources
Oversaw computer lab operations and software maintenance`
    }
  ];

  return (
    <section className="container" aria-label="Experience Section" id='section4'>
      <h2 className="mb-4">Experience</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-3">
          <h5>{exp.position} </h5>
         
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
