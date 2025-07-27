import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaTelegram, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-16"
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
          src="/videos/contact-bg.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">
            📩 Contact Us
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Get in touch with us for any questions, collaborations, or support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <a
              href="mailto:OFFICE@LIOSH.COM"
              className="flex items-center justify-center gap-3 bg-gray-800 p-4 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              <FaEnvelope size={22} />
              <span className="font-bold">OFFICE@LIOSH.COM</span>
            </a>

            <a
              href="https://www.instagram.com/liotheshiba21?igsh=NTljMDY4N2EzMWJu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gray-800 p-4 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram size={22} />
              <span className="font-bold">Instagram</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-gray-800 p-4 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              <FaTwitter size={22} />
              <span className="font-bold">Twitter</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-gray-800 p-4 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              <FaTelegram size={22} />
              <span className="font-bold">Telegram</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-gray-800 p-4 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              <FaDiscord size={22} />
              <span className="font-bold">Discord</span>
            </a>
          </div>
        </div>
      </motion.main>
    </Layout>
  );
}
