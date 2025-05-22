
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './projectCard';

const projectData = [
  { 
    name: 'Construction Services App', 
    techUsed: 'HTML, CSS, JavaScript', 
    screenshot: '/images/tranquility.png',
    github: 'https://github.com/yourusername/construction-app', // Add your actual GitHub links
    writeup: 'A comprehensive construction services application built with vanilla JavaScript.'
  },
  { 
    name: 'Book List App', 
    techUsed: 'HTML, JavaScript, Bootstrap', 
    screenshot: '/images/booklist.png',
    github: 'https://github.com/yourusername/book-list-app',
    writeup: 'A dynamic book management application using Bootstrap for responsive design.'
  },
  { 
    name: 'Tattoo Website', 
    techUsed: 'HTML, CSS', 
    screenshot: '/images/tattoo.png',
    github: 'https://github.com/yourusername/tattoo-website',
    writeup: 'A modern tattoo parlor website showcasing artistic designs and services.'
  },
  { 
    name: 'E-Commerce App', 
    techUsed: 'React, Bootstrap', 
    screenshot: '/images/ecommerce.png',
    github: 'https://github.com/yourusername/ecommerce-app',
    writeup: 'A full-featured e-commerce application built with React and Bootstrap.'
  },
  { 
    name: 'Weather App', 
    techUsed: 'JavaScript, API, CSS', 
    screenshot: '/images/weather.png',
    github: 'https://github.com/yourusername/weather-app',
    writeup: 'A weather forecasting app that integrates with external weather APIs.'
  },
  { 
    name: 'ToDo App', 
    techUsed: 'React, LocalStorage', 
    screenshot: '/images/todo.png',
    github: 'https://github.com/yourusername/todo-app',
    writeup: 'A task management application with local storage persistence.'
  },
  { 
    name: 'Blog Page', 
    techUsed: 'HTML, CSS, JS', 
    screenshot: '/images/blog.png',
    github: 'https://github.com/yourusername/blog-page',
    writeup: 'A clean and responsive blog interface built with vanilla web technologies.'
  },
  { 
    name: 'Recipe Finder', 
    techUsed: 'React, API, Bootstrap', 
    screenshot: '/images/recipe.png',
    github: 'https://github.com/yourusername/recipe-finder',
    writeup: 'A recipe discovery app that fetches data from cooking APIs.'
  },
  { 
    name: 'Fitness Tracker', 
    techUsed: 'React, Chart.js', 
    screenshot: '/images/fitness.png',
    github: 'https://github.com/yourusername/fitness-tracker',
    writeup: 'A fitness tracking application with data visualization using Chart.js.'
  },
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
