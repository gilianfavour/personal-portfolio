import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      sticky="top"
      className={`custom-navbar ${scrolled ? 'custom-navbar--scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#hero" className="navbar-brand-custom">
          Favour<span className="brand-accent">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            {[
              { to: 'hero', label: 'Home' },
              { to: 'about', label: 'About' },
              { to: 'experience', label: 'Experience' },
              { to: 'projects', label: 'Projects' },
              { to: 'skills', label: 'Skills' },
              { to: 'contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={Link}
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="nav-link-active"
              >
                {label}
              </Nav.Link>
            ))}
            <a
              href="/FAVOUR_GILIAN_CV.pdf"
              download="FAVOUR_GILIAN_CV.pdf"
              className="nav-resume-btn"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
