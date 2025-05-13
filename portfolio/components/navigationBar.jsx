import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavigationBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">Dawn's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About Me</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Reach Out</Nav.Link>
          </Nav>
          <Link to="/projects">
            <Button 
              className="mx-3"
              style={{ backgroundColor: '#088F8F', borderColor: '#088F8F' }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#066b6b';
                e.target.style.borderColor = '#066b6b';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#088F8F';
                e.target.style.borderColor = '#088F8F';
              }}
            >Projects</Button>
          </Link>
          <Form className="d-flex ms-3" onSubmit={handleSubmit}>
            <FormControl
                type="search"
                placeholder="programming language.."
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Search</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
