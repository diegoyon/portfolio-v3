import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <div className="information">
        <div className="bio" data-aos="flip-left">
          <p>
            Hello! My name is Diego and I enjoy building new and innovative
            content for the web while solving all kinds of different challenges
            that they may present.
          </p>
          <p>
            My front-end development experience includes HTML, CSS, JavaScript,
            and React, and my back-end development experience includes Ruby on
            Rails and PostgreSQL. I am constantly learning new languages,
            frameworks, and technologies.
          </p>
          <p>
            I can help you build a product, feature, or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don't hesitate to contact me.
          </p>
        </div>
        <div className="profile-pic" data-aos="flip-right">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <form
        action="https://drive.google.com/file/d/1Iv2cYbEqNjGL8tFLkKY344RMZMwqQ_4r/view?usp=sharing"
        target="_blank"
      >
        <button type="submit" value="See resume">
          Get My Resume
        </button>
      </form>
    </section>
  );
};

export default About;
