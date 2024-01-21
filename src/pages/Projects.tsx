import React from 'react';
import './ProjectsPage.css';
import Nav from '../components/Nav';
import Project from '../components/Project';

import mnist from '../components/images/mnist.png'
import toiletShowcase from '../components/images/toiletShowcase.png'
import aiContent from '../components/images/whyimsingle.png'
import fitpics from '../components/images/fitpics.jpg'
import bookdown from '../components/images/bookdownShowcase.png'


const Projects = () => {
  return (
    <>
    <Nav/>
    <div className="project-collection">

        <Project 
              imageUrl={aiContent} 
              projectLink="https://www.wkndmvp.com/posts/whyimsingle.html" 
              description="test"
              title="AI-Powered Content Generator"/>

        <Project 
              imageUrl={fitpics} 
              projectLink="https://www.wkndmvp.com/posts/fitpics.html" 
              description="test"
              title="Fitpics.co - Fitness Tracker"/>


        <Project 
              imageUrl={mnist} 
              projectLink="https://colab.research.google.com/drive/1RvszF_B6-W3BMS4C_p-j8EDlsx0yS5uw?usp=sharing" 
              description="test"
              title="MNIST Neural Network Analysis"/>

        <Project 
              imageUrl={toiletShowcase} 
              projectLink="https://github.com/NikhilMahalingam/GreenRoutes" 
              description="test"
              title="GreenRoutes (HackRU 2023 Winner!)"/>

        <Project 
              imageUrl={toiletShowcase} 
              projectLink="https://github.com/NikhilMahalingam/ToiletFinder" 
              description="test"
              title="Restroom Finder (SBU Hacks 2022 Winner!)"/>

        <Project 
              imageUrl={bookdown} 
              projectLink="https://github.com/NikhilMahalingam/IntroToStats-Bookdown" 
              description="test"
              title="Intro to Statistics Website"/>


      </div>
    </>
  );
}

export default Projects;