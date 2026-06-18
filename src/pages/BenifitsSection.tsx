import React from 'react';
import { Award, Gavel, Briefcase, Zap, Trophy, User } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    { title: "NATIONAL RECOGNITION", desc: "Benchmark your skills on India's official robotics leaderboard.", icon: Award },
    { title: "FAIR JUDGING", desc: "Compete with confidence under standardized, expert-led evaluation.", icon: Gavel },
    { title: "CAREER OPS", desc: "Bridge the gap between arena victories and top-tier tech placements.", icon: Briefcase },
    { title: "HIGH - ENERGY ECO", desc: "Join a nationwide community of elite innovators and robotics athletes.", icon: Zap },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 text-white flex justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Benefits */}
        <div>
          <h3 className="text-[#ff4b4b] font-bold tracking-widest text-[14px] mb-2 uppercase">WHY REGISTER ?</h3>
          <h2 className="font-['Orbitron',_sans-serif] text-[38px] font-bold mb-12 uppercase leading-tight">THE LEAGUE ADVANTAGE</h2>
          
          <div className="space-y-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-[#ff4b4b] mt-1"><b.icon size={32} /></div>
                <div>
                  <h4 className="font-['Orbitron',_sans-serif] font-bold text-[18px] mb-2">{b.title}</h4>
                  <p className="text-[#888] leading-relaxed max-w-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Leaderboard Card */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 w-full max-w-[400px] mx-auto shadow-2xl relative overflow-hidden">
          <div className="text-center mb-6">
            <h3 className="font-['Orbitron',_sans-serif] text-xl font-bold tracking-widest">LEADERBOARD</h3>
          </div>
          
          {/* Top User */}
          <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5 text-center mb-6">
            <div className="w-16 h-16 bg-[#ffce00] rounded-full mx-auto mb-2 flex items-center justify-center text-black">
              <User size={32} />
            </div>
            <p className="font-bold text-sm">#01 - Player Name</p>
            <p className="text-2xl font-bold text-[#ffce00]">508754</p>
          </div>

          {/* List */}
          <div className="space-y-3">
            {[2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="flex items-center justify-between bg-[#1a1a1a] p-3 rounded-lg border border-white/5">
                <span className="font-mono text-gray-400 w-8">0{num}</span>
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <span className="text-sm">Player Name</span>
                </div>
                <span className="text-sm font-bold">22000</span>
                <Trophy size={16} className="text-[#ff4b4b] ml-3" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}