// src/components/BooksSection/BooksSection.jsx
import React from 'react';
import './BooksSection.css';

const booksData = [
  {
    id: 1,
    title: "Published Book Title 1",
    badge: "📖 Paperback / Amazon",
    description: "An inspiring journey exploring poetry, emotion, and personal growth. Available in print and kindle editions.",
    link: "https://www.amazon.in/dp/9362885980",
    platform: "Get on Amazon"
  },
  {
    id: 2,
    title: "Published E-Book Title 2",
    badge: "📱 E-Book / Digital",
    description: "A digital collection of motivational thoughts and creative writing crafted to spark inner positivity.",
    link: "https://www.amazon.in/dp/B0G62KVGCB",
    platform: "Read Kindle Edition"
  }
];

const BooksSection = () => {
  return (
    <section className="books-container">
      <div className="section-header">
        <h3 className="section-title">📚 Published Books & Novels</h3>
        <p className="section-subtitle">
          Words that touch the heart — Explore my published works available online
        </p>
      </div>

      <div className="books-grid">
        {booksData.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-badge">{book.badge}</div>
            <h4 className="book-title">{book.title}</h4>
            <p className="book-description">{book.description}</p>
            <a 
              href={book.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="buy-button"
            >
              {book.platform} ➔
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;