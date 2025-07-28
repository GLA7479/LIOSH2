import { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = ["/videos/home-bg1.mp4", "/videos/home-bg2.mp4"];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      };
    }
  }, [currentVideo]);

  return (
    <Layout>
      <motion.main
        className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          key={currentVideo}
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videos[currentVideo]}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 text-center max-w-3xl p-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 mb-4">
            LIOSH Token
          </h1>

          <p className="text-lg sm:text-xl mb-4 text-white">
            LIOSH is the ultimate meme coin inspired by our real Shiba Inu dog – Leo (LIO).
            At just 3 years old, Leo has already become the heart and soul of this project.
            LIOSH is the only meme coin backed by a real Shiba Inu mascot, bringing fun and
            community power together!
          </p>

          <p className="text-md sm:text-lg mb-6 text-gray-300">
            Our goal is to create a strong community-driven cryptocurrency that combines
            the love for Shiba Inu with real-world utility, staking rewards, and exciting
            upcoming partnerships. Join us early and be part of Leo’s journey to the moon! 🚀
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

      {/* 🚀 Roadmap Section */}
      <section className="bg-black text-white py-16">
        <h2 className="text-4xl text-yellow-400 font-bold text-center mb-10">🚀 Roadmap</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { title: "Phase 1", text: "Token Launch, Website, Community Building" },
            { title: "Phase 2", text: "Presale Stages, Marketing Campaigns" },
            { title: "Phase 3", text: "Exchange Listings, Staking Launch" },
            { title: "Phase 4", text: "Major Partnerships & Metaverse Utility" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📊 Tokenomics Section */}
      <section className="bg-gray-900 text-white py-16">
        <h2 className="text-4xl text-yellow-400 font-bold text-center mb-10">📊 Tokenomics</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          {[
            { title: "Total Supply", text: "1,000,000,000,000 LIOSH" },
            { title: "Presale Allocation", text: "40% – Available for early investors" },
            { title: "Liquidity & Marketing", text: "30% – Locked for liquidity & promotions" },
            { title: "Staking Rewards", text: "20% – For staking pools and incentives" },
            { title: "Team & Advisors", text: "10% – Team allocation (locked)" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/tokenomics">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105">
              📊 Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* 📩 Contact Section */}
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
