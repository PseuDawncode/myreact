import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './navigationBar';
import Home from './home'; 
import AllProjects from './allProjects';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projectcard" element={<ProjectCard />} />
        <Route path="/projectData" element={<projectData />} />
      </Routes>
    </Router>
  );
}

export default App;
