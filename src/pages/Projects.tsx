import React from 'react';
import './ProjectsPage.css';
import Nav from '../components/Nav';
import Project from '../components/Project';

import mnist from '../components/images/mnist.png'
import toiletShowcase from '../components/images/toiletShowcase.png'
import aiContent from '../components/images/whyimsingle.png'
import fitpics from '../components/images/fitpics.jpg'
import bookdown from '../components/images/bookdownShowcase.png'
import greeroutes from '../components/images/greenroutes.jpg'
import flight from '../components/images/flightgrapher.jpg'


const Projects = () => {
  return (
    <>
    <Nav/>
    <div className="project-collection">

        <Project 
              imageUrl={aiContent} 
              projectLink="https://www.wkndmvp.com/posts/whyimsingle.html" 
              description="The spectacular launch of ChatGPT in November 2022 appears to be one of the most disruptive technologies of the past decade. Although OpenAI’s large language models seem to have all the answers, it feels like we’ve been left with more questions than ever before. While meaning, purposes, and education are all under question, the team at Weekend MVP’s biggest question was how SEO might be disrupted by artificial intelligence. To explore this, we used GPT-4 to generate hundreds of pages and launched WhyImSingle.lol, a leaderboard-style blog site that humorously covers news on high-profile celebrity and socialite divorces."
              title="AI-Powered Content Generator"/>

        <Project 
              imageUrl={flight} 
              projectLink="https://colab.research.google.com/drive/1mCEYsiIeZrvzUletvqla9m0N1FlQMjfB?usp=sharing" 
              description="This project stands out for its integration of machine learning, physics, and data visualization to provide insights into 3D motion dynamics. It showcases the potential of neural networks in understanding and predicting complex physical phenomena. You can create a server and client using a raspberry pi zero w and hook up a compact power bank and an mpu gyroscope to transmit this data and graph it in real time as well."
              title="Flight Path Grapher"/>

        <Project 
              imageUrl={fitpics} 
              projectLink="https://www.wkndmvp.com/posts/fitpics.html" 
              description="Fitpics.co is a website that revolutionizes personal fitness tracking. Originating from the understanding that accountability is essential in any fitness journey, our platform serves as a digital accountability partner. It enables users to easily track their progress through text-based updates and progress pictures. Designed to keep users engaged and committed to their fitness goals, Fitpics.co is the go-to tool for anyone looking to effectively monitor their health and fitness transformation."
              title="Fitpics.co - Fitness Tracker"/>


        <Project 
              imageUrl={mnist} 
              projectLink="https://colab.research.google.com/drive/1RvszF_B6-W3BMS4C_p-j8EDlsx0yS5uw?usp=sharing" 
              description="Constructed and optimized a deep Neural Network 3 different ways: ANN, CNN, and from scratch using NumPy."
              title="MNIST Neural Network Analysis"/>

        <Project 
              imageUrl={greeroutes} 
              projectLink="https://github.com/NikhilMahalingam/GreenRoutes" 
              description="This project features an innovative itinerary generator, a standout project and one of the winners at HackRU. This tool harnesses the power of AI to create personalized activity plans tailored to your local area. Whether you're looking for a day of adventure or a relaxed evening out, our generator sifts through a myriad of options to curate the perfect itinerary for your needs. It's an ideal solution for anyone seeking to explore their surroundings with ease and convenience, all thanks to the latest in AI technology."
              title="GreenRoutes (HackRU 2023 Winner!)"/>

        <Project 
              imageUrl={toiletShowcase} 
              projectLink="https://github.com/NikhilMahalingam/ToiletFinder" 
              description="This project proudly features a user-friendly restroom finder, a notable project that emerged as one of the winners at SBU Hacks. This practical tool utilizes advanced mapping technology to swiftly locate and display restrooms in your immediate area. Designed for convenience and ease of use, it's the perfect solution for anyone needing to find nearby restroom facilities quickly. Whether you're navigating a busy city or exploring new areas, our restroom finder ensures that the nearest amenities are just a click away, enhancing your outdoor experiences with added peace of mind."
              title="Restroom Finder (SBU Hacks 2022 Winner!)"/>

        <Project 
              imageUrl={bookdown} 
              projectLink="https://github.com/NikhilMahalingam/IntroToStats-Bookdown" 
              description= "An Intro to Statistics resource, originally developed for a course at McGill University. This concise, user-friendly site offers foundational knowledge in statistics, making it an ideal starting point for students and enthusiasts alike."
              title="Intro to Statistics Website"/>


      </div>
    </>
  );
}

export default Projects;