import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css';
import {
  FaLinkedin,
  FaInstagram,
  FaKaggle,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import { SiDevpost } from 'react-icons/si';


const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-content">
        <h1 className="about-me-title text-teal-300 text-5xl sm:text-4xl font-mono neon-effect">Hi, I'm Gerardo Vega</h1>
        <h2 className="about-me-subtitle">
        I'm a Hispanic First Generation Sophomore at Boston University Studying Computer Science Full-Stack Development.
        </h2>
        <h2 className="about-me-subtitle">
          Passionate about making an impact through technology, and continuous self-taught learning.
        </h2>
        <ul className="about-me-features">
          <li>B.A. in Computer Science at Boston University</li>
          <li>Currently Working as Hack4Impact SWE Intern</li>
          <li>Enjoy Nature aesthetic, Star gazing, hiking, going to gardens and Watching Anime and Marvel Movies</li>
          <li>When I'm not in the grind, I like to hang out with friends, going to the gym, Exploring the city and Re-watch Interstellar</li>
        </ul>

        <div className="about-me-social">
          <a href="jerryvega2011@gmail.com">
            <FaEnvelope className="social-icon" id="iconMail" />
          </a>
          <a
            href="https://www.linkedin.com/in/gerardo-vega-5a6501259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" id="iconLinkedin" />
          </a>
          <a
            href="https://github.com/stargazerJerry2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" id="iconGithub" />
          </a>
          <a
            href="https://www.instagram.com/jerryvega2004/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" id="iconInstagram" />
          </a>
          <a
            href="https://devpost.com/jerryvega2011?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiDevpost className="social-icon" id="iconDevpost" />
          </a>
          
        </div>
      </div>
      <div className="about-me-image">
        <img src="https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/IMG_3320.jpg?alt=media&token=6ecef13b-6089-4157-ba95-3a30aab50c6f" alt="Adrian's Profile" />
        <div className="quote  text-teal-300  font-mono neon-effect">
          <p>"The obstacle is the Way." - Marcus Aurelius</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
