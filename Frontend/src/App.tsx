import React, { useState, useEffect } from 'react';
import Hero from '../src/Components/Hero/Hero.tsx';
import AboutMe from '../src/Components/About/AboutMe.tsx';
import Projects from '../src/Components/Projects/Projects.tsx'
import Gallery from '../src/Components/Gallery/Gallery.tsx'
import Skills from '../src/Components/Skills/Skills.tsx'
import { Link } from 'react-scroll';
import './App.css';


const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6500); 
    return () => clearTimeout(timer); 
  }, []);

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
          <Skills />
          <Projects />
          <Gallery />
          

        </>
      )}
    </React.StrictMode>
  );
};


export default App;


