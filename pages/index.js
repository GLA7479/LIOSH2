import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* 🔹 Hero Section */}
      <motion.main
        className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/home-bg.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 text-center max-w-2xl p-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 mb-4">
            LIOSH Token
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            The ultimate meme coin inspired by Shiba Inu! Join our presale and become part of the next crypto revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presale">
              <button className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="w-full sm:w-auto bg-gray-900 border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition transform hover:scale-105">
                💰 Stake Now
              </button>
            </Link>
          </div>
        </div>
      </motion.main>

      {/* 🔹 Roadmap Section */}
      <section className="bg-black text-white py-16">
        <h2 className="text-4xl text-yellow-400 font-bold text-center mb-10">🚀 Roadmap</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { phase: "Phase 1", text: "Token Launch, Website, Community Building" },
            { phase: "Phase 2", text: "Presale Stages, Marketing Campaigns" },
            { phase: "Phase 3", text: "Exchange Listings, Staking Launch" },
            { phase: "Phase 4", text: "Major Partnerships & Metaverse Utility" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.phase}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Tokenomics Preview */}
      <section className="bg-gray-900 text-white py-16">
        <h2 className="text-4xl text-yellow-400 font-bold text-center mb-10">📊 Tokenomics</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">💰 Total Supply: 1T LIOSH</div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">🚀 Presale Allocation: 40%</div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">📈 Liquidity & Marketing: 30%</div>
        </div>
        <div className="text-center mt-8">
          <Link href="/tokenomics">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105">
              📊 Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="bg-gray-800 text-white py-16">
        <h2 className="text-3xl text-yellow-400 font-bold text-center mb-6">📩 Get in Touch</h2>
        <div className="flex justify-center space-x-6 text-lg">
          <a href="mailto:contact@liosh.com" className="hover:text-yellow-400">📧 Email</a>
          <a href="#" className="hover:text-yellow-400">🐦 Twitter</a>
          <a href="#" className="hover:text-yellow-400">💬 Telegram</a>
          <a href="#" className="hover:text-yellow-400">🌐 Discord</a>
        </div>
      </section>
    </Layout>
  );
}
