import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section section-ivory">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} /> Academic Background
          </span>
          <h2 className="section-title">Education &amp; Qualifications</h2>
          <p className="section-subtitle">
            Formal educational milestones spanning management studies, undergraduate degree, and schooling.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution">
                    <span>{edu.institution}</span>
                    <span style={{ color: 'var(--border-color)' }}>•</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>
                </div>

                <div className="edu-duration">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {edu.duration}
                </div>
              </div>

              {edu.grade && (
                <div className="edu-grade">
                  {edu.grade}
                </div>
              )}

              {edu.description && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '0.85rem' }}>
                  {edu.description}
                </p>
              )}

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="edu-achievements" style={{ marginTop: '0.5rem', paddingTop: '0.75rem' }}>
                  {edu.highlights.map((ach, aIdx) => (
                    <li key={aIdx}>
                      <CheckCircle2 size={15} color="var(--forest-primary)" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
