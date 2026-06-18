
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
      
      {/* Main Container */}
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

          {/* ================= RIGHT SIDE: Diagram Image ================= */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Replaced previous absolute-positioned SVG and Icon structure 
              with a single, contained image asset.
            */}
            <div className="w-full max-w-[400px] aspect-square flex items-center justify-center">
              <img 
                src="/bot-league.png" // Replace with your actual image path (e.g., /src/assets/schematic.png or /public/schematic.png)
                alt="BotLeague Schematic Diagram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}