import React from 'react';
import { Settings, Monitor, BrainCircuit, Network, LayoutTemplate, Cpu } from 'lucide-react';

export default function WhatIsSection() {
  const features = [
    {
      id: 1,
      title: "STRUCTURED EVENTS",
      desc: '"From one-off events to a year-\nround competitive season."'
    },
    {
      id: 2,
      title: "DIGITAL IDENTITY",
      desc: '"Your professional robotics\nlegacy, tracked and verified."'
    },
    {
      id: 3,
      title: "NATIONAL RANKING",
      desc: '"Benchmark your skills against\nthe best engineers in India."'
    },
    {
      id: 4,
      title: "CAREER PATHWAY",
      desc: '"Turning arena victories into real-\nworld industry opportunities."'
    }
  ];

  return (
    <section id="about" className="relative bg-[#111111] py-24 font-['Inter',_sans-serif] flex justify-center overflow-hidden border-t border-white/5">
      
      {/* Main Container - Pink borders completely removed */}
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <h2 className="font-['Orbitron',_sans-serif] text-[32px] md:text-[38px] font-bold text-white mb-16 tracking-wide uppercase">
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          
          {/* ================= LEFT SIDE: 2x2 Grid ================= */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12 w-full lg:w-[60%]">
            {features.map((item) => (
              <div key={item.id} className="flex flex-col">
                <span className="font-['Orbitron',_sans-serif] text-[#ff4b4b] text-[22px] font-bold mb-2">
                  {item.id}.
                </span>
                <h3 className="text-white font-bold text-[18px] tracking-wide mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-[#888] text-[15px] leading-[1.6] whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDE: High-Tech Schematic ================= */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              
              {/* Background Connecting Lines (Circuit Board Look) */}
              <svg className="absolute inset-0 w-full h-full text-gray-600/50" viewBox="0 0 320 320">
                <path d="M160 160 L100 80 L60 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M160 160 L240 90 L270 90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M160 160 L110 240 L80 240" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M160 160 L240 230 L270 230" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Center Core Node */}
              <div className="absolute z-10 w-[100px] h-[100px] rounded-full border border-gray-500/50 flex items-center justify-center">
                <div className="w-[70px] h-[70px] rounded-full border border-gray-400 flex items-center justify-center bg-[#181818] shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <BrainCircuit className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                </div>
              </div>

              {/* Orbiting Outer Nodes */}
              
              {/* Top Left: UI/Layout Icon */}
              <div className="absolute top-4 left-4 bg-[#111] p-3 border border-gray-600 rounded-lg">
                <LayoutTemplate className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
              </div>
              
              {/* Top Right: Gear/Settings */}
              <div className="absolute top-12 right-2 bg-[#111] p-3 border border-gray-600 rounded-full">
                <Settings className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
              </div>

              {/* Bottom Left: Monitor/Laptop */}
              <div className="absolute bottom-12 left-6 bg-[#111] p-3 border border-gray-600 rounded-md">
                <Monitor className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
              </div>

              {/* Bottom Right: Processor/CPU */}
              <div className="absolute bottom-10 right-6 bg-[#111] p-3 border border-gray-600 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}