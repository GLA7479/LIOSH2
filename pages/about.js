import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden px-6 pt-28 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="relative z-10 w-full max-w-6xl p-6 rounded-xl">
          {/* 🔹 חלק פתיחה */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="flex-shrink-0">
              <Image
                src="/images/lio.png"
                alt="LIO the Shiba Inu"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg border-2 border-cyan-300"
              />
            </div>
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About LIOSH Token
              </h1>
              <p className="text-lg md:text-xl mb-4 text-gray-800">
                LIOSH Token is a next-generation meme cryptocurrency inspired by{" "}
                <span className="text-purple-600 font-semibold">LIO</span>, a playful and loyal Shiba Inu.
              </p>
              <p className="text-lg md:text-xl text-gray-800">
                The project blends meme culture with real utility – staking, presale opportunities, NFTs,
                and ecosystem features for long-term value.
              </p>
            </div>
          </div>

          {/* 🔹 Mission & Vision */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">🌟 Our Mission & Vision</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
              Our mission is to build a fun, strong, and rewarding crypto community inspired by LIO.
              We aim to combine entertainment, utility, and community-driven growth.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our vision is to make LIOSH Token the next big meme coin with staking, partnerships,
              NFTs, and metaverse integration.
            </p>
          </section>

          {/* 🔹 Why LIOSH */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-cyan-600">🚀 Why Choose LIOSH?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { title: "Strong Community", text: "A loyal and growing community driven by the spirit of LIO." },
                { title: "Real Utility", text: "Staking rewards, presale benefits, and future NFT integrations." },
                { title: "Fun & Value", text: "A meme coin that is both fun and built for long-term growth." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 🔹 Mini Roadmap */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">📅 Mini Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-8">
              {[
                { phase: "Phase 1", text: "Token Launch, Website, Community Building" },
                { phase: "Phase 2", text: "Presale, Marketing Campaigns, Early Partnerships" },
                { phase: "Phase 3", text: "Exchange Listings, Staking Launch" },
                { phase: "Phase 4", text: "NFTs, Metaverse, Major Partnerships" }
              ].map((phase, i) => (
                <div key={i} className="p-6 bg-gray-100 rounded-xl shadow-lg hover:scale-105 transition">
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">{phase.phase}</h3>
                  <p className="text-gray-700">{phase.text}</p>
                </div>
              ))}
            </div>

            {/* 🔹 Join Presale Button */}
            <div className="text-center">
              <Link href="/presale">
                <button className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 px-8 py-4 rounded-xl text-lg font-bold text-black hover:scale-105 transition shadow-lg">
                  🚀 Join Presale
                </button>
              </Link>
            </div>
          </section>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
