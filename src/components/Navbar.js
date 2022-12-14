import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

const Navbar = () => {
  return (
    <Router>
      <HashLink to="#home" smooth>
        Home
      </HashLink>
      <HashLink to="#about" smooth>
        About
      </HashLink>
      <HashLink to="#skills" smooth>
        Skills
      </HashLink>
      <HashLink to="#projects" smooth>
        Projects
      </HashLink>
      <HashLink to="#contact" smooth>
        Contact
      </HashLink>
    </Router>
  );
};

export default Navbar;
