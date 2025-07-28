import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Contact Us עכשיו מוביל לעמוד /contact
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Presale", href: "/presale" },
    { name: "Staking", href: "/staking" },
    { name: "Gallery", href: "/gallery" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Contact Us", href: "/contact" }, // ⬅️ שינוי כאן
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-400 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex justify-between items-center">
        {/* לוגו בצד שמאל */}
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

        {/* תפריט למחשב */}
        <div className="flex-1 flex justify-end">
          <nav className="hidden md:flex space-x-6 text-lg font-semibold font-[Raleway]">
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href} className="hover:text-white">
                {item.name}
              </Link>
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
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
