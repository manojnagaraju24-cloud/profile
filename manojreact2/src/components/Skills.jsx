import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'Webpack', 'NPM', 'VS Code', 'Figma']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skillsData.map((group, index) => (
            <div key={index} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skills-list">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
