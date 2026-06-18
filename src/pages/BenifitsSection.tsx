import { Award, Gavel, Briefcase, Zap, } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    { title: "NATIONAL RECOGNITION", desc: "Benchmark your skills on India's official robotics leaderboard.", icon: Award },
    { title: "FAIR JUDGING", desc: "Compete with confidence under standardized, expert-led evaluation.", icon: Gavel },
    { title: "CAREER OPS", desc: "Bridge the gap between arena victories and top-tier tech placements.", icon: Briefcase },
    { title: "HIGH - ENERGY ECO", desc: "Join a nationwide community of elite innovators and robotics athletes.", icon: Zap },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 text-white flex justify-center">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
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
        <div className="w-full max-w-[600px] mx-auto flex lg:justify-end">
          <img 
            src="/leaderboard.png" 
            alt="League Leaderboard"
            className="w-full h-auto object-contain rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}