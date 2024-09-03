import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="profile-section">
        <img className="profile-img" src="https://i.ibb.co/3Rx91t9/paras-a4.jpg" alt="Profile" />
        <div className="social-icons">
          <a href="https://github.com/parasdiwakar1" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/paras-diwakar-738611280/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:paras208017@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="header-section">
        <h1 className="header-title">
          Hello <br />
          I'm <span className="highlight">Paras Diwakar</span>
        </h1>
        <p className="header-description">
          I'm a full stack web developer.
        </p>
        <h2 className="header-subtitle">
        Welcome to my portfolio! This site, built with React, showcases my work as a web developer. I specialize in creating visually appealing and user-friendly
        </h2>
      </div>
    </div>
  );
}

export default Home;
