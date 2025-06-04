import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './navigationBar';
import Home from './home'; 
import AllProjects from './allProjects';
import ContactForm from './contactForm';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
   
    <>
      <NavigationBar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/projects" element={<AllProjects searchQuery={searchQuery} />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
    
  );
}

export default App;
