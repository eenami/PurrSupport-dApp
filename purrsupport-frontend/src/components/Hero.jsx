import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section container">
      <div className="hero-content">
        <h2 className="hero-title">Help Our Feline Friends Find a Better Tomorrow</h2>
        <p className="hero-subtitle">
          PurrSupport is a decentralized donation tracker built on Soroban. We ensure 100% transparent funding for stray cats in our community. Every XLM goes directly to food, shelter, and medical care.
        </p>
        <div className="hero-actions">
          <a href="#donate" className="btn btn-primary btn-large">Donate Now</a>
          <a href="#stats" className="btn btn-secondary btn-large">View Impact</a>
        </div>
      </div>
      <div className="hero-image-wrapper">
         <div className="glass-panel hero-feature">
            <h3>Did you know?</h3>
            <p>One unspayed female cat and her mate can produce up to 2,000,000 kittens in 8 years. Your donation helps fund our Trap-Neuter-Return (TNR) program!</p>
         </div>
      </div>
    </section>
  );
}
