
import React from 'react';
import './About.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img from '../components/images/Nikhil About.png'

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="image-container">
          <img src={img} alt="Descriptive alt text" />
          <p className="overlay-text">Hi, I'm Nikhil, an undergraduate student at Rutgers University - New Brunswick. I am double majoring in Electrical/Computer Engineering and Computer Science and minoring in Mathematics. My career goals are to either be an electrical electrical for the aerospace/automotive industry or a ML/AI or Software Engineer. I plan on graduating in 2025.</p>
        </div>
      </div>
    </>
  );
}

export default About;