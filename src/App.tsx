import React from 'react';
 // Adjust path as needed
import HeroSection from './pages/HeroSection';
import EventsSection from './pages/EventsSection';
import JourneySection from './pages/JourneySection';
import WhatIsSection from './pages/WhatIsSection';
import CategoriesSection from './pages/CategoriesSection';
import DisciplinesSection from './pages/DisciplinesSection';
import BenefitsSection from './pages/BenifitsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#ff4b4b]/30 scroll-smooth">
      <main>
        <HeroSection />
        <div id="events"><EventsSection /></div>
        <div id="journey"><JourneySection /></div>
        <div id="about"><WhatIsSection /></div>
        <div id="categories"><CategoriesSection /></div>
        <div id="disciplines"><DisciplinesSection /></div>
        <div id="benefits"><BenefitsSection /></div>
        
      </main>
    </div>
  );
}