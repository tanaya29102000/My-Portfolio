// App.js
import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './componants/Home/Home.jsx';
import About from './componants/About/About.jsx';
import Projects from './componants/Projects/Projects.jsx';
import Education from './componants/Education/Education.jsx';
import Contact from './componants/Contact/Contact.jsx';

function App() {
  return (
    <Router>
      <div id="root">
        <nav className="navbar">
          <Link to="/"> <i className="fas fa-home"></i> <span>Home</span> </Link>
          <Link to="/about"> <i className="fas fa-user"></i> <span>About</span> </Link>
          <Link to="/projects">
            <i className="fas fa-briefcase"></i> <span>Projects</span>
          </Link>
          <Link to="/education"> <i className="fas fa-graduation-cap"></i> <span>Education</span> </Link>
          <Link to="/contact">
            <i className="fas fa-address-book"></i> <span>Contact</span>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/education" element={<Education/>} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;