import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 pt-24 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/about-bg.mp4" // 🔹 Replace with your background video
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        {/* ✅ Title */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🐾 About LIOSH Token
        </motion.h1>

        {/* ✅ Content */}
        <motion.div
          className="max-w-3xl bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-4">
            Welcome to <strong>LIOSH Token</strong> – the only meme coin truly inspired by a real Shiba Inu!
          </p>

          <p className="mb-4">
            Meet <strong>Leo (LIO)</strong>, our 3-year-old Shiba Inu and the heart of this project. 
            His playful and loyal spirit inspired us to create a community-driven meme coin 
            that’s as fun and lovable as he is.
          </p>

          <p className="mb-4">
            LIOSH is not just another meme coin – it’s the only one backed by a real Shiba Inu mascot! 
            Our mission is to build a strong, vibrant, and fun community while bringing new life to 
            the meme coin world.
          </p>

          <p className="text-yellow-400 font-bold">
            🚀 Join us on Leo’s journey – let’s make LIOSH the next legendary meme coin!
          </p>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  );
}
