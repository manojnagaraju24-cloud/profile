import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'Project 1',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'Project 2',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location-based forecasts',
      technologies: ['React', 'API Integration', 'CSS3'],
      image: 'Project 3',
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description: 'Interactive social media feed with user authentication',
      technologies: ['React', 'Redux', 'GraphQL'],
      image: 'Project 4',
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations',
      technologies: ['React', 'Vite', 'CSS3'],
      image: 'Project 5',
      link: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms',
      technologies: ['React', 'Socket.io', 'Express'],
      image: 'Project 6',
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
