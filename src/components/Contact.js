import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaGithub, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/mkgzyope", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const resData = await response.json();
        setError(resData.error || "Oops! Something went wrong.");
      }
    } catch (err) {
      setError("Oops! Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#f7f4fb",
        padding: "5rem 6vw",
        position: "relative",
      }}
    >
      <motion.h2
        className="section-title text-center mb-5"
        style={{ color: "#7e5e8f", fontSize: "2.2rem", fontWeight: "600" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="contact-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* LEFT: Contact Info */}
        <div
          style={{
            flex: "1 1 40%",
            background: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ color: "#7e5e8f", marginBottom: "1.5rem" }}>
            Contact Info
          </h3>

          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaEnvelope color="#b497bd" /> gilianfavour06@gmail.com
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaPhoneAlt color="#b497bd" /> +256 780488850 / +256748588302
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaMapMarkerAlt color="#b497bd" /> Kampala, Uganda
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1.2rem",
              fontSize: "1.6rem",
              color: "#7e5e8f",
            }}
          >
            <a
            href="https://www.linkedin.com/in/favour-gilian-8084b3336/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7e5e8f" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gilianfavour"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7e5e8f" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/favour22551"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7e5e8f" }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/256780488850" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7e5e8f" }}
          >
            <FaWhatsapp />
          </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        
        <div
          style={{
          flex: "1 1 55%",
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            marginBottom: "1.5rem",
            color: "#7e5e8f",
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Send Me an Email
        </h3>

        {submitted ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#b497bd",
            }}
          >
            Thanks for reaching out! I will get back to you soon.
          </p>
          ) : (
            <>
              {error && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {error}
                </p>
              )}
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.8rem",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    outline: "none",
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
                    padding: "0.8rem",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    outline: "none",
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.8rem",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    outline: "none",
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px #b497bd",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    alignSelf: "center",
                    padding: "0.85rem 3rem",
                    border: "none",
                    borderRadius: "30px",
                    background: "#7e5e8f",
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
