import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const instagramLink =
    "https://www.instagram.com/liotheshiba21?igsh=NTljMDY4N2EzMWJu";

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-400 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex justify-between items-center">
        {/* 🔹 לוגו בצד שמאל */}
        <Link href="/" className="flex items-center gap-3 relative top-1">
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
        </Link>

        {/* 🔹 תפריט ראשי למחשב בצד ימין */}
        <nav className="hidden md:flex space-x-5 text-lg font-semibold font-[Raleway]">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/tokenomics" className="hover:text-white">Tokenomics</Link>
          <Link href="/presale" className="hover:text-white">Presale</Link>
          <Link href="/staking" className="hover:text-white">Staking</Link>
          <Link href="/gallery" className="hover:text-white">Gallery</Link>
          <Link href="/whitepaper" className="hover:text-white">Whitepaper</Link>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Contact Us
          </a>
        </nav>

        {/* 🔹 כפתור תפריט מובייל */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none ml-4"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 תפריט מובייל */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-yellow-400 px-6 py-4 font-[Raleway]">
          <div className="flex flex-col items-end space-y-4 text-lg font-semibold">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/tokenomics" onClick={() => setIsOpen(false)}>Tokenomics</Link>
            <Link href="/presale" onClick={() => setIsOpen(false)}>Presale</Link>
            <Link href="/staking" onClick={() => setIsOpen(false)}>Staking</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/whitepaper" onClick={() => setIsOpen(false)}>Whitepaper</Link>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
