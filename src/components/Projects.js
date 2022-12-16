import React from 'react';
import './Projects.css';
import Project from './Project';
import ProjectsData from './ProjectsData';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {ProjectsData.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            gitHub={project.gitHub}
            live={project.live}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
