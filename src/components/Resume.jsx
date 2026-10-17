import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle, Calendar } from 'lucide-react';
import { resumeData, personalInfo } from '../data/portfolioData';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FileText size={14} /> Official Curriculum Vitae
          </span>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Download or view my formal curriculum vitae outlining my MBA education, banking experience, and certifications.
          </p>
        </div>

        <div className="resume-wrapper">
          <div className="resume-card">
            {/* Left Info Column */}
            <div className="resume-info">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="tech-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={13} /> Updated: {resumeData.lastUpdated}
                </span>
              </div>

              <h3>{personalInfo.name} — Professional Resume</h3>
              <p>
                A verified overview of my academic achievements, banking operations internship at India Post Payments Bank, and certified competencies in business analytics.
              </p>

              <ul className="resume-highlights-list">
                {resumeData.highlights.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Action Box */}
            <div className="resume-actions-box">
              <div className="resume-file-icon">
                <FileText size={36} />
              </div>

              <div>
                <div className="resume-file-name">{resumeData.fileName}</div>
                <div className="resume-file-meta">Verified PDF Document</div>
              </div>

              <div className="resume-buttons">
                <a
                  href={resumeData.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} /> View in New Tab
                </a>

                <a
                  href={resumeData.resumePath}
                  download="Shashwat_Joshi_Resume.pdf"
                  className="btn btn-secondary"
                >
                  <Download size={16} /> Download Resume PDF
                </a>
              </div>

              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Target: <code>public/documents/resume.pdf</code>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
