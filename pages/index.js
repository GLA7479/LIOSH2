import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <motion.main
        className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden px-4"
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
            The ultimate meme coin inspired by Shiba Inu! Join our presale and be part of the next crypto revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presale">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="bg-gray-900 border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition transform hover:scale-105">
                💰 Stake Now
              </button>
            </Link>
          </div>
        </div>
      </motion.main>
    </Layout>
  );
}
