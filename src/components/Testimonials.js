import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Mostafa",
      text: "خدمة ممتازة! كانت تجربتي رائعة.",
      
    },
    {
      name: "Omar Khaled",
      text: "مطور محترف وماهر. أوصي به بشدة!",
      
    }
  ];

  return (
    <section className="container" aria-label="Testimonials Section" id='section6'>
      <h2 className="mb-4">Testimonials</h2>
      {testimonials.map((testi, i) => (
        <blockquote key={i} className="blockquote">
          <p>"{testi.text}"</p>
          <footer className="blockquote-footer">{testi.name} - <cite>{testi.role}</cite></footer>
        </blockquote>
      ))}
    </section>
  );
}

export default Testimonials;
