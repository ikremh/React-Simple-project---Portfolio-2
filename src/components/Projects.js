import React from "react";
import { Card } from "react-bootstrap";


function Projects() {
  const projects = [
    {
      title: "Warehouse Management Web Application",
      description: `Developed a custom warehouse management web application for a company 
using JavaScript and SQL. The system allows for product entry with prices, taxes, and discounts, 
automatically calculating the final cost. It also supports inventory management and stocktaking.`,
    },
    {
      title: "Construction Materials Store Website",
      description: `Designed and developed a fully functional e-commerce website for a 
construction materials store. It features product browsing, shopping cart, and a section for 
residential housing/apartment showcases. Built with HTML, CSS, and JavaScript.`,
    },
  ];

  return (
    <section className="container" aria-label="Projects Section" id="section5">
      <h2 className="mb-4 text-center fw-bold">Projects</h2>
      <div className="row">
        {projects.map((project, i) => (
          <div key={i} className="col-md-6 mb-4">
            <Card className="project-card shadow-sm h-100 bg-dark text-light">
              <Card.Body>
                <Card.Title className="project-title text-success">
                  {project.title}
                </Card.Title>
                <Card.Text className="project-description">
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
