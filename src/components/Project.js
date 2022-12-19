import React from 'react';
import './Project.css';
import { AiFillFolder } from 'react-icons/ai';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = (props) => {
  const { title, gitHub, live, description, skills } = props;
  return (
    <div className="project-card">
      <div className="header-icons">
        <AiFillFolder className="project-icons-left" />
        <div className="project-icons-right">
          <a href={gitHub} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="project-details">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="project-skills">
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;
