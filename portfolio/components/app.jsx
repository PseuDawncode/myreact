import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './navigationBar';
import Home from './home'; 
import AllProjects from './allProjects';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <NavigationBar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/components/projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}

export default App;
