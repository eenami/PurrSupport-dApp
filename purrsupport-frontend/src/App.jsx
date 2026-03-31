import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CatGallery from './components/CatGallery';
import DonationForm from './components/DonationForm';
import './App.css';

function App() {
  return (
    <div className="app-main">
      <Header />
      <Hero />
      <div className="container dashboard-grid">
        <Stats />
        <DonationForm />
      </div>
      <CatGallery />
    </div>
  );
}

export default App;
