// src/components/ProfileHeader/ProfileHeader.jsx
import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <section className="profile-header-container">
      {/* Avatar Container with glowing border */}
      <div className="avatar-wrapper">
        <img 
          src="https://github.com/Shubha-Kapoor.png" 
          alt="Shubha Kapoor" 
          className="profile-avatar"
        />
      </div>

      {/* Profile Details */}
      <div className="profile-info">
        <h2 className="profile-name">
          Shubha Kapoor <span className="blue-tick">✓</span>
        </h2>
        <p className="profile-tagline">
          Content Creator • Author 📖 • Performer • Tech Student 💻
        </p>

        {/* Sunbeams Welcome Badge */}
        <div className="sunbeam-badge">
          <span>Welcome ~Sunbeam 🫶🏻🧿♥️</span>
        </div>

        {/* Bio Paragraph */}
        <p className="profile-bio">
          Inspiring positivity, growth & self-improvement! Sharing my journey through lifestyle vlogs, 
          fashion, beauty transitions, and college diaries — all while exploring frontend dev & prompt engineering. 
          Let’s let our inner light shine and be <strong>Dil se HAPPY!</strong>
        </p>
      </div>
    </section>
  );
};

export default ProfileHeader;