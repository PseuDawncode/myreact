import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">Dawn's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About Me</Nav.Link>
            <NavDropdown title="Projects" id="projects-dropdown" className="mx-2">
              <NavDropdown.Item href="#construction">Construction Services App</NavDropdown.Item>
              <NavDropdown.Item href="#booklist">Book List App</NavDropdown.Item>
              <NavDropdown.Item href="#tattoo">Tattoo Website</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#allprojects">All Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className="mx-2">Reach Out</Nav.Link>
          </Nav>
          <Form className="d-flex ms-3">
            <FormControl
                type="search"
                placeholder="programming language.."
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
