import React from 'react';
import './Stats.css';

export default function Stats() {
  const stats = [
    { label: 'Total XLM Donated', value: '45,280' },
    { label: 'Cats Fed Daily', value: '142' },
    { label: 'Medical Treatments', value: '58' },
    { label: 'Active Milestones', value: '3' },
  ];

  return (
    <div className="stats-container glass-panel" id="stats">
      <h3 className="section-title">Community Impact</h3>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
