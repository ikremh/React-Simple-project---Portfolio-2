import React from "react";
import { Card } from "react-bootstrap";
import { Code, Palette, Smartphone, Layers } from "lucide-react"; 

function Services() {
  const servicesList = [
    { name: "Web Development", icon: <Code size={28} color="#0d6efd" /> },
    { name: "UI/UX Design", icon: <Palette size={28} color="#ffc107" /> },
    { name: "Responsive Design", icon: <Smartphone size={28} color="#28a745" /> },
    { name: "React & Redux", icon: <Layers size={28} color="#17a2b8" /> },
  ];

  return (
    <section
      className="container py-5"
      aria-label="Services Section"
      id="section2"
      style={{ backgroundColor: "#080808ff", color: "#fff" }}
    >
      <h2 className="mb-5 text-center fw-bold text-light">Services</h2>
      <div className="row justify-content-center">
        {servicesList.map((service, i) => (
          <div key={i} className="col-md-3 col-sm-6 mb-4">
            <Card
              className="text-center h-100"
              style={{
                background: "#111",
                border: "none",
                borderRadius: "15px",
                padding: "25px",
                color: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-7px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(11, 165, 45, 0.84)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                  padding: "15px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                {service.icon}
              </div>
              <h5 className="fw-bold">{service.name}</h5>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
