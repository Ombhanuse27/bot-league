import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function FooterSection() {
    const quickLinks = [
        ["The Arena", "Join the Team"],
        ["Episodes", "Sponsorships"],
        ["National Rankings", "Help Center"],
        ["Programs", "Contact Us"],
        ["Rulebooks", "Legal"]
    ];

    return (
        <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10 font-['Inter',_sans-serif] text-white">
            <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">

                {/* Sponsors Section */}
                <div className="mb-20">
                    <h3 className="font-['Orbitron',_sans-serif] text-xl font-bold mb-12 tracking-wider">SPONSORS</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                        {[
                            { name: "NIT DELHI", img: "/nit-delhi.png" },
                            { name: "INDIAN BIT", img: "/indian-bit.png" },
                            { name: "NIT SILCHAR", img: "/nit-silchar.png" },
                            { name: "DELHIVERY ROBOTICS", img: "/robo-company.png" },
                            { name: "IIT BOMBAY", img: "/iit-bombay.png" },
                            { name: "GENERAL ROBOTICS", img: "/robo-company2.png" },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                                    <img
                                        src={s.img}
                                        alt={s.name}
                                       
                                        className="max-h-full max-w-full object-contain filter brightness-0 invert"
                                    />
                                </div>
                                <span className="font-bold text-sm tracking-wide">{s.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-white/10 mb-12" />

                <div className="flex flex-col md:flex-row justify-between gap-12">


                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        {quickLinks.flat().map((link) => (
                            <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">Social Media</h4>
                        <div className="flex gap-6 text-gray-400">
                            <FaYoutube className="hover:text-[#ff4b4b] cursor-pointer transition-colors" />
                            <FaInstagram className="hover:text-[#ff4b4b] cursor-pointer transition-colors" />
                            <FaFacebook className="hover:text-[#ff4b4b] cursor-pointer transition-colors" />
                            <FaTwitter className="hover:text-[#ff4b4b] cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}