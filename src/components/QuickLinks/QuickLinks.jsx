// src/components/QuickLinks/QuickLinks.jsx
import React from 'react';
import './QuickLinks.css';

const linksData = [
  {
    id: 1,
    title: "🎨 UGC & Media Portfolio",
    subtitle: "Brand Collaborations, Sample Reels & Creative Work",
    url: "https://www.canva.com/design/DAGuuizvrNI/ZtuuKgvsgz974-J-YthKQw/edit",
    featured: true,
  },
  {
    id: 2,
    title: "▶️ YouTube Channel (@shinewithshubha)",
    subtitle: "1.62K+ Sunbeams • Vlogs, Tech & Lifestyle",
    url: "https://www.youtube.com/@shinewithshubha",
    featured: false,
  },
  {
    id: 3,
    title: "📸 Instagram (Niche / Content)",
    subtitle: "@shinewithshubha • Beauty, Trends & Positivity",
    url: "https://instagram.com/shinewithshubha",
    featured: false,
  },
  {
    id: 4,
    title: "💖 Instagram (Personal & Main)",
    subtitle: "@shubhakapoorrr • Daily Updates & Stories",
    url: "https://instagram.com/shubhakapoorrr",
    featured: false,
  },
  {
    id: 5,
    title: "💼 LinkedIn Profile",
    subtitle: "Professional Networking & Tech Experience",
    url: "https://www.linkedin.com/in/shubha-kapoor-a3963a308",
    featured: false,
  },
  {
    id: 6,
    title: "💻 GitHub Profile",
    subtitle: "Open Source Contributions & Web Projects",
    url: "https://github.com/Shubha-Kapoor",
    featured: false,
  },
];

const QuickLinks = () => {
  return (
    <section className="quicklinks-container">
      <h3 className="section-title">⚡ Quick Connect & Portfolios</h3>
      <div className="links-wrapper">
        {linksData.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-card ${link.featured ? 'featured-card' : ''}`}
          >
            <div className="link-text">
              <span className="link-title">{link.title}</span>
              <span className="link-subtitle">{link.subtitle}</span>
            </div>
            <span className="arrow-icon">➔</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;