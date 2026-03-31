import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header-glass glass-panel container">
      <div className="header-content">
        <div className="logo-section">
          <span className="logo-icon">🐾</span>
          <h1 className="logo-text">PurrSupport</h1>
        </div>
        <nav className="nav-links">
          <a href="#about" className="nav-link">Our Mission</a>
          <a href="#cats" className="nav-link">Meet the Cats</a>
        </nav>
        <div className="wallet-section">
          <button className="btn btn-primary wallet-btn">Connect Wallet</button>
        </div>
      </div>
    </header>
  );
}
