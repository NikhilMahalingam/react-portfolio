import React, { useState } from 'react';
import './Project.css';

type ProjectCardProps = {
  imageUrl: string;
  projectLink: string;
  description: string;
  title: string;
};

const Project: React.FC<ProjectCardProps> = ({ imageUrl, projectLink, description, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="overlay">
          <div className="title">{title}</div>
        </div>
      </div>
      <a href={projectLink} className="project-link" target="_blank" rel="noopener noreferrer">Go to Project</a>
      <button onClick={toggleExpand} className="read-more">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      {isExpanded && <p className="project-description">{description}</p>}
    </div>
  );
};


export default Project;