import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Presale", href: "/presale" },
    { name: "Staking", href: "/staking" },
    { name: "Gallery", href: "/gallery" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-400  fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* לוגו + טקסט */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="LIOSH Logo"
            width={90}
            height={90}
            className="rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-wide text-yellow-400">
              LIOSH Token
            </span>
            <span className="text-sm text-gray-300 italic">
              Powered by LIO – The Real Shiba Inu
            </span>
          </div>
        </Link>

        {/* כפתור ☰ לפתיחה/סגירה */}
        <button
          className="text-yellow-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* תפריט נפתח – גדול יותר, וידאו כרקע */}
        {isOpen && (
          <div
            className="fixed right-0 top-24 w-96 flex flex-col items-end py-6 space-y-4  z-50 overflow-hidden"
            style={{ borderRadius: "8px" }}
          >
            {/* וידאו כרקע */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.7 }}
            >
              <source src="/videos/menu-bg.mp4" type="video/mp4" />
            </video>

            {/* שכבה כהה מעל הווידאו */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* פריטי התפריט */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-2xl font-semibold pr-6"
                style={{
                  color: "#fff",
                  textShadow:
                    "0 0 6px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.6)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}