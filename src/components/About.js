import React from 'react';
import './About.css';
import profile from '../images/profile.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <div className="information">
        <div className="bio">
          <p>
            Hello! My name is Diego and I enjoy building new and innovative
            content for the web while solving all kinds of different challenges
            that they may present.
          </p>
          <p>
            I have been working on software development for almost a year, built
            20+ real-world projects, and am constantly learning new languages,
            frameworks, and technologies.
          </p>
          <p>
            I can help you build a product, feature, or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don't hesitate to contact me.
          </p>
        </div>
        <div className="profile-pic">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <form
        action="https://docs.google.com/document/d/e/2PACX-1vQHP4Vv3HsEh2HniIrGM-XR3hppUQwrhkEJptrFYtlCx5SJl3jT9kbVQsv4mx-z4-z4JCipNp6jK2_n/pub"
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
