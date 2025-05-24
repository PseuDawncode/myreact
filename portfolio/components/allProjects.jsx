import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './projectCard';


const projectData = [
  { 
      name: "Construction Services App",
      screenshot: "/images/tranquility.png",
      github: "https://github.com/PseuDawncode/My-Project",
      techUsed: "HTML, CSS, and JavaScript",
      writeup: {
        what: "A web app that shows available services for the clients and simply can book an appointment.",
        learned: "My very first time to use JavaScript for the services—dropdown button.",
        role: "Solo project",
        challenges: "Handling form submission validation.",
  }
  
  },
    {
      name: "Book List App",
      screenshot: "/images/BookListApp.png",
      github: "https://github.com/PseuDawncode/LibraryArray",
      techUsed: "HTML, JavaScript, and Bootstrap",
      writeup: {
        what: "A simple book list app to add and delete books. Simply can also mark the book as Read or Unread",
        learned: "How to store data in a Local Storage",
        role: "Solo project",
        challenges: "To filter the Read and Unread books to show.",
      }
    },
    {
      name: "Tattoo Website",
      screenshot: "/images/tattooPage.png",
      github: "https://github.com/lZ3R0l/tattoo-project",
      techUsed: "HTML and CSS",
      writeup: {
        what: "A web app for tattoo client that simply shows tattoo sample—images and where they can also book an appointment.",
        learned: "Teamwork, Communication, and Collaboration",
        role: "Group project",
        challenges: "Making it mobile-responsive and accessible.",
      }
    },
    {
      name: "Minigames",
      screenshot: "/images/minigames.png",
      github: "https://github.com/PseuDawncode/API2.0",
      techUsed: "API, React, JavaScript, CSS",
      writeup: {
        what: "A game app where the users or the players can choose from the two games which are the history game and language game.",
        learned: "I've learned how API works!",
        role: "Solo project",
        challenges: "more challenging to use API.",
      }
    },
    {
      name: "Weather App",
      screenshot: "/images/weather.png",
      github: "https://github.com/PseuDawncode/local-insights",
      techUsed: "API, React, TypeScript, TailwindCSS",
      writeup: {
        what: "A website that perfect for the travellers to check the weather in specific places, to check the traffic, money converter",
        learned: "Teamwork, Communication, and Collaboration",
        role: "Group project",
        challenges: "It's very challenges to use Realtime-API.",
      }
    },
    {
      name: "Recipe Finder App",
      screenshot: "/images/recipe.png",
      github: "https://github.com/PseuDawncode/Recipe",
      techUsed: "HTML and CSS",
      writeup: {
        what: "A web app for users who love cooking or explores new dish. Not just for the cooking-lover, but also for the user who wants to practice on how to cook better.",
        learned: "to use Search Engine Optimization(SEO)",
        role: "Solo project",
        challenges: "Making it mobile-responsive and accessible with normalize.css and SEO",
      }
    },

];

function AllProjects() {
    return (
      <Container className="py-5">
        <h1 className="text-center mb-5">All Projects</h1>
        <Row className="g-4 justify-content-center">
          {projectData.map((project, index) => (
            <Col xs={12} sm={6} md={4} lg={4} xl={4} key={index} className="d-flex justify-content-center">
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
