import React, { useState } from 'react';
import './DonationForm.css';

export default function DonationForm() {
  const [amount, setAmount] = useState('50');

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Initiating smart contract transaction for ${amount} XLM...`);
  };

  return (
    <div className="donation-card glass-panel" id="donate">
      <h3 className="section-title">Support a Stray Today</h3>
      <p className="donation-subtitle">Your contribution feeds and treats community cats.</p>
      
      <form onSubmit={handleDonate} className="donation-form">
        <div className="amount-options">
          {[10, 50, 100, 500].map(val => (
            <button
              type="button"
              key={val}
              className={`amount-btn ${val.toString() === amount ? 'active' : ''}`}
              onClick={() => setAmount(val.toString())}
            >
              {val} XLM
            </button>
          ))}
        </div>
        
        <div className="custom-amount-wrapper">
          <input 
            type="number" 
            className="custom-amount-input" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Custom Amount"
            min="1"
          />
          <span className="currency-label">XLM</span>
        </div>
        
        <button type="submit" className="btn btn-primary btn-submit">
          Send Donation via Soroban
        </button>
      </form>
    </div>
  );
}
