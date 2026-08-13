// src/App.jsx
import React from 'react';
import './styles/global.css';
import './App.css';

import Banner from './components/Banner/Banner';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import QuickLinks from './components/QuickLinks/QuickLinks';
import BooksSection from './components/BooksSection/BooksSection';
import TechPortfolio from './components/TechPortfolio/TechPortfolio';
import CollaborateCTA from './components/CollaborateCTA/CollaborateCTA';

function App() {
  return (
    <div className="app-main-wrapper">
      <Banner />
      <main className="content-container">
        <ProfileHeader />
        <QuickLinks />
        <BooksSection />
        <TechPortfolio />
        <CollaborateCTA />
      </main>
      <footer className="global-footer">
        <p>© {new Date().getFullYear()} Shubha Kapoor. Crafted with React.js & Pure CSS.</p>
      </footer>
    </div>
  );
}

export default App;