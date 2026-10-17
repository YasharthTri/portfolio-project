import React from 'react';
import { BarChart, FolderKanban, Users2, Sparkles, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  if (category.includes('Analytics') || category.includes('Digital')) {
    return <BarChart size={22} />;
  }
  if (category.includes('Project') || category.includes('Operations')) {
    return <FolderKanban size={22} />;
  }
  return <Users2 size={22} />;
};

const Skills = () => {
  return (
    <section id="skills" className="section section-ivory">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> Core Competencies
          </span>
          <h2 className="section-title">Skills &amp; Capabilities</h2>
          <p className="section-subtitle">
            A balanced portfolio of analytical tools, managerial execution, and cross-functional leadership skills.
          </p>
        </div>

        <div className="skills-container-grid">
          {skillsData.map((catGroup, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(catGroup.category)}
                </div>
                <h3 className="category-title">{catGroup.category}</h3>
              </div>

              <div className="skills-list">
                {catGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <span className="skill-level-dot"></span>
                    <span>{skill.name}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--slate-400)', marginLeft: '0.25rem', fontWeight: 600 }}>
                      ({skill.level})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
