import React from 'react';
import './Home.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Home = () => {
  return (
    <section className="home" id="home">
      <h1>Hey there. I'm Diego</h1>
      <h2>I am a software developer</h2>
      <p>
        I can help you build a product, feature or website. Look through some of
        my work and experience! If you like what you see and have a project you
        need coded, don't hesitate to contact me.
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
