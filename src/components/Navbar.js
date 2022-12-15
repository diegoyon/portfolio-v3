import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>DY</h1>
      <Router>
        <ul className="navbar-links">
          <li>
            <HashLink to="#home" smooth>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="#about" smooth>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="#skills" smooth>
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink to="#projects" smooth>
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink to="#contact" smooth>
              Contact
            </HashLink>
          </li>
        </ul>
      </Router>
    </nav>
  );
};

export default Navbar;
