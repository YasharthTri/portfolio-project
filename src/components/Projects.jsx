import React from 'react';
import { Target, Award } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section section-cream">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Target size={14} /> Practical Initiatives
          </span>
          <h2 className="section-title">Projects &amp; Academic Leadership</h2>
          <p className="section-subtitle">
            Strategic initiatives, cohort leadership, and practical case evaluations completed during MBA studies.
          </p>
        </div>

        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-top">
                <span className="project-badge-featured">
                  <Award size={13} /> {project.organization}
                </span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <div style={{ fontSize: '0.88rem', color: 'var(--forest-primary)', fontWeight: 600, marginBottom: '0.85rem' }}>
                  {project.subtitle}
                </div>
                <p className="project-description">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="project-tech-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
