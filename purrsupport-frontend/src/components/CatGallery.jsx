import React from 'react';
import './CatGallery.css';

export default function CatGallery() {
  const cats = [
    { name: 'Oliver', need: 'Surgery Fund', image: '/cats/cat_1.png' },
    { name: 'Luna', need: 'Food & Shelter', image: '/cats/cat_2.png' },
    { name: 'Shadow', need: 'Vaccinations', image: '/cats/cat_3.png' }
  ];

  return (
    <section className="gallery-section container" id="cats">
      <h2 className="section-title">Meet Our Furry Friends</h2>
      <p className="gallery-subtitle">These lovely cats are currently seeking support through our decentralized platform.</p>
      
      <div className="cat-grid">
        {cats.map((cat, i) => (
          <div key={i} className="cat-card glass-panel">
            <div className="cat-image-wrapper">
              <img src={cat.image} alt={cat.name} className="cat-image" />
              <div className="cat-need-badge">{cat.need}</div>
            </div>
            <div className="cat-info">
              <h3 className="cat-name">{cat.name}</h3>
              <button className="btn btn-secondary cat-btn">Sponsor {cat.name}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
