import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavigationBar() {
  return (
    <Navbar expand="md" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#hero">Favour Gilian</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="hero"
              spy={true}
              smooth={true}
              offset={-70} // Adjust based on your navbar height
              duration={500}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
