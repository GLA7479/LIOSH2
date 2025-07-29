import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [rotate, setRotate] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 סיבוב אוטומטי אקראי
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(true);
      setTimeout(() => setRotate(false), 1000);
    }, Math.random() * 8000 + 5000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 שינוי שקיפות וגובה בגלילה
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "he", label: "HE", flag: "🇮🇱" },
    { code: "ar", label: "AR", flag: "🇸🇦" },
    { code: "ja", label: "JA", flag: "🇯🇵" },
    { code: "zh", label: "ZH", flag: "🇨🇳" },
    { code: "ko", label: "KO", flag: "🇰🇷" },
    { code: "de", label: "DE", flag: "🇩🇪" },
    { code: "nl", label: "NL", flag: "🇳🇱" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "pl", label: "PL", flag: "🇵🇱" },
    { code: "ro", label: "RO", flag: "🇷🇴" },
    { code: "ru", label: "RU", flag: "🇷🇺" },
    { code: "tr", label: "TR", flag: "🇹🇷" },
  ];

  return (
    <header
      className={`fixed w-full z-50 text-yellow-400 transition-all duration-300 ${
        scrolled ? "bg-black/80 h-14" : "bg-black/60 h-16"
      }`}
      style={{
        background:
          "linear-gradient(90deg, rgba(11,29,54,0.9) 0%, rgba(18,39,70,0.9) 50%, rgba(11,29,54,0.9) 100%)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* 🔹 לוגו + טקסט */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="LIOSH Logo"
            width={70}
            height={70}
            className={`rounded-full transition-transform duration-1000 group-hover:scale-110 group-hover:shadow-[0_0_12px_#facc15] ${
              rotate ? "rotate-[360deg]" : ""
            }`}
            onMouseEnter={() => {
              setRotate(true);
              setTimeout(() => setRotate(false), 1000);
            }}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-wide text-yellow-400">
              LIOSH Token
            </span>
            <span className="text-xs text-gray-300 italic">
              Powered by LIO – The Real Shiba Inu
            </span>
          </div>
        </Link>

        {/* 🔹 כפתור שפה + תפריט */}
        <div className="flex items-center gap-2">
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-gray-900 bg-opacity-60 text-yellow-400 px-2 py-0.5 rounded-md text-xs sm:text-sm"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.label}
              </option>
            ))}
          </select>

          <button
            className="text-yellow-400 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 🔹 תפריט נפתח */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-20 w-80 flex flex-col items-end py-6 space-y-4 z-50 overflow-hidden"
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
                  className="relative text-xl font-semibold pr-5"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
