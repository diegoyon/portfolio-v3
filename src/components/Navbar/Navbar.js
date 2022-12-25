import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { SidebarData } from './SidebarData';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // const active = ({ isActive }) => (isActive ? 'active' : null);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="navbar">
      <div className="inside-navbar">
        <h1>DY</h1>

        <div className="desktop">
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
                <HashLink to="#projects" smooth>
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink to="#skills" smooth>
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink to="#contact" smooth>
                  Contact
                </HashLink>
              </li>
            </ul>
          </Router>
        </div>

        <div className="mobile">
          <Router>
            <FaBars onClick={showSidebar} className="hamburger" />
            <div className={sidebar ? 'nav-menu activated' : 'nav-menu'}>
              <ul className="nav-menu-items">
                <li className="navbar-toggle" onClick={showSidebar}>
                  <HashLink className="menu-bars">
                    <AiOutlineClose className="x-icon" />
                  </HashLink>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={item.cName}
                      onClick={showSidebar}
                    >
                      <HashLink to={item.path} smooth>
                        {item.icon}
                        <span>{item.title}</span>
                      </HashLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Router>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
