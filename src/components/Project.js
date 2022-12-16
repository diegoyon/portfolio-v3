import React from 'react';
import './Project.css';

const Project = (props) => {
  const { title, gitHub, live, description, skills } = props;
  return (
    <div className="project-card">
      <p>{title}</p>
      <p>{gitHub}</p>
      <p>{live}</p>
      <p>{description}</p>
      <p>{skills}</p>
    </div>
  );
};

export default Project;
