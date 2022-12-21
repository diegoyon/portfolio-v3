import React from 'react';
import './Home.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Home = () => {
  return (
    <section className="home" id="home">
      <h3>Hey there! 👋</h3>
      <h1>I'm Diego</h1>
      <h2>
        FULL-STACK DEVELOPER WITH LOVE FOR CLEAN CODE AND ACCESIBLE DESIGN.
      </h2>
      <p>BUILDING DIGITAL PRODUCTS, BRANDS, AND EXPERIENCES.</p>
      <ul className="icon-list">
        <li>
          <a
            href="https://www.linkedin.com/in/diego-yon/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/diegoyon"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="icons" />
          </a>
        </li>
        <li>
          <a
            href="mailto: diegoyon@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <GoMail className="icons" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
