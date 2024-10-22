import React, { useState, ReactNode } from 'react';

import * as Icons from '../Skills/SkillsIcon';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCode,  faComputer, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface SkillProps {
  title: string;
  description: string;
  software: ReactNode[];
  icon: IconProp;
  className?: string;
}


const Skill: React.FC<SkillProps> = ({ title, description, software, icon, className }) => {
  return (
    <div className={`skill ${className || ''}`}>
      <h3>
        <FontAwesomeIcon icon={icon} color="#06283D" /> {title}
      </h3>
      <p>{description}</p>
      <div className="software-icons">
        {software.map((SoftwareIcon, index) => (
          <span key={index}>{SoftwareIcon}</span>
        ))}
      </div>
    </div>
  );
};


const Skills: React.FC = () => {; 

  return (
    <div className="Skills-section">
      <h1 className="centered-title">Skills</h1>
      <div className="skills">
        <div className="top-skills row flex-column flex-md-row">
          <Skill
            title="Programming Languages"
            description="Proficient in a variety of programming languages, including Python, Java, JavaScript, Ruby, and HTML/CSS. These languages enable versatile problem-solving, from backend development with Python and Ruby to interactive frontend interfaces with JavaScript and HTML/CSS. Experience across multiple languages allows for seamless integration of diverse technologies and the flexibility to choose the best language for each project, whether developing web applications, scripts, or system components."
            software={[
              <Icons.PythonIcon key="python" />,
              <Icons.JavaIcon key="java" />,
              <Icons.JsIcon key="javascript" />,
              <Icons.RubyIcon key="ruby" />,
              <Icons.HtmlIcon key="html" />,
              <Icons.CssIcon key="css" />,
            ]}
            icon={faComputer}
            className="col-12 col-md-4"
          />
          <Skill
            title="FrameWorks & Libraries"
            description="Experienced with popular frameworks and libraries such as React, Node.js, and Express.js for building robust, full-stack applications. Skilled in database management using MongoDB and MySQL, combined with cloud services like Google Cloud and Firebase to create scalable and cloud-based solutions. Skilled in User Authentication Using Auth0 and Firebase for user management and Authentication and Authorization.  Familiarity with machine learning frameworks such as Hugging Face Streamlit and OpenAI enables the development of data-driven applications that incorporate AI features for enhanced functionality."
            software={[
              <Icons.ReactIcon key="react" />,
              <Icons.NodeIcon key="node" />,
              <Icons.ScikitIcon key="scikit" />,
              <Icons.HuggingFaceIcon key="huggingface" />,
              <Icons.ExpressIcon key="express" />,
              <Icons.MongoDBIcon key="mongodb" />,
              <Icons.FirebaseIcon key="firebase" />,
              <Icons.GoogleCloudIcon key="googlecloud" />,
              <Icons.StreamlitIcon key="streamlit" />,  
              <Icons.SqlIcon key="mysql" />,
              <Icons.FastAPIIcon key="fastapi" />,
              <Icons.AwsIcon key="aws" />,
              <Icons.OpenAiIcon key="openai" />,
              <Icons.Auth0Icon key="auth0" />,
              <Icons.ReactBootstrapIcon key="reactbootstrap" />,
            ]}
            icon={faNetworkWired}
            className="col-12 col-md-4"
          />
          <Skill
            title="Developer Tools and Technologies"
            description="Proficient with essential developer tools including Git and GitHub for version control, VS Code for efficient code editing, and Docker for containerized deployments. Experience with building RESTful APIs ensures seamless communication between client and server, while expertise in authentication techniques such as Auth0 and bcrypt strengthens the security of user data. These tools and technologies facilitate efficient development workflows and robust software deployment strategies."
            software={[
              <Icons.DockerIcon key="docker" />,
              <Icons.GitIcon key="git" />,
              <Icons.GithubIcon key="github" />,
              <Icons.VsCodeIcon key="vscode" />,
             
            ]}
            icon={faBrain}
            className="col-12 col-md-4"
          />
        </div>
        <div className="bottom-skills">
          <Skill
            title="Core Technical Skills"
            description="Strong foundation in computer science fundamentals such as Data Structures & Algorithms and Object-Oriented Design, which underpin effective problem-solving and code efficiency. Adept at full-stack web development, enabling the creation of interactive and data-rich applications. Capable of developing scalable APIs to support dynamic data operations, as well as implementing secure authentication and authorization protocols to protect user information across various platforms."
            software={[
             <Icons.AlgorithmsIcon key="algorithms" />,
            ]}
            icon={faCode}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
