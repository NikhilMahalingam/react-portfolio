
import React from 'react';
import './About.css';
import Nav from '../components/Nav';
import img from '../components/images/Nikhil About 2.png'
import McGill from '../components/images/McGill.jfif'
import MLB from '../components/images/MLB.jfif'
import Aresty from '../components/images/Aresty.jfif'

const About = () => {
  return (
    <>
      <Nav/>
      <div className="parent-container">
        <div className="about-container">
          <div className="image-container">
            <img src={img} alt="Description" />
          </div>
          <div className='text-container'>
          <p className="overlay-text">I am an undergraduate student at Rutgers University - New Brunswick. I am double majoring in Electrical/Computer Engineering and Computer Science and minoring in Mathematics. 
          <br></br><br></br>My career goals are to either be an electrical electrical for the aerospace/automotive industry or a ML/AI or Software Engineer.
          <br></br><br></br>Skills:
          </p>

          <p className="skills-text">Programming:</p>
          <p className="skills-text2"><span className="underline">Langauges: </span> JavaScript · TypeScript · Python· Java</p>
          <p className="skills-text2"><span className="underline">Frameworks/Libraries: </span> React.js · Remix.js·
  Next.js · Flask · Express.js · node.js· SQL · TensorFlow/Keras · NumPy</p>
          <p className="skills-text2"><span className="underline">Developer Tools/Other: </span> Git · Vercel · Docker · Jira Agile · Scrum</p>
          <p className="skills-text">Engineering: </p>
          <p className='skills-text2'>Raspberry Pi · Arduino · Soldering · Circuits · LTSpice · Fritzing · Excel</p>
          </div>

          <div className="work-experience">
            <h2 className="section-title">Work Experience</h2>

            <section className="experience-item">
              <h3 className="position-title">AI Research Assistant</h3>
              <div className="company-container">
                <img src={Aresty} alt="Company Logo" className="company-logo" />
                <span className="company-name">Aresty Research Center - Rutgers University </span>
              </div>
              <p className="date">(Fall 2023 + Spring 2024)</p>
              <p className="description">Using Artificial Intelligence for Next-Generation Intelligent Transportation Systems</p>
              <p className="skills">Python · PyTorch · YOLO</p>
            </section>

            <section className="experience-item">
              <h3 className="position-title">Software Engineer Intern</h3>
              <div className="company-container">
                <img src={MLB} alt="Company Logo" className="company-logo" />
                <span className="company-name">Major League Baseball (MLB)</span>
              </div>
              <p className="date">(Summer 2023)</p>
              <p className="description">Built Darkroom Studio - A platform to deliver and produce data visualization for teams across MLB</p>
              <p className="skills">Remix.js · PostgreSQL · TypeScript · Express.js · Tailwind CSS · Docker · Google Cloud Platform (GCP)</p>
            </section>

            <section className="experience-item">
              <h3 className="position-title">Web Development</h3>
              <div className="company-container">
                <img src={McGill} alt="Company Logo" className="company-logo" />
                <span className="company-name">McGill University</span>
              </div>
              <p className="date">(Summer 2022))</p>
              <p className="description">Developed a website for an Intro to Statistics course at McGill University</p>
              <p className="skills">R (Programming Language) · HTML · Cascading Style Sheets (CSS) · Bookdown · JavaScript</p>
            </section>

            <section className="experience-item">
              <h3 className="position-title">Data Extraction Research Assistant</h3>
              <div className="company-container">
                <img src={McGill} alt="Company Logo" className="company-logo" />
                <span className="company-name">McGill University - Health Center</span>
              </div>
              <p className="date">(Summer 2021)</p>
              <p className="description">Extracted data from medical studies about endometriosis and utilized Microsoft Excel to create graphs to visualize trends about pain factors· medication· bias· etc.</p>
              <p className="skills">Microsoft Excel · Research · Data Analysis</p>
            </section>
        </div>

        </div>

      </div>
    </>
  );
}


export default About;