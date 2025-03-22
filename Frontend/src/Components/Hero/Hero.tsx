import { useState, useEffect } from 'react';
import './Hero.css'

const Hero = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const passwordTimer = setTimeout(() => {
      setShowPassword(true);
    }, 1000);

    const typePassword = setTimeout(() => {
      const pass = '**********';
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < pass.length - 1 ) {
          setPassword(prev => prev + pass[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setShowWelcome(true);
          }, 100);
        }
      }, 200);
    }, 2000);

    return () => {
      clearTimeout(passwordTimer);
      clearTimeout(typePassword);
    };
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
          <div className="terminal-title">gerardo@portfolio ~ /login</div>
        </div>
        <div className="terminal-content">
          <div className="command-line">
            <span className="prompt">gerardo@portfolio:~$</span>
            <span className="command">login</span>
          </div>
          {showPassword && (
            <div className="command-line">
              <span className="prompt">Enter password:</span>
              <span className="password">{password}</span>
            </div>
          )}
          {showWelcome && (
            <div className="welcome-message">
              <div className="access-granted">Access Granted</div>
              <div className="welcome-text">Welcome, Gerardo Vega</div>
              <div className="subtitle">Software Engineer | Full Stack Developer</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;