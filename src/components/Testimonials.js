import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Mostafa",
      role: "Client",
      text: "خدمة ممتازة! كانت تجربتي رائعة."
    },
    {
      name: "Omar Khaled",
      role: "Client",
      text: "مطور محترف وماهر. أوصي به بشدة!"
    }
  ];

  return (
    <section id="section6" style={{ backgroundColor: "#111", padding: "50px 0" }}>
      <div className="container">
        <h2 style={{ color: "#28a745", textAlign: "center", marginBottom: "40px" }}>Testimonials</h2>
        <div className="row g-4 justify-content-center">
          {testimonials.map((testi, i) => (
            <div key={i} className="col-12 col-md-6">
              <div style={{
                backgroundColor: "#1c1c1c",
                color: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
              }}>
                <p style={{ fontSize: "18px", marginBottom: "15px" }}>"{testi.text}"</p>
                <h5 style={{ color: "#28a745", marginBottom: "0" }}>{testi.name}</h5>
                <small style={{ color: "#ccc" }}>{testi.role}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
