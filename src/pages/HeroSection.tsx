import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[800px] bg-[#050505] font-['Inter',_sans-serif] overflow-hidden selection:bg-[#f93b4a]/30">
      
      {/* --- PERFECTED BACKGROUND ARCHITECTURE --- */}
      {/* 1. Base Layer: Solid Black for the whole screen */}
      <div className="absolute inset-0 bg-[#050505] z-0" />

      {/* 2. Image Layer: Pinned only to the right 75% of the screen */}
      <div className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0">
        
        {/* The actual image */}
        <div 
          className="absolute inset-0"
          style={{
            // Replace with your local path: url('/hero-bg.jpg')
            backgroundImage: `url('/hero-bg.png')`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* 3. The Blend Mask: A tight gradient ONLY on the left edge of the image 
               to blend it seamlessly into the solid black base layer.
               The rest of the image (right side) remains 100% bright and clear. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] from-0% via-[#050505]/80 via-[10%] to-transparent to-[30%]" />
      </div>


      {/* --- NAVBAR --- */}
      <nav className="relative z-20 w-full px-8 lg:px-12 py-5 flex items-center justify-between bg-[#111111] border-b border-white/5">
        
        {/* Logo Container */}
        <div className="flex items-center cursor-pointer">
          <div className="relative flex items-center font-['Orbitron',_sans-serif] italic pr-4">
            <div className="absolute -left-2 top-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-yellow-400"></div>
            
            <div className="relative">
              <span className="text-[28px] font-black tracking-tighter text-[#1a73e8]">
                B<span className="inline-block relative top-[2px] mx-[1px] text-[24px]">⚙</span>T
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#1a73e8]"></div>
            </div>
            
            <div className="relative ml-1">
              <span className="text-[28px] font-black tracking-tighter text-[#ff4b4b]">
                LEAGUE
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#1a73e8]"></div>
            </div>

            <div className="absolute right-0 bottom-1 w-0 h-0 border-r-[10px] border-r-transparent border-b-[10px] border-b-yellow-400"></div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-14">
          
          {/* ACTIVE LINK: Events */}
          <div className="relative flex flex-col justify-center">
            <a href="#" className="font-['Michroma',_sans-serif] text-white text-[14px] tracking-wide">
              Events
            </a>
            {/* The precise red active underline. 
                -bottom-[21px] pushes it perfectly to the bottom edge of the nav bar 
                (adjust slightly if your nav height differs in your actual build) */}
            <div className="absolute -bottom-[21px] left-0 w-full h-[3px] bg-[#ff4b4b]" />
          </div>

          {/* INACTIVE LINKS */}
          <a href="#" className="font-['Michroma',_sans-serif] text-gray-200 hover:text-[#ff4b4b] text-[14px] transition-colors tracking-wide">Programs</a>
          <a href="#" className="font-['Michroma',_sans-serif] text-gray-200 hover:text-[#ff4b4b] text-[14px] transition-colors tracking-wide">Community</a>
          <a href="#" className="font-['Michroma',_sans-serif] text-gray-200 hover:text-[#ff4b4b] text-[14px] transition-colors tracking-wide">Ranks</a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="px-6 py-2 text-[14px] font-semibold text-white border border-gray-400 rounded-md hover:bg-white/10 transition-colors font-['Inter',_sans-serif] bg-transparent">
            LOGIN
          </button>
          <button className="px-6 py-2 text-[14px] font-bold text-white bg-[#ff4b4b] rounded-md hover:bg-red-500 transition-colors font-['Inter',_sans-serif] border border-transparent shadow-[0_2px_10px_rgba(255,75,75,0.2)]">
            REGISTER NOW
          </button>
        </div>
      </nav>

      {/* --- MAIN HERO CONTENT --- */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 h-[calc(100%-85px)] flex flex-col justify-center">
        
        <div className="absolute top-12 right-8 lg:right-16 bg-[#111111]/90 border border-white/10 rounded-md px-4 py-2.5 flex items-center gap-3 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-white tracking-wider">
            <div className="w-2 h-2 rounded-full bg-[#f93b4a] animate-pulse shadow-[0_0_8px_#f93b4a]" />
            LIVE : Episode 14 . Bengaluru Regionals
          </div>
          <a href="#" className="text-[#f93b4a] text-[12px] font-bold hover:text-red-400 transition-colors tracking-wider ml-2">
            WATCH LIVE
          </a>
        </div>

        <div className="max-w-[700px] -mt-10">
          <h1 className="font-['Orbitron',_sans-serif] text-[52px] lg:text-[72px] font-bold text-white uppercase leading-[1.05] tracking-wider mb-6 drop-shadow-2xl">
            India's Ultimate<br />
            Robotics Arena
          </h1>
          
          <p className="font-['Inter',_sans-serif] text-[19px] text-gray-300 mb-10 max-w-[500px] leading-[1.5] tracking-wide">
            Build.Compete.Rank.The National<br />
            Ecosystem for Robotics Arena
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3.5 text-[14px] font-bold text-white bg-[#f93b4a] hover:bg-[#d62828] rounded-[4px] transition-colors tracking-wider shadow-[0_4px_14px_rgba(249,59,74,0.4)]">
              CREATE ACCOUNT
            </button>
            <button className="px-8 py-3.5 text-[14px] font-bold text-white border border-gray-500 hover:bg-white/10 hover:border-white rounded-[4px] transition-all backdrop-blur-sm tracking-wider bg-black/20">
              EXPLORE EVENTS
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}

