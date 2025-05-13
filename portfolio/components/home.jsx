import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './projectCard';
import NavigationBar from './navigationBar';
import projectData from './projectData';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectData.filter(project => 
    project.techUsed.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
    <NavigationBar onSearch={setSearchQuery}/>
    <div id="home" className="py-5 text-white" bg="dark" variant="dark">
      <Container fluid className="d-flex align-items-center justify-content-center px-4">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <p className="lead text-light text-uppercase">Hi, I am Dawn, I design</p>
            <h1 className="display-3 fw-bold text-warning text-uppercase">Responsive & User-Friendly Websites</h1>
            <p className="lead text-light text-uppercase">For your business!</p>
            <p className="text-light">
              A fullstack developer that solves your design and functionality of your website and app.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="/images/Dawn.png"
              alt="Landing Page- Dawn's Avatar"
              style={{ 
                maxWidth: '100%', 
                height: 'auto' 
              }}
            />
              </Col>
            </Row>
          </Container>
        </div>

      <div id="about" className="py-5" style={{ backgroundColor: '#f0f0f0' }}>
        <Container fluid className="px-6">
          <Row className="align-items-center">
            <Col md={6} className="text-center">
                <img
                  src="/images/Aboutme.png"
                  alt="Little Fun Fact About Me Image"
                  style={{ 
                    maxWidth: '65%', 
                    borderRadius: '20px', 
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)' 
                  }}
                />
            </Col>
            <Col md={6}>
              <h1 className="display-4 mb-4">About Me</h1>
              <p className="lead">
                My name is Dawn. I'm a junior software developer. I am passionate about creating
                responsive and user-friendly applications. I usually create mock-ups first using Figma before
                do the coding to achieve the following orders of the clients.  
              </p>
            </Col>

          </Row>
        </Container>
      </div>
      
      <div id="allprojects" className="py-5 bg-light">
      <div className="py-5 bg-light">
        <Container fluid className="py-4">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center mb-4">
              <h1>Projects Feature</h1>
              {searchQuery && (
                <p className="text-muted">Showing results for: <strong>{searchQuery}</strong></p>
              )}
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
          {filteredProjects.length > 0 ? (
  filteredProjects.map((project, index) => (
    <Col xs={12} md={6} lg={4} key={index}>
      <ProjectCard
        name={project.name || "Construction Services App"}
        screenshot={project.screenshot || "/images/tranquility.png"}
        github={project.github || "https://github.com/PseuDawncode/My-Project"}
        techUsed={project.techUsed || "HTML, CSS, and JavaScript"}
        writeup={{
          what: project.writeup?.what || "A web app that shows available services for the clients and simply can book an appointment.",
          learned: project.writeup?.learned || "My very first time to use JavaScript for the services—dropdown button.",
          role: project.writeup?.role || "Solo project",
          challenges: project.writeup?.challenges || "Handling form submission validation."
        }}
      />
    </Col>
  ))
) : (
  <Col xs={12} className="text-center">
    <p>No projects found using "{searchQuery}"</p>
  </Col>
)}
          </Row>
        </Container>
      </div>
    </div>
    </>
    
  );
}

export default App;