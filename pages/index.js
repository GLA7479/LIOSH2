import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videos = ["/videos/home-bg1.mp4", "/videos/home-bg2.mp4"];

  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      };
    }
  }, [currentVideo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(true);
      setTimeout(() => setRotate(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeZoomIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {showContent ? (
        <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {!videoError ? (
          <video
            key={currentVideo}
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="none"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover -z-10"
            src={videos[currentVideo]}
          />
        ) : (
          <img
            src="/images/home-fallback.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
        )}

        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        <motion.div
          className="relative z-10 max-w-3xl p-4 -mt-20 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeZoomIn}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.img
              src="/images/logo2.png"
              alt="LIOSH Logo"
              className="w-16 h-16 sm:w-20 sm:h-20"
              whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 1 } }}
              animate={rotate ? { rotate: 360 } : {}}
              transition={{ duration: 1 }}
            />

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-normal"
              style={{
                backgroundImage: "linear-gradient(90deg, #facc15, #fbbf24, #facc15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeZoomIn}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              LIOSH TOKEN
            </motion.h1>

            <motion.img
              src="/images/logo2.png"
              alt="LIOSH Logo"
              className="w-16 h-16 sm:w-20 sm:h-20"
              whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 1 } }}
              animate={rotate ? { rotate: 360 } : {}}
              transition={{ duration: 1 }}
            />
          </div>

          <motion.p
            className="text-lg sm:text-2xl text-gray-100 font-medium mb-8 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeZoomIn}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            The ultimate meme coin inspired by Shiba Inu! Join our presale and be part of the next crypto revolution.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeZoomIn}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Link href="/presale">
              <button className="bg-yellow-400 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-500 transition animate-pulse shadow-lg shadow-yellow-500/50">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="bg-black border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 hover:text-black transition animate-pulse shadow-lg shadow-yellow-500/30">
                💰 Stake Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 🔹 STORY */}
      <motion.section
        className="relative py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeZoomIn}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="mb-6 flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeZoomIn}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3">
              <motion.img
                src="/images/logo3.png"
                alt="LIOSH Logo"
                className="w-16 h-16 sm:w-20 sm:h-20"
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 1 } }}
                animate={rotate ? { rotate: 360 } : {}}
                transition={{ duration: 1 }}
              />

              <h2
                className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-normal"
                style={{
                  backgroundImage: "linear-gradient(90deg, #5ac8fa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                THE STORY OF LIO
              </h2>

              <motion.img
                src="/images/logo3.png"
                alt="LIOSH Logo"
                className="w-16 h-16 sm:w-20 sm:h-20"
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 1 } }}
                animate={rotate ? { rotate: 360 } : {}}
                transition={{ duration: 1 }}
              />
            </div>

            <p
              className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 leading-normal"
              style={{
                backgroundImage: "linear-gradient(90deg, #5ac8fa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Real Shiba Inu
            </p>
          </motion.div>

          <motion.p
            className="text-lg sm:text-2xl text-gray-100 font-medium mb-6 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeZoomIn}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            LIOSH is the ultimate meme coin inspired by our real Shiba Inu dog – <strong className="text-yellow-300">LIO</strong>. At just 3 years old, LIO has already become the heart and soul of this project. LIOSH is the only meme coin backed by a real Shiba Inu mascot, bringing fun and community power together!
          </motion.p>

          <motion.p
            className="text-lg sm:text-2xl text-gray-200 font-medium leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeZoomIn}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Our mission is to build a strong, community-driven cryptocurrency that celebrates the love for Shiba Inu while offering real-world utility, staking rewards, and exciting upcoming partnerships. Join us early and be part of LIO’s journey to the moon! 🚀
          </motion.p>
        </div>
      </motion.section>

      {/* 🔹 ROADMAP */}
      <motion.section
        className="bg-black text-gray-200 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeZoomIn}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-5xl text-amber-300 font-extrabold text-center mb-10">
          🚀 Roadmap
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center px-4">
          {[
            { title: "Phase 1", text: "Token Launch, Website, Community Building" },
            { title: "Phase 2", text: "Presale Stages, Marketing Campaigns" },
            { title: "Phase 3", text: "Exchange Listings, Staking Launch" },
            { title: "Phase 4", text: "Major Partnerships & Metaverse Utility" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeZoomIn}
              transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-amber-300">{item.title}</h3>
              <p className="text-lg sm:text-xl text-gray-100 leading-relaxed font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );

        </>
      ) : null}
    </>
  );