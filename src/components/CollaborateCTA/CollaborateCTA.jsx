// src/components/CollaborateCTA/CollaborateCTA.jsx
import React from 'react';
import './CollaborateCTA.css';

const CollaborateCTA = () => {
  return (
    <section className="collaborate-container">
      <div className="collaborate-card">
        <h3 className="collab-title">🤝 Let's Collaborate</h3>
        
        <p className="collab-tagline">“Inspiring positivity, one collab at a time.”</p>
        
        <p className="collab-description">
          Open to brand partnerships, sponsored content, UGC creation, events, and 
          creative campaigns in fashion, beauty, lifestyle & education.
        </p>

        {/* Campaign Focus Tags */}
        <div className="tags-wrapper">
          <span className="collab-tag">Brand Campaigns</span>
          <span className="collab-tag">Sponsored Content</span>
          <span className="collab-tag">Beauty & Fashion</span>
          <span className="collab-tag">Lifestyle & EDU</span>
        </div>

        {/* Action Buttons */}
        <div className="cta-buttons">
          <a 
            href="https://instagram.com/shinewithshubha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button insta-btn"
          >
            📸 DM on Instagram
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="cta-button email-btn"
          >
            ✉️ Email Me
          </a>
        </div>

        <p className="response-time">✦ Typically responds within 48 hours</p>

        <div className="divider"></div>

        {/* Inspiring Footer Quote */}
        <blockquote className="spark-quote">
          “Every journey begins with a single spark of courage.”
          <footer>— <strong>Shubha Kapoor</strong></footer>
        </blockquote>
      </div>
    </section>
  );
};

export default CollaborateCTA;