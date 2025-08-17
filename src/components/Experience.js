import React from 'react';
import { Card } from 'react-bootstrap';

function Experience() {
  const experiences = [
    {
      title: "Sales & Technical Contractor",
      company: "Ahmed Abu Hashish Real Estate Development Establishment – Irbid, Jordan",
      period: "2021 – 2025",
      description: [
        "Managed sales, purchasing, and inventory for real estate projects.",
        "Automated invoicing and sales tracking by converting manual systems to digital platforms."
      ]
    },
    {
      title: "Computer Teacher",
      company: "Jordanian Ministry of Education – Jordan",
      period: "2018 – 2020",
      description: [
        "Taught computer science curriculum and managed IT resources.",
        "Oversaw computer lab operations and software maintenance."
      ]
    }
  ];

  return (
    <section className="container my-5" aria-label="Experience Section" id="section4">
      <h2 className="mb-4 text-center fw-bold">💼 Experience</h2>
      <div className="row">
        {experiences.map((exp, i) => (
          <div key={i} className="col-md-6 mb-4">
            <Card className="shadow-lg border-0 h-100 bg-dark">
              <Card.Body>
                <Card.Title className="fw-bold text-success">{exp.title}</Card.Title>
                <Card.Subtitle className="mb-2  text-light">{exp.company}</Card.Subtitle>
                <Card.Text className="fst-italic  text-light">{exp.period}</Card.Text>
                <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  {exp.description.map((line, j) => (
                    <li key={j} className="text-light">{line}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
