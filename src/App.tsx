import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Component

// The 7 Pages
import HeroSection from './pages/HeroSection.tsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] selection:bg-[#ff4b4b]/30">

        <Routes>
          <Route path="/" element={<HeroSection/>} />
          
        </Routes>
      </div>
    </Router>
  );
}