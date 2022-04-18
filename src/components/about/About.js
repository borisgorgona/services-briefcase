import React from 'react';
import "./About.css";
import aboutFoto from "../../media/aboutFoto.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
          <h3>Let me tell you something about me</h3>
          <p> Software developer with experience in component creation 
              and maintenance of ReactJs based software systems. 
              I have skills like: Attention to detail, problem resolution, 
              communicative skills, logical thinking and good capacity for 
              collaboration within a productive team.</p>
      </div>
      <div className="about-img">
          <img src = {aboutFoto} alt="about"/>
      </div>
    </div>
  )
}

export default About
