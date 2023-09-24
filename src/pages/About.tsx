
import React from 'react';
import './About.css';
import Nav from '../components/Nav';
import img from '../components/images/Nikhil About 2.png'

const About = () => {
  return (
    <>
      <Nav/>
      <div className="about-container">
        <div className="image-container">
          <img src={img}/>
        </div>
        <div className='text-container'>
          <p className="overlay-text">I am an undergraduate student at Rutgers University - New Brunswick. I am double majoring in Electrical/Computer Engineering and Computer Science and minoring in Mathematics. My career goals are to either be an electrical electrical for the aerospace/automotive industry or a ML/AI or Software Engineer. I plan on graduating in 2025.</p>
        </div>
      </div>
    </>
  );
}

export default About;