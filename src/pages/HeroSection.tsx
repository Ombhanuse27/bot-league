import React from 'react';

export default function EventsSection() {
  return (
    <section className="relative bg-[#111111] py-20 font-['Inter',_sans-serif] flex justify-center overflow-hidden">
      
      {/* Subtle ambient background glow matching the image */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <h2 className="font-['Orbitron',_sans-serif] text-3xl md:text-4xl font-bold text-white mb-14 tracking-wide uppercase">
          Competitions & Events
        </h2>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ================= COLUMN 1: LIVE NOW ================= */}
          <div className="flex flex-col h-full">
            <h3 className="font-['Orbitron',_sans-serif] text-[#ff4b4b] text-lg font-bold mb-6 tracking-wide uppercase">
              Live Now
            </h3>
            
            <div className="bg-[#181818] border border-white/5 rounded-lg p-6 shadow-2xl flex-1 flex flex-col">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-bold text-[19px] tracking-wide mb-1">Bengaluru Regionals</h4>
                  <p className="text-[#888] text-[15px]">Lorem Ipsum</p>
                </div>
                <span className="bg-[#ff4b4b] text-white text-[11px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                  Ongoing
                </span>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 mb-8" />

              {/* Exact CSS Bracket Recreation */}
              <div className="relative flex-1 flex items-stretch justify-between w-full pr-2 min-h-[220px]">
                
                {/* Bracket Column 1 (4 boxes) */}
                <div className="flex flex-col justify-between w-[28%] z-10">
                  <div className="h-[28px] bg-[#444] rounded w-full shadow-inner" />
                  <div className="h-[28px] bg-[#444] rounded w-full shadow-inner" />
                  <div className="h-[28px] bg-[#444] rounded w-full shadow-inner" />
                  <div className="h-[28px] bg-[#444] rounded w-full shadow-inner" />
                </div>

                {/* Bracket Connecting Lines 1 (Left to Middle) */}
                <div className="absolute left-[28%] w-[20%] h-full flex flex-col justify-around py-[14px] z-0">
                  <div className="h-[34%] border-t border-r border-b border-[#ff4b4b]" />
                  <div className="h-[34%] border-t border-r border-b border-[#ff4b4b]" />
                </div>

                {/* Bracket Column 2 (2 boxes) */}
                <div className="flex flex-col justify-around w-[28%] z-10">
                  <div className="h-[28px] bg-[#444] rounded w-full shadow-inner" />
                  <div className="h-[28px] bg-[#444] rounded w-full shadow-inner" />
                </div>

                {/* Bracket Connecting Lines 2 (Middle to Right) */}
                <div className="absolute left-[76%] w-[12%] h-full flex flex-col justify-center py-[14px] z-0">
                  <div className="h-[50%] border-t border-r border-b border-[#ff4b4b]" />
                </div>

                {/* Bracket Final Column (1 box) */}
                <div className="flex flex-col justify-center w-[28%] z-10 ml-3">
                  <div className="h-[28px] bg-[#444] rounded w-full shadow-inner relative z-10" />
                </div>

              </div>
            </div>
          </div>


          {/* ================= COLUMN 2: UPCOMING ================= */}
          <div className="flex flex-col h-full">
            <h3 className="font-['Orbitron',_sans-serif] text-white text-lg font-bold mb-6 tracking-wide uppercase">
              Upcoming
            </h3>
            
            <div className="flex flex-col gap-6 flex-1">
              
              {/* Event Card 1 */}
              <div className="bg-[#181818] border border-white/5 rounded-lg p-6 shadow-2xl flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-bold text-[19px] mb-6 tracking-wide">Event in Mumbai</h4>
                  
                  <div className="grid grid-cols-3 gap-2 mb-8">
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Date</p>
                      <p className="text-[#dddddd] text-[13px]">11/11/25</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Location</p>
                      <p className="text-[#dddddd] text-[13px]">BKC</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Category</p>
                      <p className="text-[#dddddd] text-[13px]">Lorem</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-[#ff4b4b] text-white text-[15px] font-bold rounded hover:bg-red-500 transition-colors tracking-wide">
                  REGISTER
                </button>
              </div>

              {/* Event Card 2 */}
              <div className="bg-[#181818] border border-white/5 rounded-lg p-6 shadow-2xl flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-bold text-[19px] mb-6 tracking-wide">Event in Delhi</h4>
                  
                  <div className="grid grid-cols-3 gap-2 mb-8">
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Date</p>
                      <p className="text-[#dddddd] text-[13px]">11/11/25</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Location</p>
                      <p className="text-[#dddddd] text-[13px]">BKC</p>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold mb-1">Category</p>
                      <p className="text-[#dddddd] text-[13px]">Lorem</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-[#ff4b4b] text-white text-[15px] font-bold rounded hover:bg-red-500 transition-colors tracking-wide">
                  REGISTER
                </button>
              </div>

            </div>
          </div>


          {/* ================= COLUMN 3: PAST RESULTS ================= */}
          <div className="flex flex-col h-full">
            <h3 className="font-['Orbitron',_sans-serif] text-white text-lg font-bold mb-6 tracking-wide uppercase">
              Past Results
            </h3>
            
            <div className="bg-[#181818] border border-white/5 rounded-lg p-6 shadow-2xl flex-1 flex flex-col">
              
              <div className="border-b border-white/10 pb-5 mb-5 mt-2">
                <h4 className="text-white font-bold text-[19px] tracking-wide mb-1.5">Bengaluru Regionals</h4>
                <p className="text-[#888] text-[15px]">Lorem Ipsum</p>
              </div>

              <div className="border-b border-white/10 pb-5 mb-5 mt-1">
                <h4 className="text-white font-bold text-[19px] tracking-wide mb-1.5">Bengaluru Regionals</h4>
                <p className="text-[#888] text-[15px]">Lorem Ipsum</p>
              </div>

              <div className="mt-1">
                <h4 className="text-white font-bold text-[19px] tracking-wide mb-1.5">Bengaluru Regionals</h4>
                <p className="text-[#888] text-[15px]">Lorem Ipsum</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}