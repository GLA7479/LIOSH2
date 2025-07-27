import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  // רשימת הסרטונים לרקע
  const videos = ["/videos/background1.mp4", "/videos/background2.mp4"];

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
      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ רקע וידאו שמתחלף */}
        <video
          ref={videoRef}
          key={currentVideo} // רענון בכל פעם שהסרטון מתחלף
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={videos[currentVideo]}
        />

        <div className="absolute inset-0 bg-black/30 -z-10"></div>

        <h1 className="text-4xl text-yellow-400 mb-6 font-bold drop-shadow-lg">
          🐾 Welcome to LIOSH
        </h1>

        <p className="text-lg max-w-xl text-center text-gray-200 mb-4">
          The next-generation meme token inspired by the amazing Shiba Inu!
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105">
          🚀 Join Presale
        </button>
      </motion.main>
      <Footer />
    </>
  );
}
