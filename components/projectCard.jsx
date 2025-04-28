import React from 'react';

const ProjectCard = ({ name, screenshot, github, techUsed, writeup }) => {
  return (
    <div className="project-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', margin: '1rem', maxWidth: '400px' }}>
      <h2>{name}</h2>
      <img src={screenshot} alt={`${name} screenshot`} style={{ width: '100%', borderRadius: '4px' }} />
      <p><strong>Technologies Used:</strong> {techUsed}</p>
      <p><strong>What it does:</strong> {writeup.what}</p>
      <p><strong>What I learned:</strong> {writeup.learned}</p>
      {writeup.role && <p><strong>My Role:</strong> {writeup.role}</p>}
      <p><strong>Challenges solved:</strong> {writeup.challenges}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
    </div>
  );
};

export default ProjectCard;
