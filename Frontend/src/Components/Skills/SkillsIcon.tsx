// SkillsIcons.tsx

import React, { useState,} from 'react';
import './SkillsIcon.css';


import {FaPython, FaRProject, FaAws, FaJava,} from 'react-icons/fa';
import {
  
  SiThealgorithms,
  SiReactbootstrap,
  SiVisualstudiocode,
  SiGithub,
  SiGit,
  SiAuth0,
  SiStreamlit,
  SiFirebase,
  SiExpress,
  SiNodedotjs,
  SiRuby,
  SiMongodb,
  SiPandas,
  SiMysql,
  SiScikitlearn,
  SiFastapi,
  SiGooglecloud,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiDocker,
  SiHuggingface
} from 'react-icons/si';


interface SkillModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
}


const SkillModal: React.FC<SkillModalProps> = ({
  isVisible,
}) => {
  return (
    isVisible 
  );
};
interface IconComponentProps {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

export const AlgorithmsIcon: React.FC = () => (
  <SkillIcon
    id="icon-algorithms"
    title="Algorithms"
    description="Experience with algorithms and data structures for problem-solving and optimization. Proficient in implementing algorithms for sorting, searching, graph traversal, and dynamic programming."
    Icon={SiThealgorithms}
  />
);

export const StreamlitIcon: React.FC = () => (
  <SkillIcon
    id="icon-streamlit"
    title="Streamlit"
    description="Experience with Streamlit for building interactive web applications and data visualizations. Proficient in using Streamlit with Python for creating data-driven applications and dashboards."
    Icon={SiStreamlit}
  />
);

export const ReactBootstrapIcon: React.FC = () => (
  <SkillIcon
    id="icon-reactbootstrap"
    title="React Bootstrap"
    description="Experience with React Bootstrap for building responsive web applications and user interfaces. Proficient in using React Bootstrap components for layout, navigation, and styling."
    Icon={SiReactbootstrap}
  />
);

export const VsCodeIcon: React.FC = () => (
  <SkillIcon
    id="icon-vscode"
    title="Visual Studio Code"
    description="Experience with Visual Studio Code for code editing, debugging, and version control. Proficient in using Visual Studio Code with extensions for various programming languages and frameworks."
    Icon={SiVisualstudiocode}
  />
);


export const GithubIcon: React.FC = () => (
  <SkillIcon
    id="icon-github"
    title="GitHub"
    description="Experience with GitHub for version control, collaboration, and project management. Proficient in using Git for tracking changes, managing repositories, and collaborating with other developers."
    Icon={SiGithub}
  />
);

export const GitIcon: React.FC = () => (
  <SkillIcon
    id="icon-git"
    title="Git"
    description="Experience with Git for version control, branching, merging, and collaboration. Proficient in using Git for tracking changes, managing repositories, and working with remote repositories."
    Icon={SiGit}
  />
);

export const Auth0Icon: React.FC = () => (
  <SkillIcon
    id="icon-auth0"
    title="Auth0"
    description="Experience with Auth0 for authentication and authorization services. Proficient in using Auth0 for secure user authentication, single sign-on, and role-based access control."
    Icon={SiAuth0}
  />
);

export const NodeIcon: React.FC = () => (
  <SkillIcon
    id="icon-node"
    title="Node.js"
    description="Experience with Node.js for building scalable backend applications, RESTful APIs, and server-side applications. Proficient in using Node.js with Express.js for building web servers and APIs."
    Icon={SiNodedotjs}
  />
);

export const FirebaseIcon: React.FC = () => (
  <SkillIcon
    id="icon-firebase"
    title="Firebase"
    description="Experience with Firebase for building web and mobile applications, including authentication, real-time databases, and cloud functions. Proficient in using Firebase for rapid prototyping and development of applications."
    Icon={SiFirebase}
  />
);
export const ExpressIcon: React.FC = () => (
  <SkillIcon
    id="icon-express"
    title="Express.js"
    description="Experience with Express.js for building web applications and RESTful APIs. Proficient in using Express.js with Node.js for server-side applications and backend development."  
    Icon={SiExpress}
  />
);

export const GoogleCloudIcon: React.FC = () => (
  <SkillIcon
    id="icon-googlecloud"
    title="Google Cloud"
    description="Experience with Google Cloud Platform for cloud computing, storage, and machine learning services. Proficient in using Google Cloud services such as Compute Engine, Cloud Storage, and BigQuery."
    Icon={SiGooglecloud}
  />
);

export const HuggingFaceIcon: React.FC = () => (
  <SkillIcon
    id="icon-huggingface"
    title="Hugging Face"
    description="Experience with Hugging Face Transformers for natural language processing tasks, such as text generation, text classification, and text summarization. Proficient in using Hugging Face models for various NLP applications."
    Icon={SiHuggingface}
  />
);

export const JavaIcon: React.FC = () => (
  <SkillIcon
    id="icon-java"
    title="Java"
    description="Proficient in Java for building robust backend systems, enterprise applications, and Android development. Experienced with Java frameworks such as Spring and Hibernate, and skilled in object-oriented programming and design patterns."
    Icon={FaJava}
  />
);
const SkillIcon: React.FC<IconComponentProps> = ({
  id,
  title,
  description,
  Icon,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <div className="skill-icon" id={id}>
      <Icon onClick={toggleModal} className="icon-svg" />
      <SkillModal
        isVisible={modalVisible}
        onClose={toggleModal}
        title={title}
        description={description}
      />
    </div>
  );
};


export const MongoDBIcon: React.FC = () => (
  <SkillIcon
    id="icon-mongodb"
    title="MongoDB"
    description="Experience with MongoDB for NoSQL database management, including data modeling, aggregation, indexing, and performance optimization. Proficient in integrating MongoDB with various backend technologies."
    Icon={SiMongodb}
  />
);

export const RubyIcon: React.FC = () => (
  <SkillIcon
    id="icon-ruby"
    title="Ruby"
    description="Proficient in Ruby for backend development, web applications, and automation scripts. Experienced with Ruby on Rails for rapid prototyping and building scalable web applications."
    Icon={SiRuby}
  />
);

export const PythonIcon: React.FC = () => (
  <SkillIcon
    id="icon-python"
    title="Python"
    description="Advanced Data Wrangling with Numpy, Pandas and Geopandas. Advanced and appealing visualizations with Matplotlib, Seaborn and Plotly. Advanced Web Development with Dash and Streamlit. Advanced Machine Learning (Classification, Regression and Clustering) with Scikit-learn and TensorFlow. Creation of API's with FastAPI"
    Icon={FaPython}
  />
);

export const PandasIcon: React.FC = () => (
  <SkillIcon
    id="icon-pandas"
    title="Pandas"
    description="Advanced use of Pandas for data manipulation and analysis."
    Icon={SiPandas}
  />
);






export const RIcon: React.FC = () => (
  <SkillIcon
    id="icon-r"
    title="R"
    description="Advanced data manipulation and analysis with dplyr and ggplot2. Advanced data visualization with ggplot2. Creation of dashboards with Shiny."
    Icon={FaRProject}
  />
);

export const SasIcon: React.FC = () => (
  <div className="skill-icon" id="icon-sas">
    <svg
      className="icon-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 8.316 8.316"
    >
      {/* SVG Path Data */}
      <path d="M4.158.001c-.28-.006-.567.026-.862.1-1.364.34-2.89 2.096-1.224 4.12l.995 1.205.28.343c.19.224.497.22.724.033s.293-.496.105-.724l-.114-.138h.005l-.162-.2-.77-.933c-.724-.88-.4-1.964.58-2.58.865-.543 2.453-.35 3 .543C6.37.76 5.366.028 4.158.001zm.2 2.124a.57.57 0 0 0-.376.138c-.228.188-.292.496-.105.724a7.91 7.91 0 0 0 .062.076l1.005 1.214c.724.88.4 1.96-.58 2.576-.865.543-2.453.35-3-.543.424 1.252 1.846 2.07 3.42 1.676 1.365-.34 2.89-2.09 1.224-4.115l-1.167-1.4-.133-.167a.47.47 0 0 0-.348-.171z" />
    </svg>
    <SkillModal
      isVisible={false} // Update with actual visibility state if needed
      onClose={() => {}}
      title="SAS"
      description="Advanced data manipulation and analysis with SAS Programming. Advanced data visualization with SAS Visual Analytics. Creation of models with SAS Viya."
    />
  </div>
);








export const SqlIcon: React.FC = () => (
  <SkillIcon
    id="icon-sql"
    title="SQL"
    description="Advanced use of SQL of different databases such as MySQL, PostgreSQL, and SQL Server. Experience with Data Query (DQL), Data Manipulation (DML), and Data Definition (DDL)."
    Icon={SiMysql}
  />
);

export const ScikitIcon: React.FC = () => (
  <SkillIcon
    id="icon-scikitlearn"
    title="SciKit-Learn"
    description="Advanced use of regression techniques. Advanced use of classification techniques. Advanced use of clustering techniques. Advanced use of dimensionality reduction techniques."
    Icon={SiScikitlearn}
  />
);






export const FastAPIIcon: React.FC = () => (
  <SkillIcon
    id="icon-fastapi"
    title="Fast API"
    description="Advanced development and deployment of APIs using FastAPI."
    Icon={SiFastapi}
  />
);

export const AwsIcon: React.FC = () => (
  <SkillIcon
    id="icon-aws"
    title="AWS"
    description="Experience with usage of Amazon Web Services for cloud computing, storage, and machine learning services."
    Icon={FaAws}
  />
);


export const DockerIcon: React.FC = () => (
  <SkillIcon
    id="icon-docker"
    title="Docker"
    description="Experience with containerization and deployment of applications using Docker."
    Icon={SiDocker}
  />
);

export const OpenAiIcon: React.FC = () => (
  <SkillIcon
    id="icon-openai"
    title="Open AI"
    description="Experience with usage of OpenAI's GPT-3 API for text generation and other NLP tasks."
    Icon={SiOpenai}
  />
);

export const HtmlIcon: React.FC = () => (
  <SkillIcon
    id="icon-html"
    title="HTML"
    description="Advanced use of HTML for web development and design."
    Icon={SiHtml5}
  />
);

export const CssIcon: React.FC = () => (
  <SkillIcon
    id="icon-css"
    title="CSS"
    description="Advanced use of CSS for web development and design. Experience with CSS frameworks such as Bootstrap."
    Icon={SiCss3}
  />
);

export const JsIcon: React.FC = () => (
  <SkillIcon
    id="icon-javascript"
    title="JavaScript"
    description="Advanced use of JavaScript for web development and design. Experience with JavaScript frameworks such as React."
    Icon={SiJavascript}
  />
);

export const ReactIcon: React.FC = () => (
  <SkillIcon
    id="icon-react"
    title="React"
    description="Experience with React for building interactive user interfaces, single-page applications, and multi-page applications."
    Icon={SiReact}
  />
);
