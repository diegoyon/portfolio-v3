import React from 'react';
import './Project.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = (props) => {
  const { title, gitHub, live, description, skills } = props;
  return (
    <div className="project-card">
      <h4>{title}</h4>
      <div className="project-description">
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="project-skills">
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
      <div className="card-icons">
        <a href={gitHub} target="_blank" rel="noreferrer">
          <FiGithub className="card-icons-specific" />
        </a>
        <a href={live} target="_blank" rel="noreferrer">
          <FiExternalLink className="card-icons-specific" />
        </a>
      </div>
    </div>
  );
};

export default Project;
