// App.tsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Hero from '../src/Components/Hero/Hero.tsx';
import AboutMe from '../src/Components/About/AboutMe.tsx';
import Projects from '../src/Components/Projects/Projects.tsx'
import Gallery from '../src/Components/Gallery/Gallery.tsx'
import { Link } from 'react-scroll';
import './App.css';


const App: React.FC = () => {
  // State to control the display of the splash screen
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Change this to control the duration of the splash screen

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  // State to control the navigation menu visibility
  const [navOpen, setNavOpen] = useState<boolean>(window.innerWidth > 768);

  return (
    <React.StrictMode>
      {!showSplash && (
        <nav className= " ">
          <button onClick={() => setNavOpen(!navOpen)}>&#9776;</button>
          {navOpen && (
            <div className="test">
              <Link activeClass="active" to="about-me-section" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link>
              <Link activeClass="active" to="Skills-section" spy={true} smooth={true} offset={-70} duration={500} >Skills</Link>
              <Link activeClass="active" to="projects-section" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
              <Link activeClass="active" to="courses-section" spy={true} smooth={true} offset={-70} duration={500}>Gallery
</Link>
            </div>
          )}
        </nav>
      )}
      {showSplash ? (
        <Hero />
      ) : (
        <>
          <AboutMe/>
          <Projects />
          <Gallery />

        </>
      )}
    </React.StrictMode>
  );
};


export default App;


