import React from 'react';

function Services() {
  const servicesList = [
    "Web Development",
    "UI/UX Design",
    "Responsive Design",
    "React & Redux",
  
  ];

  return (
    <section className="container" aria-label="Services Section" id='section2' style={{ backgroundColor: '#080808ff' }}>
      <h2 className="mb-4">Services</h2>
      <ul className="list-group">
        {servicesList.map((service, i) => (
          <li key={i} className="list-group-item">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
