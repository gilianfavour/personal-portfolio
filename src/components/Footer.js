import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4">
          {/* Brand */}
          <Col md={4}>
            <h3 className="footer-brand">
              Favour<span className="footer-accent">.</span>
            </h3>
            <p className="footer-tagline">
              Building scalable web, mobile and AI-powered solutions that solve real-world problems.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/favour-gilian-8084b3336/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/gilianfavour" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://x.com/favour22551" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://wa.me/256780488850" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="mailto:gilianfavour06@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </Col>

          {/* Navigation */}
          <Col md={2}>
            <h5 className="footer-heading">Navigate</h5>
            <ul className="footer-links">
              {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((s) => (
                <li key={s}>
                  <a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Tech Stack */}
          <Col md={3}>
            <h5 className="footer-heading">Tech Stack</h5>
            <div className="footer-tech">
              {['React', 'Next.js', 'Django', 'Laravel', 'Flutter', 'OpenAI', 'PostgreSQL', 'Figma'].map((t) => (
                <span key={t} className="footer-tech-badge">{t}</span>
              ))}
            </div>
          </Col>

          {/* Currently building */}
          <Col md={3}>
            <h5 className="footer-heading">Currently Building</h5>
            <div className="footer-building">
              <span className="building-dot"></span>
              <p>
                <strong>Farmer's Companion</strong> — an AI-powered multilingual farming assistant for African smallholder farmers using USSD, voice and smartphones.
              </p>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Favour Gilian. All rights reserved. Built with React &amp; <FaHeart size={12} style={{ color: '#b497bd', verticalAlign: 'middle', margin: '0 2px' }} />
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
