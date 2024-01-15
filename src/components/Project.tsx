import React, { useState } from 'react';
import './Project.css';

type ProjectCardProps = {
  imageUrl: string;
  projectLink: string;
  description: string;
};

const Project: React.FC<ProjectCardProps> = ({ imageUrl, projectLink, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
      <img src={imageUrl} alt="Project" className="project-image" />
      <a href={projectLink} className="project-link">Go to Project</a>
      <button onClick={toggleExpand} className="read-more">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      {isExpanded && <p className="project-description">{description}</p>}
    </div>
  );
};

export default Project;