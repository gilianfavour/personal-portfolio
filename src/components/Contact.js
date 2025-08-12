import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Prepare form data for Formspree
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/mkgzyope', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const resData = await response.json();
        setError(resData.error || 'Oops! Something went wrong.');
      }
    } catch (err) {
      setError('Oops! Something went wrong.');
    }
  };

  return (
    <section id="contact" className="contact-section" style={{ backgroundColor: '#f7f4fb', padding: '5rem 6vw', position: 'relative' }}>
      <motion.div
        className="projects-top-divider"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 2 }}
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '75px' }}
        >
          <path
            fill="#b497bd"
            fillOpacity="0.8"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,117.3C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </motion.div>

      <motion.h2
        className="section-title text-center mb-5"
        style={{ color: '#7e5e8f' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="contact-container"
        style={{ maxWidth: '600px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {submitted ? (
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#b497bd' }}>
            Thanks for reaching out! I will get back to you soon.
          </p>
        ) : (
          <>
            {error && (
              <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>
            )}
            <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="contact-textarea"
              />
              <motion.button
                type="submit"
                className="btn hero-btn"
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px #b497bd' }}
                whileTap={{ scale: 0.95 }}
                style={{ alignSelf: 'center', padding: '0.85rem 3rem' }}
              >
                Send Message
              </motion.button>
            </form>
          </>
        )}
      </motion.div>

      <motion.div
        className="social-icons"
        style={{ marginTop: '3rem', textAlign: 'center', fontSize: '1.8rem', color: '#7e5e8f', display: 'flex', justifyContent: 'center', gap: '2rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <a href="https://www.linkedin.com/in/favour-gilian-8084b3336/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
          <FaLinkedin />
        </a>
        <a href="https://github.com/gilianfavour" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
          <FaGithub />
        </a>
        <a href="https://x.com/favour22551" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
          <FaTwitter />
        </a>
        <a href="mailto:gilianfavour06@gmail.com" target='_blank' rel="noopener noreferrer" aria-label="Email" className="social-link">
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
