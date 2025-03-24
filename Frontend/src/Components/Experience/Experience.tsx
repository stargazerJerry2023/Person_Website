import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  companyLogo: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Dell Technologies",
    companyLogo: "https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2Fdell_technologies_Logo.png?alt=media&token=9a3a06eb-3859-4872-860b-fdc035940b29",
    period: "Summer 2025",
    description: [
      "Incoming Software Engineer Intern at Dell Technologies for the summer of 2025",
      "Working under the ISG infrastructure team"
    ],
    technologies: []
  },{
    title: "Software Engineer",
    company: "Amplify LatinX",
    companyLogo: "https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Latin_Logo.webp?alt=media&token=147e3440-786b-4936-94c7-c3a218a0a2d0",
    period: "Aug 2024 - Present",
    description: [
      "Implemented an authentication system using Auth0 to ensure user login security and protect routes preventing unauthorized access",
      "Developed a reusable custom AuthProvider component in React to manage authentication state across the Membership Portal, reducing authentication-related code redundancy by 25% and improving maintainability.",
      "Implemented a custom sign-up page using Rails controllers and views, created secure API endpoints for user registration and login, integrated Auth0 for email/password authentication and used bcrypt to encrypt passwords."
    ],
    technologies: ["React", "Rails", "Node.js", "AWS", "Auth0", "SQL"]
  },
  // Add more experiences here
];

const Experience = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="experience-section" className="experience-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Experience
      </motion.h2>
      
      <div className="timeline-container" ref={ref}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2
                }
              }
            }}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-info">
                  <div className="timeline-date">{exp.period}</div>
                  <div className="title-company">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  {exp.companyLogo && (
                    <img 
                      src={exp.companyLogo} 
                      alt={`${exp.company} logo`} 
                      className="company-logo"
                    />
                  )}
                </div>
              </div>
              <ul className="timeline-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="timeline-technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 