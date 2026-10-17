import React from 'react';
import { User, GraduationCap, Briefcase, BarChart3, Users, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section section-ivory">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <User size={14} /> Profile Overview
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Academic progression, operational banking background, and professional goals.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Content */}
          <div className="about-content">
            <p>
              {personalInfo.about}
            </p>
            <p>
              During my internship at <strong>India Post Payments Bank (Bareilly)</strong>, I engaged in ground-level financial service operations, device inventory tracking, onsite surveys, and customer documentation coordination. This hands-on experience instilled a strong appreciation for process discipline, operational accountability, and client-facing communication.
            </p>
            <p>
              Complementing my managerial studies, I actively enhance my analytical skillset with recognized certifications in <strong>Microsoft Power BI</strong> (business intelligence &amp; dashboard reporting), <strong>Marketing Analytics Foundations</strong> (LinkedIn Learning), <strong>Project Management</strong>, and <strong>Digital Marketing</strong> (Lernx).
            </p>

            <div className="about-highlights-grid">
              <div className="about-stat-card">
                <div className="stat-icon">
                  <GraduationCap size={20} />
                </div>
                <div className="stat-title">Current Program</div>
                <div className="stat-value">MBA (2025 – 2027)</div>
              </div>

              <div className="about-stat-card">
                <div className="stat-icon">
                  <Briefcase size={20} />
                </div>
                <div className="stat-title">Industry Exposure</div>
                <div className="stat-value">Banking &amp; Operations</div>
              </div>

              <div className="about-stat-card">
                <div className="stat-icon">
                  <BarChart3 size={20} />
                </div>
                <div className="stat-title">Analytical Focus</div>
                <div className="stat-value">Power BI &amp; Marketing Analytics</div>
              </div>

              <div className="about-stat-card">
                <div className="stat-icon">
                  <Users size={20} />
                </div>
                <div className="stat-title">Leadership</div>
                <div className="stat-value">Team Cohort Lead (4–5 peers)</div>
              </div>
            </div>
          </div>

          {/* Quick Information Panel */}
          <div className="about-info-panel">
            <h3 className="panel-title">
              <CheckCircle2 size={20} color="var(--forest-primary)" /> Candidate Summary
            </h3>
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">Full Name</span>
                <span className="info-val">{personalInfo.name}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Postgraduate</span>
                <span className="info-val">MBA, Invertis University</span>
              </div>
              <div className="info-row">
                <span className="info-label">Undergraduate</span>
                <span className="info-val">B.A., MJPRU (68%)</span>
              </div>
              <div className="info-row">
                <span className="info-label">Location</span>
                <span className="info-val">Bareilly, Uttar Pradesh</span>
              </div>
              <div className="info-row">
                <span className="info-label">Contact Phone</span>
                <span className="info-val">{personalInfo.phone}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Direct Email</span>
                <span className="info-val" style={{ fontSize: '0.85rem' }}>{personalInfo.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Status</span>
                <span className="info-badge">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
