import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#604d66', color: 'white', padding: '3rem 6vw', marginTop: '4rem' }}>
      <Container>
        <Row className="gy-4">
          {/* Column 1 */}
          <Col md={3}>
            <h3 style={{ fontWeight: 'bold' }}>Favour Gilian</h3>
            <p style={{ fontStyle: 'italic', maxWidth: '250px' }}>
              Crafting beautiful, functional web experiences.
            </p>
            <div style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
              <a href="https://www.linkedin.com/in/favour-gilian-8084b3336/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '1rem' }}>
                <FaLinkedin />
              </a>
              <a href="https://github.com/gilianfavour" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '1rem' }}>
                <FaGithub />
              </a>
              <a href="https://x.com/favour22551" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '1rem' }}>
                <FaTwitter />
              </a>
              <a href="mailto:gilianfavour06@gmail.com" style={{ color: 'white' }}>
                <FaEnvelope />
              </a>
            </div>
          </Col>

          {/* Column 2 */}
          <Col md={3}>
            <h5>Main Pages</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#hero" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
              <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
              <li><a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a></li>
              <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={3}>
            <h5>Utility Pages</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a></li>
              <li><a href="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a></li>
              <li><a href="/support" style={{ color: 'white', textDecoration: 'none' }}>Support</a></li>
            </ul>
          </Col>

          {/* Column 4 - 2x2 Image grid
          <Col md={3}>
            <h5>Gallery</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '1rem' }}>
              <img src="/gallery1.jpg" alt="Gallery 1" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
              <img src="/gallery2.jpg" alt="Gallery 2" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
              <img src="/gallery3.jpg" alt="Gallery 3" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
              <img src="/gallery4.jpg" alt="Gallery 4" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
            </div>
          </Col> */}
        </Row>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.3)', margin: '2rem 0' }} />

        <p style={{ textAlign: 'center', fontSize: '0.9rem', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} Favour Gilian. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
