import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section-ivory">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} /> Get in Touch
          </span>
          <h2 className="section-title">Contact &amp; Connect</h2>
          <p className="section-subtitle">
            Reach out regarding MBA internships, executive trainee programs, or professional opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-card-info">
            <div>
              <h3>Let's Connect</h3>
              <p style={{ color: 'var(--slate-300)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                I am actively seeking MBA management trainee roles, operations, business analytics, and marketing internships. Feel free to contact me directly via email, phone, or LinkedIn.
              </p>
            </div>

            <div className="contact-method">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact-method-label">Direct Email</div>
                <a href={`mailto:${personalInfo.email}`} className="contact-method-val" style={{ color: '#FFFFFF', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-method-label">Phone / WhatsApp</div>
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-method-val" style={{ color: 'var(--white)' }}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-method-label">Location</div>
                <div className="contact-method-val">{personalInfo.location}</div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-400)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Professional Network
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {personalInfo.socialLinks.linkedin && (
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label="Shashwat Joshi LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                )}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-icon-link"
                  aria-label="Email Shashwat Joshi"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success-banner" style={{ flexDirection: 'column', textAlign: 'center', padding: '3rem 2rem' }}>
                <CheckCircle2 size={48} color="var(--forest-primary)" />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--forest-dark)', marginTop: '1rem' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-main)', maxWidth: '420px', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. You can also contact Shashwat directly at <a href={`mailto:${personalInfo.email}`} style={{ textDecoration: 'underline', color: 'var(--forest-primary)' }}>{personalInfo.email}</a>.
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Recruiter / Organization Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@organization.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. MBA Internship Opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your inquiry or opportunity details..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
