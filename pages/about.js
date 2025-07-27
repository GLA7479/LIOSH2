import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const instagramLink = "https://www.instagram.com/liotheshiba21?igsh=NTljMDY4N2EzMWJu";

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-400 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex justify-between items-center">
        
        {/* לוגו בצד שמאל */}
        <a href={instagramLink} target="_blank" className="flex items-center gap-3 relative top-1">
          <Image
            src="/images/logo.png"
            alt="LIOSH Logo"
            width={95}
            height={95}
            className="rounded-full"
          />
          <span className="text-3xl font-bold tracking-wide text-yellow-400 font-[Raleway]">
            LIOSH Token
          </span>
        </a>

        {/* תפריט למחשב – בצד ימין */}
        <div className="flex-1 flex justify-end">
          <nav className="hidden md:flex space-x-6 text-lg font-semibold font-[Raleway]">
            {["Home","About","Tokenomics","Presale","Staking","Gallery","Whitepaper","Contact Us"].map((item, i) => (
              <a key={i} href={instagramLink} target="_blank" className="hover:text-white">{item}</a>
            ))}
          </nav>
        </div>

        {/* תפריט מובייל */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none ml-4"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* תפריט מובייל פתוח */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-yellow-400 px-6 py-4 font-[Raleway]">
          <div className="flex flex-col items-end space-y-4 text-lg font-semibold">
            {["Home","About","Tokenomics","Presale","Staking","Gallery","Whitepaper","Contact Us"].map((item, i) => (
              <a key={i} href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
