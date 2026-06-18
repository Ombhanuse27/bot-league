import React from 'react';
import { Lightbulb, UserCog, Brain, Blocks, ArrowRight } from 'lucide-react';

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      title: "MINI\nMAKERS",
      desc: "Where Creativity Meets Logic.",
      icon: Blocks,
      // The first card in your image has a slightly active/hover state
      isActive: true 
    },
    {
      id: 2,
      title: "JUNIOR\nINNOVATORS",
      desc: "Engineering & Strategy Fundamentals.",
      icon: Lightbulb,
      isActive: false
    },
    {
      id: 3,
      title: "YOUNG\nENGINEERS",
      desc: "Advanced Wireless & Autonomous Control.",
      icon: UserCog,
      isActive: false
    },
    {
      id: 4,
      title: "ROBO\nMINDS",
      desc: "Elite Professional Sports & Robotics.",
      icon: Brain,
      isActive: false
    }
  ];

  return (
    <section className="relative bg-[#111111] py-24 font-['Inter',_sans-serif] flex justify-center overflow-hidden border-t border-white/5">
      
      {/* Main Container */}
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <h2 className="font-['Orbitron',_sans-serif] text-[32px] md:text-[38px] font-bold text-white mb-12 tracking-wide uppercase">
          CATEGORIES
        </h2>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id} 
                className={`flex flex-col p-8 rounded-xl border transition-all duration-300 group cursor-pointer ${
                  cat.isActive 
                    ? 'bg-[#222222] border-[#ffce00]/40 shadow-[0_0_15px_rgba(255,206,0,0.05)]' 
                    : 'bg-[#181818] border-white/10 hover:bg-[#1f1f1f] hover:border-white/20'
                }`}
              >
                
                {/* Yellow Icon Container */}
                <div className="mb-10">
                  <Icon 
                    className="w-12 h-12 text-[#ffce00]" 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-['Orbitron',_sans-serif] text-white font-bold text-[22px] leading-[1.2] tracking-wide mb-4 whitespace-pre-line uppercase">
                  {cat.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#888] text-[14px] leading-[1.5] mb-10 flex-1">
                  {cat.desc}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-[#ff4b4b] font-bold text-[13px] tracking-widest uppercase group-hover:text-red-400 transition-colors">
                  LEARN MORE 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}