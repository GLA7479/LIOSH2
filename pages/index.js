import { useRef, useState, useEffect } from "react";
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
    <>
      <motion.main
        className="relative min-h-screen flex flex-col items-center overflow-hidden px-4 pt-0 sm:pt-4"
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
          className="video-bg"
          src={videos[currentVideo]}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

        <div className="relative z-10 text-center max-w-3xl p-4">
          <motion.h1
            className="flex justify-center gap-1 text-5xl sm:text-7xl font-extrabold text-amber-300 mb-10 tracking-wide"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {"LIOSH Token".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:text-white hover:scale-125 transition-transform"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-xl sm:text-2xl mb-6 text-gray-200">
            LIOSH is the ultimate meme coin inspired by our real Shiba Inu dog –{" "}
            <strong className="text-amber-300">LIO</strong>. At just 3 years old, LIO has already
            become the heart and soul of this project. LIOSH is the only meme coin backed by a
            real Shiba Inu mascot, bringing fun and community power together!
          </p>

          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            Our mission is to build a strong, community-driven cryptocurrency that celebrates the
            love for Shiba Inu while offering real-world utility, staking rewards, and exciting
            upcoming partnerships. Join us early and be part of LIO’s journey to the moon! 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presale">
              <button className="bg-amber-300 text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-amber-400 transition transform hover:scale-110">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="bg-gray-900 border border-amber-300 text-amber-300 px-8 py-4 rounded-lg font-bold text-xl hover:bg-amber-300 hover:text-black transition transform hover:scale-110">
                💰 Stake Now
              </button>
            </Link>
          </div>
        </div>
      </motion.main>

      {/* 🚀 Roadmap Section */}
      <section className="bg-black text-gray-200 py-16">
        <h2 className="text-5xl text-amber-300 font-bold text-center mb-10">🚀 Roadmap</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { title: "Phase 1", text: "Token Launch, Website, Community Building" },
            { title: "Phase 2", text: "Presale Stages, Marketing Campaigns" },
            { title: "Phase 3", text: "Exchange Listings, Staking Launch" },
            { title: "Phase 4", text: "Major Partnerships & Metaverse Utility" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg ">
              <h3 className="text-2xl font-bold mb-3 text-amber-300">{item.title}</h3>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📊 Tokenomics Section */}
      <section className="bg-gray-900 text-gray-200 py-16">
        <h2 className="text-5xl text-amber-300 font-bold text-center mb-10">📊 Tokenomics</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          {[
            { title: "Total Supply", text: "1,000,000,000,000 LIOSH" },
            { title: "Presale Allocation", text: "40% – Available for early investors" },
            { title: "Liquidity & Marketing", text: "30% – Locked for liquidity & promotions" },
            { title: "Staking Rewards", text: "20% – For staking pools and incentives" },
            { title: "Team & Advisors", text: "10% – Team allocation (locked)" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg ">
              <h3 className="text-2xl font-bold mb-3 text-amber-300">{item.title}</h3>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/tokenomics">
            <button className="bg-amber-300 text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-amber-400 transition transform hover:scale-110">
              📊 Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* 📩 Contact Section */}
      <section className="bg-gray-800 text-gray-200 py-16">
        <h2 className="text-4xl text-amber-300 font-bold text-center mb-6">📩 Get in Touch</h2>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="mailto:contact@liosh.com" className="hover:text-amber-300">📧 Email</a>
          <a href="#" className="hover:text-amber-300">🐦 Twitter</a>
          <a href="#" className="hover:text-amber-300">💬 Telegram</a>
          <a href="#" className="hover:text-amber-300">🌐 Discord</a>
        </div>
      </section>
    </>
  );
}
