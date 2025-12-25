import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
  <div className="left-section">
    <div className="about-section">
      <div className="image-wrapper">
        <img
          src="https://res.cloudinary.com/duhlo06nb/image/upload/v1766645813/20250329_170557_xzrlfn.jpg"
          alt="Avatar"
        />
      </div>
      <div className="content">
        <div className="social_icons">
          <a href="https://github.com/Shristythapa" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/shristythapa/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        <h1>Shristy Thapa</h1>
        {/* <p>Full Stack Engineer</p> */}

        <div className="mobile_social_icons">
          <a href="https://github.com/Shristythapa" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/shristythapab7a268225" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="right-section ">
    <h1>Skills</h1>
    <p>AI & Machine Learning: LLMs (Large Language Models), NLP (Natural Language Processing), RAG (Retrieval-Augmented Generation), Prompt Engineering, Transfer Learning</p> 
    <p>Backend Development: Python, FastAPI, Flask, REST APIs (Scrum)</p>
    <p>Data & Analytics: SQL, Excel, Tableau, Exploratory Data Analysis (EDA), PostgreSQL, MongoDB</p>
    <p>DevOps & Tools: Docker, Git</p>
    <p>Soft Skills: Critical Thinking, Quick Learning, Teamwork, Communication, Leadership (Scrum Master experience)</p>
  </div>
</div>

  );
}

export default Main;