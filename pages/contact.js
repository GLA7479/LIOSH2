import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center text-white p-6 pt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ וידאו ברקע */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/contact-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          📩 Contact Us
        </motion.h1>

        <p className="text-lg max-w-2xl text-center mb-8">
          Have questions about LIOSH Token? Reach out to us through any of the platforms below!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg font-semibold">
          <a href="mailto:office@liosh.com" className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition">📧 Email</a>
          <a href="https://www.instagram.com/liotheshiba21" target="_blank" className="bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-600 transition">📷 Instagram</a>
          <a href="#" className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">🌐 Facebook</a>
          <a href="#" className="bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 transition">🐦 Twitter</a>
          <a href="#" className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition">💬 Discord</a>
          <a href="#" className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition">📲 Telegram</a>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
