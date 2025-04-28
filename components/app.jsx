// App.jsx
import React from 'react';

import ProjectCard from './ProjectCard';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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

      <ProjectCard
        name="Tattoo Website"
        screenshot="/images/tattooPage.png"
        github="https://github.com/lZ3R0l/tattoo-project"
        techUsed="HTML and CSS"
        writeup={{
          what: "Personal portfolio website showcasing my projects.",
          learned: "Routing, styling, and organizing components properly.",
          role: "Group project",
          challenges: "Making it mobile-responsive and accessible."
        }}
      />
    </div>
  );
}

export default App;
