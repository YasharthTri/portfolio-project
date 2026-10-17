import React from 'react';
import { ArrowUp, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-brand-logo" style={{ width: '32px', height: '32px' }}>
              <Briefcase size={16} />
            </div>
            <span>{personalInfo.name}</span>
          </div>

          <ul className="footer-nav">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Invertis University • Master of Business Administration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
