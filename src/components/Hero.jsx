import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  const words = [ 'Full stack developer','Python Developer', 'Django Developer', 'Web Developer','UI/UX Designer'];
  const fullText = 'Subbulakshmi.K';

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % words.length;
    const fullWord = words[i];

    setText(
      isDeleting
        ? fullWord.substring(0, text.length - 1)
        : fullWord.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 100 : 200);

    if (!isDeleting && text === fullWord) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{fullText}</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Experienced Virtual Assistant with expertise in Python/Django development.
            MCA student passionate about creating efficient digital solutions and exceptional user experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
