import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("شكراً لتواصلك معنا! سنتواصل معك قريباً.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="section7" style={{ backgroundColor: "#111", padding: "50px 0" }}>
      <div className="container">
        <h2 style={{ color: "#28a745", marginBottom: "40px", textAlign: "center" }}>Contact Us</h2>
        <div className="row">

          <div className="col-md-6 mb-4">
            <form onSubmit={handleSubmit} style={{ maxWidth: "100%" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "15px",
                  width: "100%"
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "15px",
                  width: "100%"
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "15px",
                  width: "100%"
                }}
              ></textarea>
              <button
                type="submit"
                style={{
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Send
              </button>
            </form>
          </div>

          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center text-light">
            <h4 style={{ color: "#28a745", marginBottom: "20px" }}>تواصل معنا عبر:</h4>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              <FaEnvelope style={{ color: "#28a745", marginRight: "8px" }} />
              <a href="mailto:info@example.com" style={{ color: "#fff" }}>info@example.com</a>
            </p>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              <FaFacebookF style={{ color: "#28a745", marginRight: "8px" }} />
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>facebook.com/yourpage</a>
            </p>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              <FaInstagram style={{ color: "#28a745", marginRight: "8px" }} />
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>instagram.com/yourpage</a>
            </p>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              <FaLinkedinIn style={{ color: "#28a745", marginRight: "8px" }} />
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>linkedin.com/in/yourprofile</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

