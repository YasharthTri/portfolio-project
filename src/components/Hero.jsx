import React from 'react';
import { ArrowRight, Download, Mail, Award, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo, resumeData, certificationsData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>{personalInfo.availability}</span>
            </div>

            <p className="hero-greeting" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.95rem' }}>
              Welcome to the Professional Portfolio of
            </p>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-headline">
              <span>MBA Candidate</span> • Business Administration &amp; Marketing Analytics
            </h2>

            <p className="hero-tagline">
              {personalInfo.tagline}
            </p>

            <div className="hero-actions">
              <a href="#certifications" className="btn btn-primary">
                <Award size={18} /> View Credentials ({certificationsData.length})
              </a>
              <a href={resumeData.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Download size={18} /> View Resume (PDF)
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <span className="hero-socials-label">Connect:</span>
              {personalInfo.socialLinks.linkedin && (
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
              )}
              {personalInfo.socialLinks.email && (
                <a
                  href={personalInfo.socialLinks.email}
                  className="social-icon-link"
                  aria-label="Email Shashwat Joshi"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Right Visual / Executive Card */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-image-wrapper">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="hero-image"
                  onError={(e) => {
                    e.currentTarget.src = '/images/profile-placeholder.svg';
                  }}
                />
              </div>

              <div className="hero-card-meta">
                <div className="hero-card-name">{personalInfo.name}</div>
                <div className="hero-card-status">
                  <GraduationCap size={16} />
                  <span>MBA (2025–2027) • Invertis University</span>
                </div>

                <div className="hero-card-specs">
                  <div className="spec-item">
                    <span className="spec-label">Experience</span>
                    <span className="spec-value">India Post Payments Bank</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Location</span>
                    <span className="spec-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
