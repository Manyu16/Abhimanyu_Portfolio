import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home.js';
import AboutPage from './components/About.js';
import ProjectsPage from './components/Projects.js';
import SkillsPage from './components/Skills.js';
import NavigationBar from './components/Navbar.js';
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
