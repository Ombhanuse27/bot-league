
export default function Navbar() {
  // Navigation items to map through
  const navLinks = [
    { name: "Events", href: "#events" },
    { name: "Programs", href: "#programs" },
    { name: "Community", href: "#ecosystem" },
    { name: "Ranks", href: "#benefits" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-8 lg:px-12 py-5 flex items-center justify-between bg-[#111111]/90 backdrop-blur-md border-b border-white/5">

      <div className="flex items-center cursor-pointer">
        <div className="relative flex items-center font-['Orbitron',_sans-serif] italic pr-4">
           <span className="text-[28px] font-black tracking-tighter text-[#1a73e8]">B⚙T</span>
           <span className="text-[28px] font-black tracking-tighter text-[#ff4b4b] ml-1">LEAGUE</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-14">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="group relative font-['Michroma',_sans-serif] text-gray-200 hover:text-[#ff4b4b] text-[14px] transition-colors py-6"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ff4b4b] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>


      <div className="hidden sm:flex items-center gap-4">
        <button className="px-6 py-2 text-[14px] text-white border border-gray-400 rounded-md">LOGIN</button>
        <button className="px-6 py-2 text-[14px] font-bold text-white bg-[#ff4b4b] rounded-md">REGISTER</button>
      </div>
    </nav>
  );
}