
import React from 'react';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="brand-name">My Personal Website</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>< a href = "#Photos">Photos</a></li>
      </ul>
    </nav>
  );
}