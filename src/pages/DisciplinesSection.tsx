import React from 'react';

export default function DisciplinesSection() {
  const disciplines = [
    {
      id: 1,
      title: "Robo Race",
      // Replace with your local image path
      image: "/robo-race.jpg"
    },
    {
      id: 2,
      title: "Line Follower",
      image: "/line-follower.jpg"
    },
    {
      id: 3,
      title: "RC Racing",
      image: "/rc-racing.jpg"
    },
    {
      id: 4,
      title: "FPV Drone Racing &\nAeromodelling",
      image: "/drone-racing.jpg"
    },
    {
      id: 5,
      title: "Robo Hockey",
      image: "robo-hockey.jpg"
    },
    {
      id: 6,
      title: "Robo War",
      image: "robo-war.png"
    }
  ];

return (
    <section className="relative bg-[#0a0a0a] py-24 font-['Inter',_sans-serif] border-t border-white/5 overflow-hidden">
      

    <img
  src="/circuit-board.png"
  alt=""
  className="absolute bottom-20 right-[380px] w-[600px] opacity-20 pointer-events-none"
/>


      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h3 className="text-[#ff4b4b] font-bold tracking-widest text-[14px] mb-2 uppercase">
            SPORTS
          </h3>
          <h2 className="font-['Orbitron',_sans-serif] text-[32px] md:text-[38px] font-bold text-white tracking-wide uppercase">
            COMPETITION DISCIPLINES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {disciplines.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col rounded-xl overflow-hidden bg-[#181818] border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-xl cursor-pointer z-10"
            >
              <div className="w-full h-[220px] bg-[#222] relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full py-5 px-4 flex items-center justify-center min-h-[80px]">
                <h4 className="text-white font-bold text-[18px] tracking-wide text-center whitespace-pre-line leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}