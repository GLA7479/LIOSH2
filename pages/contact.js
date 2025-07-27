import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center text-white p-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/gallery-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <div className="relative z-10 max-w-xl text-center">
          <h1 className="text-4xl text-yellow-400 font-bold mb-6">📩 Contact Us</h1>

          <p className="mb-4 text-lg">We’d love to hear from you!</p>

          <div className="space-y-4">
            <a
              href="mailto:office@liosh.com"
              className="block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
            >
              📧 office@liosh.com
            </a>

            <a
              href="https://www.instagram.com/liotheshiba21?igsh=NTljMDY4N2EzMWJu"
              target="_blank"
              className="block bg-pink-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-pink-600 transition"
            >
              📷 Instagram
            </a>

            <a
              href="#"
              className="block bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition"
            >
              🐦 Twitter
            </a>

            <a
              href="#"
              className="block bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
            >
              💬 Telegram
            </a>

            <a
              href="#"
              className="block bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 transition"
            >
              🌐 Discord
            </a>
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
