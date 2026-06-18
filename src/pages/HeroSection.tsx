
export default function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[800px] bg-[#050505] font-['Inter',_sans-serif] overflow-hidden selection:bg-[#f93b4a]/30">

      <div className="absolute inset-0 bg-[#050505] z-0" />

      <div className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0">

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/hero-bg.png')`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] from-0% via-[#050505]/80 via-[10%] to-transparent to-[30%]" />
      </div>

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
            <a href="#events" className="px-8 py-3.5 text-[14px] font-bold text-white border border-gray-500 hover:bg-white/10 hover:border-white rounded-[4px] transition-all backdrop-blur-sm tracking-wider bg-black/20">
              EXPLORE EVENTS
            </a>
          </div>
        </div>
      </main>

    </div>
  );
}