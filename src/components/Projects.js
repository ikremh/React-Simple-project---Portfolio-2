import React from 'react';

function Projects() {
  const projects = [
    {
      title: `Developed a custom warehouse management web application for a company using
JavaScript and SQL. The system allows for the entry of all products, including their prices,
applicable taxes, and discounts, to automatically calculate the final product cost. The applicatio
also supports adding products to the inventory, streamlining stocktaking and inventory
management processes.`,
     
    },
    {
      title: `Designed and developed a fully functional website for a construction materials
store,
featuring an integrated e-commerce system that allows users to browse all available products,
select desired items, and forward their selections to the sales department. The website also
includes a dedicated section for showcasing residential housing and apartments. The project wa
built using HTML, CSS, and JavaScript.`,
    
    }
  ];

  return (
    <section className="container" aria-label="Projects Section " id='section5'>
      <h2 className="mb-4">Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="mb-3">
          <h5>{project.title}</h5>
        
        </div>
      ))}
    </section>
  );
}

export default Projects;



