import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">Dawn's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About Me</Nav.Link>
            <NavDropdown title="Projects" id="projects-dropdown" className="mx-2">
              <NavDropdown.Item href="#construction">Construction Services App</NavDropdown.Item>
              <NavDropdown.Item href="#booklist">Book List App</NavDropdown.Item>
              <NavDropdown.Item href="#tattoo">Tattoo Website</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#allprojects">All Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
