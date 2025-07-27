import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="LIOSH Logo"
            width={80} // 👈 נשאר אותו גודל
            height={80} // 👈 נשאר אותו גודל
            className="rounded-full"
          />
          <span className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            LIOSH Token
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-xl sm:text-2xl font-bold">
          <Link href="/">Home</Link>
          <Link href="/tokenomics">Tokenomics</Link>
          <Link href="/presale">Presale</Link>
          <Link href="/staking">Staking</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/whitepaper">Whitepaper</Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-orange-500 text-white px-6 py-4">
          <div className="flex flex-col items-center space-y-5 text-2xl font-bold">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/tokenomics" onClick={() => setIsOpen(false)}>Tokenomics</Link>
            <Link href="/presale" onClick={() => setIsOpen(false)}>Presale</Link>
            <Link href="/staking" onClick={() => setIsOpen(false)}>Staking</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/whitepaper" onClick={() => setIsOpen(false)}>Whitepaper</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
