import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Secure Logging as a Service (SLAAS)",
      description: "Cloud-based logging solution that enables organizations to delegate logging responsibilities to third-party providers. Streamlines log collection, storage, analysis, and compliance while enhancing data security and accountability for modern IT systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      technologies: ["Java", "MySQL", "Cloud Services", "Security"],
      liveLink: "https://github.com/subbulakshmi-k",
      codeLink: "https://github.com/subbulakshmi-k",
      category: "Security & Cloud"
    },
    {
      id: 2,
      title: "Cyber Hacking Breaches Prediction and Detection",
      description: "Advanced machine learning system that enhances cyber threat detection through historical attack pattern analysis. Extracts key features from network and user data to improve detection accuracy and response time, outperforming traditional security methods.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
      liveLink: "https://github.com/subbulakshmi-k",
      codeLink: "https://github.com/subbulakshmi-k",
      category: "Machine Learning & Security"
    },
    {
      id: 3,
      title: "Anonymous Cyberbullying Report System",
      description: "Secure web-based platform enabling anonymous reporting of cyberbullying incidents. Features incident categorization, evidence attachment, status tracking, and secure database storage accessible only to authorized administrators for investigation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      liveLink: "https://github.com/subbulakshmi-k",
      codeLink: "https://github.com/subbulakshmi-k",
      category: "Web Development & Security"
    },
    {
      id: 4,
      title: "New Live Stock Market",
      description: "A next-generation, real-time trading and market analysis platform designed to provide investors, traders, and analysts with instant access to live stock prices, market trends, and financial insights. Features interactive live charts, customizable watchlists, AI-driven market predictions, and smart alerts for significant price movements.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      liveLink: "https://new-stock-market27.netlify.app/",
      codeLink: "https://github.com/subbulakshmi-k",
      category: "Financial Technology"
    },
    {
      id: 5,
      title: "Stock Market Investment Platform",
      description: "A comprehensive platform designed to provide real-time market data, in-depth financial analysis, and intuitive trading tools for investors of all levels. Features interactive charts, portfolio tracking, market news integration, and AI-driven predictions to simplify complex financial data.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      liveLink: "https://stock-market-inverstment.netlify.app/",
      codeLink: "https://github.com/subbulakshmi-k",
      category: "Financial Technology"
    },
    {
      id: 6,
      title: "Painter Shopper Web Application",
      description: "Full-stack web application developed during internship at IPCS Global Technology. Features efficient painter and shopper interactions with comprehensive user interfaces, back-end logic, and database connectivity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "Django", "Web Development", "Database"],
      liveLink: "https://github.com/subbulakshmi-k",
      codeLink: "https://github.com/subbulakshmi-k",
      category: "Internship Project"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
              </svg>
              Live Demo
            </a>
            <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects & Services</h2>
          <p>Showcasing my expertise in virtual assistance and digital solutions</p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;