export default function EcosystemSection() {
  const cards = [
    { title: "BECOME IN JUDGE" },
    { title: "VOLUNTEER" },
    { title: "COMMUNITY MEMBER" }
  ];

  return (
    <section className="bg-[#050505] py-24 flex justify-center border-t border-white/5">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <h2 className="font-['Orbitron',_sans-serif] text-3xl md:text-[42px] font-bold text-white mb-16 text-center uppercase tracking-wider">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#111] border border-white/10 p-8 rounded-xl shadow-xl">
              <h3 className="font-['Orbitron',_sans-serif] text-white text-lg font-bold mb-8 tracking-wide">
                {card.title}
              </h3>
              
              <div className="space-y-4 mb-8">
                {['Name', 'Location', 'Enroll'].map((placeholder) => (
                  <input 
                    key={placeholder}
                    type="text" 
                    placeholder={placeholder}
                    className="w-full bg-[#1a1a1a] border border-white/10 p-3 rounded text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#ff4b4b] transition-colors"
                  />
                ))}
              </div>

              <button className="w-full py-3 bg-[#ff4b4b] hover:bg-red-600 text-white font-bold text-sm tracking-widest uppercase transition-colors">
                SIGN UP
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}