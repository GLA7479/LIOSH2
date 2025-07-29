import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <motion.main
        className="relative min-h-screen flex flex-col items-center text-white p-6 pt-6 sm:pt-10"
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
          src="/videos/contact-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        {/* 🔹 כותרת עם גרדיאנט אחיד */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-6 flex items-center justify-center gap-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span>📩</span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact Us
          </span>
        </motion.h1>

        <p className="text-lg max-w-2xl text-center mb-8">
          Have questions about LIOSH Token? Reach out to us through any of the platforms below!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-lg font-semibold">
          {[
            { text: "📧 Email", color: "bg-yellow-400 hover:bg-yellow-500" },
            { text: "📷 Instagram", color: "bg-pink-500 hover:bg-pink-600" },
            { text: "🌐 Facebook", color: "bg-blue-500 hover:bg-blue-600" },
            { text: "🐦 Twitter", color: "bg-sky-500 hover:bg-sky-600" },
            { text: "💬 Discord", color: "bg-indigo-500 hover:bg-indigo-600" },
            { text: "📲 Telegram", color: "bg-green-500 hover:bg-green-600" }
          ].map((btn, i) => (
            <a
              key={i}
              href="https://www.instagram.com/liotheshiba21"
              target="_blank"
              className={`${btn.color} text-black px-6 py-3 rounded-lg transition`}
            >
              {btn.text}
            </a>
          ))}
        </div>
      </motion.main>
    </>
  );
}
