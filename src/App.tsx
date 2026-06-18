import React from 'react';
 // Adjust path as needed
import HeroSection from './pages/HeroSection';
import EventsSection from './pages/EventsSection';
import JourneySection from './pages/JourneySection';

export default function App() {
  return (
    // Add scroll-smooth here to enable smooth scrolling globally
    <div className="min-h-screen bg-[#050505] selection:bg-[#ff4b4b]/30 scroll-smooth">
    

      {/* Main Content Sections */}
      <main>
        {/* We don't need an ID for Hero, it's at the top */}
        <HeroSection />

        {/* Wrap EventsSection in a div with an ID so we can scroll to it */}
        <div id="events">
          <EventsSection />
        </div>
        <div id="journey">
          <JourneySection />
        </div>
      </main>

    </div>
  );
}