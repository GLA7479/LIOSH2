import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebook, FaDiscord, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    { name: "Instagram", link: "https://www.instagram.com/liotheshiba21?igsh=NTljMDY4N2EzMWJu", icon: <FaInstagram size={28} /> },
    { name: "Twitter", link: "https://twitter.com/", icon: <FaTwitter size={28} /> },
    { name: "Facebook", link: "https://facebook.com/", icon: <FaFacebook size={28} /> },
    { name: "Discord", link: "https://discord.com/", icon: <FaDiscord size={28} /> },
    { name: "Telegram", link: "https://t.me/", icon: <FaTelegramPlane size={28} /> },
    { name: "Email", link: "mailto:OFFICE@LIOSH.COM", icon: <FaEnvelope size={28} /> }
  ];

  return (
    <>
      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 pt-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 🔹 רקע וידאו */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/contact-bg.mp4" // 🔹 אפשר להחליף לוידאו אחר
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-8 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          📩 Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-black/50 rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {contact.icon}
              <span className="text-lg font-semibold">{contact.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
