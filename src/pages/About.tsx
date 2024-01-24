
import './About.css';
import Nav from '../components/Nav';
import img from '../components/images/Nikhil About 2.png'

const About = () => {
  return (
    <div>
      <Nav/>
      <div className="parent-container">
        <div className="about-container">

          <div className='text-container'>

          <div className="image-container">
            <img src={img} alt="Description" />
          </div>

          <div className="overlay-text">
          <p>I am an undergraduate student at Rutgers University - New Brunswick. I am double majoring in Electrical/Computer Engineering and Computer Science and minoring in Mathematics. 
          <br></br><br></br>My career goals are to either be an electrical/computer engineer for the aerospace/automotive industry or a ML/AI or Software Engineer.
          </p>
          </div>
    
          </div>
        </div>

        <div className="skills-section">
        <p className="skills-text">Programming:</p>
          <p className="skills-text2"><span className="underline">Langauges:  </span> Python · Java · JavaScript + (TypeScript) · MATLAB · HTML/CSS · SQL</p>
          <p className="skills-text2"><span className="underline">Frameworks/Libraries: </span> React.js + (Remix.js & 
  Next.js) · Flask · Express · TensorFlow/Keras · NumPy</p>
          <p className="skills-text2"><span className="underline">Developer Tools/Other: </span> Git · Vercel · Docker · Jira · Google Cloud Platform</p>
          <p className="skills-text">Engineering: </p>
          <p className='skills-text2'>Verilog · Raspberry Pi · Arduino · Soldering · LTSpice · Excel · Agile · Scrum</p>
          </div>
      
      </div>
      </div>
  );
}


export default About;