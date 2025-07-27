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

        {/* תפריט בצד ימין */}
        <div className="hidden md:flex flex-1 justify-end">
          <nav className="flex space-x-5 text-lg font-semibold font-[Raleway]">
            <a href={instagramLink} target="_blank" className="hover:text-white">Home</a>
            <a href={instagramLink} target="_blank" className="hover:text-white">About</a>
            <a href={instagramLink} target="_blank" className="hover:text-white">Tokenomics</a>
            <a href={instagramLink} target="_blank" className="hover:text-white">Presale</a>
            <a href={instagramLink} target="_blank" className="hover:text-white">Staking</a>
            <a href={instagramLink} target="_blank" className="hover:text-white">Gallery</a>
            <a href={instagramLink} target="_blank" className="hover:text-white">Whitepaper</a>
            <a href={instagramLink} target="_blank" className="hover:text-white">Contact Us</a>
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

      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-yellow-400 px-6 py-4 font-[Raleway]">
          <div className="flex flex-col items-end space-y-4 text-lg font-semibold">
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>Home</a>
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>About</a>
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>Tokenomics</a>
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>Presale</a>
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>Staking</a>
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>Whitepaper</a>
            <a href={instagramLink} target="_blank" onClick={() => setIsOpen(false)}>Contact Us</a>
          </div>
        </nav>
      )}
    </header>
  );
}
