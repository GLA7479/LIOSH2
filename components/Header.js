import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const menuItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "tokenomics", href: "/tokenomics" },
    { key: "presale", href: "/presale" },
    { key: "staking", href: "/staking" },
    { key: "gallery", href: "/gallery" },
    { key: "whitepaper", href: "/whitepaper" },
    { key: "contact", href: "/contact" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "he", label: "עברית" },
    { code: "ar", label: "العربية" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "ko", label: "한국어" },
    { code: "de", label: "Deutsch" },
    { code: "nl", label: "Nederlands" },
    { code: "fr", label: "Français" },
    { code: "pl", label: "Polski" },
    { code: "ro", label: "Română" },
    { code: "ru", label: "Русский" },
    { code: "tr", label: "Türkçe" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-400 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
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

        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-md mr-4"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>

        <button
          className="text-yellow-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div
            className="fixed right-0 top-24 w-96 flex flex-col items-end py-6 space-y-4 z-50 overflow-hidden"
            style={{ borderRadius: "8px" }}
          >
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
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative text-2xl font-semibold pr-6"
                style={{
                  color: "#fff",
                  textShadow:
                    "0 0 6px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.6)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.key}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
