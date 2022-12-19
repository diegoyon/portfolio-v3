import React from 'react';
import './Home.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Home = () => {
  return (
    <section className="home" id="home">
      <h3>Hey there! 👋</h3>
      <h1>I'm Diego</h1>
      <h2>I'm a software developer</h2>
      <p>
        I can help you build a product, feature or website. Look through some of
        my work and experience! If you like what you see and have a project you
        need coded, don't hesitate to contact me.
      </p>
      <ul className="icon-list">
        <li>
          <a href="https://www.linkedin.com/in/diego-yon/" target="_blank">
            <BsLinkedin className="icons" />
          </a>
        </li>
        <li>
          <a href="https://github.com/diegoyon" target="_blank">
            <BsGithub className="icons" />
          </a>
        </li>
        <li>
          <a href="mailto: diegoyon@outlook.com" target="_blank">
            <GoMail className="icons" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
