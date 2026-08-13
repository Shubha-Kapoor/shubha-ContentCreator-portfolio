// src/components/TechPortfolio/TechPortfolio.jsx
import React from 'react';
import './TechPortfolio.css';

const techSkills = [
  "React.js", "JavaScript (ES6+)", "HTML5 & CSS3", 
  "Prompt Engineering", "Git & GitHub", "C++ / Python", "UI/UX Design"
];

const TechPortfolio = () => {
  return (
    <section className="tech-container">
      <div className="section-header">
        <h3 className="section-title">💻 Tech & Developer Credentials</h3>
        <p className="section-subtitle">
          Bridging creativity with code — BCA Student & Frontend Developer
        </p>
      </div>

      <div className="tech-card">
        <div className="tech-header">
          <div className="tech-badge">🎓 BCA Student</div>
          <div className="tech-badge ai-badge">🤖 Prompt Engineering</div>
        </div>

        <h4 className="tech-role">Frontend Web Developer & AI Content Creator</h4>
        <p className="tech-bio">
          Passionate about building modern, responsive user interfaces and leveraging AI prompt engineering 
          to optimize creative workflows. Actively contributing to open-source projects and continuous learning.
        </p>

        {/* Tech Skill Pills */}
        <div className="skills-wrapper">
          {techSkills.map((skill, index) => (
            <span key={index} className="skill-pill">{skill}</span>
          ))}
        </div>

        {/* GitHub Highlight Link */}
        <div className="github-box">
          <div className="github-info">
            <span className="github-title">⭐ GitHub Repositories & Contributions</span>
            <span className="github-desc">Explore open-source PRs, React apps & code snippets</span>
          </div>
          <a 
            href="https://github.com/Shubha-Kapoor/Shubha-Kapoor" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            Visit GitHub ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechPortfolio;