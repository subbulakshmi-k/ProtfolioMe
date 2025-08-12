import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'Machine Learning', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'Git', level: 85 }
  ];

  const education = [
    {
      year: '2024 - Present',
      title: 'MCA Computer Applications',
      company: 'Mepco Schlenk Engineering College, Sivakasi',
      description: 'Currently pursuing Master of Computer Applications with CGPA: 7.50 (2st Semester)'
    },
    {
      year: '2021 - 2024',
      title: 'BSc Computer Science',
      company: 'Madurai Kamaraj University, Madurai',
      description: 'Completed Bachelor of Science in Computer Science with 80% aggregate'
    },
    {
      year: '2020 - 2021',
      title: 'HSC Computer Science',
      company: 'Navalasomasundara Bharathiyar HSC, Madurai',
      description: 'Higher Secondary Certificate in Computer Science'
    },
    {
      year: '2018 - 2019',
      title: 'SSLC',
      company: 'Navalasomasundar Bharathiyar HSC, Madurai',
      description: 'Secondary School Leaving Certificate'
    }
  ];

  const experiences = [
    {
      year: 'June 13-19, 2025',
      title: 'Python/Django Intern',
      company: 'IPCS Global Technology, Thirunelveli',
      description: 'Developed the "Painter Shopper" web application using Django and Python. Designed and implemented user interfaces for efficient painter and shopper interactions. Learned practical aspects of web development, back-end logic, and database connectivity. Managed complete project development cycle from requirements gathering to deployment. Successfully developed and showcased real-world web solutions, demonstrating adaptability to new technologies and platforms.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate computer science student and aspiring software developer with expertise in Python, Java, and web technologies.
              Currently pursuing MCA at Mepco Schlenk Engineering College, I specialize in creating secure, scalable applications
              that address real-world challenges in cybersecurity and web development.
            </p>
            <p>
              My journey in technology started with a curiosity about cybersecurity and has evolved into developing
              innovative solutions like secure logging systems, machine learning-based threat detection, and anonymous reporting platforms.
            </p>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="interpersonal-skills">
            <h3>Interpersonal Skills</h3>
            <div className="soft-skills-list">
              <div className="soft-skill-item">
                <span className="skill-icon">🎯</span>
                <span>Ability to cope with different situations</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-icon">⏰</span>
                <span>Excellent time management abilities</span>
              </div>
              <div className="soft-skill-item">
                <span className="skill-icon">🤝</span>
                <span>Ability to rapidly build relationships and establish trust</span>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{edu.year}</div>
                  <div className="timeline-content">
                    <h4>{edu.title}</h4>
                    <p className="company">{edu.company}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3>Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{exp.year}</div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
