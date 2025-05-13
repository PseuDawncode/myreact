import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ProjectCard from './projectCard';
import projectData from './projectData';

const projects = [
  { name: 'Construction Services App', techUsed: 'HTML, CSS, JavaScript', img: '/images/tranquility.png' },
  { name: 'Book List App', techUsed: 'HTML, JavaScript, Bootstrap', img: '/images/booklist.png' },
  { name: 'Tattoo Website', techUsed: 'HTML, CSS', img: '/images/tattoo.png' },
  { name: 'E-Commerce App', techUsed: 'React, Bootstrap', img: '/images/ecommerce.png' },
  { name: 'Weather App', techUsed: 'JavaScript, API, CSS', img: '/images/weather.png' },
  { name: 'ToDo App', techUsed: 'React, LocalStorage', img: '/images/todo.png' },
  { name: 'Blog Page', techUsed: 'HTML, CSS, JS', img: '/images/blog.png' },
  { name: 'Recipe Finder', techUsed: 'React, API, Bootstrap', img: '/images/recipe.png' },
  { name: 'Fitness Tracker', techUsed: 'React, Chart.js', img: '/images/fitness.png' },
];

function AllProjects() {
    return (
      <Container className="py-5">
        <h1 className="text-center mb-5">All Projects</h1>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col md={4} key={index}>
              <ProjectCard
                name={project.name}
                screenshot={project.screenshot}
                github={project.github}
                techUsed={project.techUsed}
                writeup={project.writeup}
              />
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default AllProjects;
