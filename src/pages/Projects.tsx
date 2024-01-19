import React from 'react';
import './ProjectsPage.css';
import Project from '../components/Project';
import mnist from '../components/images/mnist.png'
import toiletShowcase from '../components/images/toiletShowcase.png'
import Nav from '../components/Nav';

const Projects = () => {
  return (
    <>
    <Nav/>
    <div className="project-collection">
      <Project 
              imageUrl={toiletShowcase} 
              projectLink="https://github.com/NikhilMahalingam/ToiletFinder" 
              description="test"
              title="Restroom Finder"/>

      <Project 
              imageUrl={mnist} 
              projectLink="https://colab.research.google.com/drive/1RvszF_B6-W3BMS4C_p-j8EDlsx0yS5uw?usp=sharing" 
              description="test"
              title="MNIST Neural Network Analysis"/>


      </div>
    </>
  );
}

export default Projects;