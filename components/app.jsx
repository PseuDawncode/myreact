import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './projectCard';

function App() {
  return (
    <div className="py-5 bg-light">
      <Container fluid className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <h1>Projects Feature</h1>
          </Col>
        </Row>
        <Row className="justify-content-center g-4">
          <Col xs={12} md={6} lg={4}>
            <ProjectCard
              name="Construction Services App"
              screenshot="/images/tranquility.png"
              github="https://github.com/PseuDawncode/My-Project"
              techUsed="HTML, CSS, and JavaScript"
              writeup={{
                what: "A web app that shows available services for the clients and simply can book an appointment.",
                learned: "My very first time to use JavaScript for the services—dropdown button.",
                role: "Solo project",
                challenges: "Handling form submission validation."
              }}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectCard
              name="Book List App"
              screenshot="/images/BookListApp.png"
              github="https://github.com/PseuDawncode/LibraryArray"
              techUsed="HTML, JavaScript, and Bootstrap"
              writeup={{
                what: "A simple book list app to add and delete books. Simply can also mark the book as Read or Unread",
                learned: "How to store data in a Local Storage",
                role: "Solo project",
                challenges: "To filter the Read and Unread books to show."
              }}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectCard
              name="Tattoo Website"
              screenshot="/images/tattooPage.png"
              github="https://github.com/lZ3R0l/tattoo-project"
              techUsed="HTML and CSS"
              writeup={{
                what: "A web app for tattoo client that simply shows tattoo sample—images and where they can also book an appointment.",
                learned: "Teamwork, Communication, and Collaboration",
                role: "Group project",
                challenges: "Making it mobile-responsive and accessible."
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;