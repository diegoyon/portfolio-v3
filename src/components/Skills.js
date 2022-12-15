import React from 'react';
import './Skills.css';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiRuby } from 'react-icons/di';
import { SiJavascript, SiTailwindcss, SiRubyonrails } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <AiFillHtml5 className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <DiCss3 className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <SiJavascript className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <SiTailwindcss className="skill-icon" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-card">
          <AiFillGithub className="skill-icon" />
          <p>Git & GitHub</p>
        </div>
        <div className="skill-card">
          <DiRuby className="skill-icon" />
          <p>Ruby</p>
        </div>
        <div className="skill-card">
          <SiRubyonrails className="skill-icon" />
          <p>Ruby On Rails</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
