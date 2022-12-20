import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <p>
        Hello! My name is Diego and I enjoy building new things that live on the
        internet. My interest in computer programming started back in 2010 when
        I was in college studying Mechatronics Engineering. Now, I enjoy
        building full web applications while solving all kind of different
        challenges that they may present.
      </p>
      <p>
        Lately, I’ve had the privilege of working remotely with other software
        developers around the world which has enhanced my skills and rate of
        learning. My main focus these days is building digital products with
        great user experience and unique designs. With my experience I have what
        it takes to solve real world problems.
      </p>
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
