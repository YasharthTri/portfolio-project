import React, { useState } from 'react';
import { Award, FileText, Image as ImageIcon, ExternalLink, Eye, X } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredCerts = certificationsData.filter((cert) => {
    if (activeFilter === 'pdf') return cert.type === 'pdf';
    if (activeFilter === 'image') return cert.type === 'image';
    return true;
  });

  return (
    <section id="certifications" className="section section-ivory">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} /> Certified Credentials
          </span>
          <h2 className="section-title">Certifications &amp; Accreditations</h2>
          <p className="section-subtitle">
            Verified credentials in Marketing Analytics, Microsoft Power BI, Google Cloud Generative AI, Project Management, and Digital Marketing.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="cert-filter-bar">
          <button
            className={`cert-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Credentials ({certificationsData.length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === 'pdf' ? 'active' : ''}`}
            onClick={() => setActiveFilter('pdf')}
          >
            <FileText size={15} style={{ display: 'inline', marginRight: '6px' }} />
            PDF Certificates ({certificationsData.filter(c => c.type === 'pdf').length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === 'image' ? 'active' : ''}`}
            onClick={() => setActiveFilter('image')}
          >
            <ImageIcon size={15} style={{ display: 'inline', marginRight: '6px' }} />
            Image Certificates ({certificationsData.filter(c => c.type === 'image').length})
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {filteredCerts.map((cert) => {
            const isPdf = cert.type === 'pdf';

            return (
              <div key={cert.id} className="cert-card">
                {/* Visual Preview Area */}
                <div className="cert-preview-box">
                  <span className={`cert-type-pill ${isPdf ? 'pill-pdf' : 'pill-image'}`}>
                    {isPdf ? 'Official PDF Certificate' : 'Official Certificate Image'}
                  </span>

                  {isPdf ? (
                    <div className="cert-pdf-badge-wrapper">
                      <div className="cert-pdf-icon-circle">
                        <FileText size={28} />
                      </div>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--forest-dark)' }}>
                        {cert.issuer}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={cert.fileUrl}
                      alt={cert.title}
                      className="cert-preview-img"
                      onClick={() => setSelectedImage(cert)}
                      title="Click to view full certificate"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="cert-content">
                  <div className="cert-issuer">{cert.issuer} • {cert.issueDate}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-desc">{cert.description}</p>

                  {cert.credentialId && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                      Credential: <span style={{ color: 'var(--forest-dark)', fontWeight: 600 }}>{cert.credentialId}</span>
                    </div>
                  )}

                  {cert.skillsCovered && (
                    <div className="cert-skills-covered">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span key={sIdx} className="cert-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="cert-actions">
                    {isPdf ? (
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        style={{ width: '100%' }}
                      >
                        <ExternalLink size={15} /> View Certificate (PDF New Tab)
                      </a>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          style={{ flex: 1 }}
                          onClick={() => setSelectedImage(cert)}
                        >
                          <Eye size={15} /> View Image
                        </button>
                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          title="Open original image in new tab"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Certificate Preview Modal / Lightbox */}
      {selectedImage && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div>
                <h4 className="cert-modal-title">{selectedImage.title}</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {selectedImage.issuer} • {selectedImage.issueDate}
                </span>
              </div>
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close Preview"
              >
                <X size={22} />
              </button>
            </div>

            <div className="cert-modal-body">
              <img
                src={selectedImage.fileUrl}
                alt={selectedImage.title}
                className="cert-modal-img"
              />
            </div>

            <div style={{ padding: '1rem 1.5rem', background: 'var(--card-white)', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <a
                href={selectedImage.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={14} /> Open in New Tab
              </a>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
