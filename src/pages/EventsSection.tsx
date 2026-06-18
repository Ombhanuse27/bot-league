import React from 'react';

export default function EventsSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 font-['Inter',_sans-serif] flex justify-center overflow-hidden border-t border-white/5">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <h2 className="font-['Orbitron',_sans-serif] text-3xl md:text-4xl font-bold text-white mb-14 tracking-wide uppercase">
          Competitions & Events
        </h2>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMN 1: LIVE NOW */}
          <div className="flex flex-col">
            <h3 className="font-['Orbitron',_sans-serif] text-[#ff4b4b] text-lg font-bold mb-6 tracking-wide uppercase">
              Live Now
            </h3>
            
            <div className="bg-[#181818] border border-white/10 rounded-lg p-6 shadow-xl h-[380px] flex flex-col">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-bold text-lg tracking-wide">Bengaluru Regionals</h4>
                  <p className="text-gray-400 text-[15px]">Lorem Ipsum</p>
                </div>
                <span className="bg-[#ff4b4b] text-white text-[11px] font-bold px-2.5 py-1 rounded-[4px] uppercase tracking-wider">
                  Ongoing
                </span>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 mb-6" />

              {/* PERFECTLY ATTACHED CSS BRACKET */}
              <div className="flex w-full h-[160px] mt-2">
                
                {/* Round 1 (4 boxes) */}
                <div className="flex flex-col justify-between w-[28%] h-full z-10">
                  <div className="h-[26px] bg-[#4a4a4a] rounded-[3px] w-full" />
                  <div className="h-[26px] bg-[#4a4a4a] rounded-[3px] w-full" />
                  <div className="h-[26px] bg-[#4a4a4a] rounded-[3px] w-full" />
                  <div className="h-[26px] bg-[#4a4a4a] rounded-[3px] w-full" />
                </div>

                {/* Connecting Lines 1 */}
                <div className="flex flex-col justify-between w-[12%] h-full py-[13px] -ml-[2px] z-0">
                  <div className="h-[44px] border-t-2 border-r-2 border-b-2 border-[#ff4b4b] rounded-r-md" />
                  <div className="h-[44px] border-t-2 border-r-2 border-b-2 border-[#ff4b4b] rounded-r-md" />
                </div>

                {/* Round 2 (2 boxes) */}
                <div className="flex flex-col justify-between w-[28%] h-full py-[22px] -ml-[2px] z-10">
                  <div className="h-[26px] bg-[#4a4a4a] rounded-[3px] w-full" />
                  <div className="h-[26px] bg-[#4a4a4a] rounded-[3px] w-full" />
                </div>

                {/* Connecting Lines 2 */}
                <div className="flex flex-col justify-center w-[12%] h-full py-[34px] -ml-[2px] z-0">
                  <div className="h-[88px] border-t-2 border-r-2 border-b-2 border-[#ff4b4b] rounded-r-md" />
                </div>

                {/* Round 3 (Winner Box) */}
                <div className="flex flex-col justify-center w-[28%] h-full -ml-[2px] z-10">
                  <div className="h-[26px] bg-[#4a4a4a] rounded-[3px] w-full" />
                </div>

              </div>
            </div>
          </div>

          {/* COLUMN 2: UPCOMING */}
          <div className="flex flex-col">
            <h3 className="font-['Orbitron',_sans-serif] text-white text-lg font-bold mb-6 tracking-wide uppercase">
              Upcoming
            </h3>
            
            <div className="flex flex-col gap-6 flex-1">
              {/* Event Card 1 */}
              <div className="bg-[#181818] border border-white/10 rounded-lg p-6 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Event in Mumbai</h4>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Date</p>
                      <p className="text-gray-300 text-[13px]">11/11/25</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Location</p>
                      <p className="text-gray-300 text-[13px]">BKC</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Category</p>
                      <p className="text-gray-300 text-[13px]">Lorem</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-[#ff4b4b] text-white text-[14px] font-bold rounded-[4px] hover:bg-red-500 transition-colors shadow-[0_2px_10px_rgba(255,75,75,0.2)] tracking-wide">
                  REGISTER
                </button>
              </div>

              {/* Event Card 2 */}
              <div className="bg-[#181818] border border-white/10 rounded-lg p-6 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Event in Delhi</h4>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Date</p>
                      <p className="text-gray-300 text-[13px]">11/11/25</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Location</p>
                      <p className="text-gray-300 text-[13px]">BKC</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Category</p>
                      <p className="text-gray-300 text-[13px]">Lorem</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-[#ff4b4b] text-white text-[14px] font-bold rounded-[4px] hover:bg-red-500 transition-colors shadow-[0_2px_10px_rgba(255,75,75,0.2)] tracking-wide">
                  REGISTER
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 3: PAST RESULTS */}
          <div className="flex flex-col">
            <h3 className="font-['Orbitron',_sans-serif] text-white text-lg font-bold mb-6 tracking-wide uppercase">
              Past Results
            </h3>
            
            <div className="bg-[#181818] border border-white/10 rounded-lg p-6 shadow-xl h-[380px]">
              
              <div className="border-b border-white/10 pb-5 mb-5">
                <h4 className="text-white font-bold text-[17px] tracking-wide mb-1">Bengaluru Regionals</h4>
                <p className="text-gray-400 text-[15px]">Lorem Ipsum</p>
              </div>

              <div className="border-b border-white/10 pb-5 mb-5">
                <h4 className="text-white font-bold text-[17px] tracking-wide mb-1">Bengaluru Regionals</h4>
                <p className="text-gray-400 text-[15px]">Lorem Ipsum</p>
              </div>

              <div>
                <h4 className="text-white font-bold text-[17px] tracking-wide mb-1">Bengaluru Regionals</h4>
                <p className="text-gray-400 text-[15px]">Lorem Ipsum</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}