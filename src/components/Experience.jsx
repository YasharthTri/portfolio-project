import React from 'react';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section section-cream">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} /> Professional Experience
          </span>
          <h2 className="section-title">Work Experience &amp; Internships</h2>
          <p className="section-subtitle">
            Practical industry exposure in banking operations, field coordination, and device inventory management.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="education-card"
            >
              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">{exp.role}</h3>
                  <div className="edu-institution" style={{ color: 'var(--forest-primary)' }}>
                    <Building2 size={16} />
                    <span>{exp.organization}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.25rem' }}>
                    <MapPin size={14} /> {exp.location} • <span style={{ fontStyle: 'italic' }}>{exp.type}</span>
                  </div>
                </div>

                <div className="edu-duration">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {exp.duration}
                </div>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--forest-dark)', marginBottom: '0.75rem' }}>
                  Key Contributions &amp; Operational Responsibilities:
                </h4>
                <ul className="project-highlights" style={{ margin: 0 }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} style={{ color: 'var(--text-main)', fontSize: '0.92rem', marginBottom: '0.5rem' }}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
