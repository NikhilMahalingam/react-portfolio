// LandingPage.tsx
import React from 'react';
import './LandingPage.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface Props {
  firstName: string;
  lastName: string;
}

const LandingPage: React.FC<Props> = ({ firstName, lastName }) => {
  return (
      <div className="landing-container">
        <p className="small-text">Hi, I am</p>
        <p className="name-text" data-text={firstName}>{firstName}</p>
        <p className="name-text" data-text={lastName}>{lastName}</p>
        <button className="about-me-button">About Me →</button>
      </div>

  );
}

export default LandingPage;
