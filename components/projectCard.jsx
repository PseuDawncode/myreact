import React from 'react';

const ProjectCard = ({ name, screenshot, github, techUsed, writeup }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4 flex flex-col items-center text-center p-6">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <img src={screenshot} alt={`${name} screenshot`} className="w-full rounded-md mb-4" />
      <p className="mb-2"><strong>Technologies Used:</strong> {techUsed}</p>
      <p className="mb-2"><strong>What it does:</strong> {writeup.what}</p>
      <p className="mb-2"><strong>What I learned:</strong> {writeup.learned}</p>
      {writeup.role && <p className="mb-2"><strong>My Role:</strong> {writeup.role}</p>}
      <p className="mb-4"><strong>Challenges solved:</strong> {writeup.challenges}</p>
      <a 
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline mt-auto"
      >
        View Code on GitHub
    </a>
    </div>
  );
};

export default ProjectCard;
