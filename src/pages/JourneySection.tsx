
import { Wrench, Landmark, Award, Users } from 'lucide-react';

export default function JourneySection() {
  // Using \n to perfectly match the line breaks in your design's text
  const steps = [
    { id: 1, title: 'BUILD YOUR\nTEAM', icon: Wrench },
    { id: 2, title: 'COMPETE ACROSS\nINDIA', icon: Landmark },
    { id: 3, title: 'EARN NATIONAL\nRANKING & VALUE', icon: Award },
    { id: 4, title: 'JOIN THE\nLEAGUE', icon: Users }
  ];

  return (
    // id="programs" allows the Navbar "Programs" link to scroll here
    <section id="programs" className="relative bg-[#0a0a0a] py-28 font-['Inter',_sans-serif] flex justify-center overflow-hidden border-t border-white/5">
      
      {/* Main Container */}
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Headers */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h3 className="text-[#ff4b4b] font-bold tracking-widest text-[14px] mb-3 uppercase">
            User Journey
          </h3>
          <h2 className="font-['Orbitron',_sans-serif] text-3xl md:text-[42px] font-bold text-white mb-4 tracking-wider uppercase">
            Your Path to the League
          </h2>
          <p className="text-[#777] text-[15px] font-medium tracking-wide">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[1050px] mx-auto">
          
          {/* Horizontal Blue Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[58px] left-[12%] right-[12%] h-[3px] bg-blue-700 z-0 shadow-[0_0_12px_rgba(29,78,216,0.6)]" />

          {/* Mapping through the 4 steps */}
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center w-full md:w-1/4 mb-16 md:mb-0">
                
                {/* 1. Multi-layered Circle */}
                {/* Outer Dark Grey Ring */}
                <div className="w-[120px] h-[120px] rounded-full bg-[#222222] flex items-center justify-center shadow-2xl z-10">
                  {/* Inner Blue Bordered Circle */}
                  <div className="w-[96px] h-[96px] rounded-full bg-[#0a0a0a] border-[3px] border-blue-700 flex items-center justify-center shadow-[inset_0_0_20px_rgba(29,78,216,0.3)]">
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* 2. Tiny Vertical Connector Line */}
                <div className="w-[1.5px] h-6 bg-gray-500 mt-2 mb-3" />

                {/* 3. Text Content */}
                <span className="text-[#ff4b4b] font-bold text-[14px] tracking-widest mb-3">
                  STEP {step.id}
                </span>
                
                <span className="text-white font-bold text-[15px] uppercase leading-[1.4] text-center w-[180px] whitespace-pre-line tracking-wide">
                  {step.title}
                </span>
                
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}