import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold flex items-center gap-2">
          🐶 LIOSH <span className="hidden sm:inline">Token</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/tokenomics">Tokenomics</Link>
          <Link href="/presale">Presale</Link>
          <Link href="/staking">Staking</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/whitepaper">Whitepaper</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-orange-500 text-white px-6 py-4 space-y-3 text-lg font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/tokenomics" onClick={() => setIsOpen(false)}>Tokenomics</Link>
          <Link href="/presale" onClick={() => setIsOpen(false)}>Presale</Link>
          <Link href="/staking" onClick={() => setIsOpen(false)}>Staking</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/whitepaper" onClick={() => setIsOpen(false)}>Whitepaper</Link>
        </nav>
      )}
    </header>
  );
}
