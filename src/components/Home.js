import React from 'react';
import './Home.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Home = () => {
  return (
    <section className="home" id="home">
      <h1>I am Diego</h1>
      <h2>I am a software developer</h2>
      <p>
        I am a full-stack developer. I build web applications which are
        accessible and user-oriented. Focus on delivering great products with
        great user experience.
      </p>
      <ul className="icon-list">
        <li>
          <BsLinkedin className="icons" />
        </li>
        <li>
          <BsGithub className="icons" />
        </li>
        <li>
          <GoMail className="icons" />
        </li>
      </ul>
    </section>
  );
};

export default Home;
