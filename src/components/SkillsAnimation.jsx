import React, { useState, useEffect } from 'react';
import './SkillsAnimation.css';

const SkillsAnimation = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/SCSS', level: 88 },
    { name: 'MongoDB', level: 75 },
    { name: 'TypeScript', level: 70 }
  ];

  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map(skill => ({ ...skill, currentLevel: 0 }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedSkills(prevSkills => 
        prevSkills.map(skill => ({
          ...skill,
          currentLevel: Math.min(skill.currentLevel + 2, skill.level)
        }))
      );
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="skills-animation">
      <h3>Technical Skills</h3>
      <div className="skills-container">
        {animatedSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.currentLevel}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.currentLevel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAnimation;
