import React from 'react';
import 'bootswatch/dist/solar/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Construction Services App',
      description: 'A responsive web application for construction service management and client inquiries.',
      image: '/images/construction-app.png',
      techUsed: 'HTML, CSS, and JavaScript',
      detailsLink: '/projects/construction',
      githubLink: 'https://github.com/username/construction-app'
    },
    {
      id: 2,
      title: 'Book List App',
      description: 'A dynamic book tracking application allowing users to add, sort, and manage their reading lists.',
      image: '/images/book-list-app.png',
      techUsed: 'HTML, JavaScript, and Bootstrap',
      detailsLink: '/projects/booklist',
      githubLink: 'https://github.com/username/book-list-app'
    },
    {
      id: 3,
      title: 'Tattoo Website',
      description: 'A portfolio and booking website for a tattoo artist showcasing their work and services.',
      image: '/images/tattoo-website.png',
      techUsed: 'HTML and CSS',
      detailsLink: '/projects/tattoo',
      githubLink: 'https://github.com/username/tattoo-website'
    },
    {
      id: 4,
      title: 'Recipe Finder App',
      description: 'An application that helps users find recipes based on available ingredients.',
      image: '/images/recipe-app.png',
      techUsed: 'React, CSS, and API Integration',
      detailsLink: '/projects/recipe',
      githubLink: 'https://github.com/username/recipe-finder'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather forecasting application displaying current and future weather conditions.',
      image: '/images/weather-app.png',
      techUsed: 'HTML, CSS, JavaScript, and OpenWeather API',
      detailsLink: '/projects/weather',
      githubLink: 'https://github.com/username/weather-dashboard'
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      description: 'A fully functional online store with product listings, cart functionality, and payment processing.',
      image: '/images/ecommerce-site.png',
      techUsed: 'React, Node.js, and MongoDB',
      detailsLink: '/projects/ecommerce',
      githubLink: 'https://github.com/username/ecommerce-platform'
    }
  ];

  return (
    <div className="bg-light py-5" style={{ minHeight: '100vh' }}>
      <Container>
        <h1 className="text-center mb-5 display-4 text-primary">Projects Feature</h1>
        
        <Row className="g-4">
          {projectData.map(project => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-3">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-auto">
                    <Card.Text className="mb-3">
                      <small className="text-muted">
                        <strong>Tech Used:</strong> {project.techUsed}
                      </small>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button 
                        variant="warning" 
                        href={project.detailsLink}
                        className="px-4"
                      >
                        Details
                      </Button>
                      <Button 
                        variant="secondary" 
                        href={project.githubLink}
                        className="px-4"
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;