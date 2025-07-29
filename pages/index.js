import { useRef, useState, useEffect } from "react";
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
      {/* 🔹 Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          key={currentVideo}
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={videos[currentVideo]}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        <div className="relative z-10 max-w-3xl p-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 mb-4">
            LIOSH Token
          </h1>

          <p className="text-xl sm:text-2xl text-white mb-8">
            The ultimate meme coin inspired by Shiba Inu! Join our presale and be
            part of the next crypto revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presale">
              <button className="bg-yellow-400 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-500 transition">
                🚀 Join Presale
              </button>
            </Link>
            <Link href="/staking">
              <button className="bg-black border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 hover:text-black transition">
                💰 Stake Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 שתי הפסקאות עם עיצוב משופר */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 text-center shadow-lg">
        <div className="max-w-4xl mx-auto space-y-8 px-6">
          <p className="text-xl sm:text-2xl text-gray-100 font-medium leading-relaxed">
            LIOSH is the ultimate meme coin inspired by our real Shiba Inu dog –{" "}
            <strong className="text-yellow-300 font-semibold">LIO</strong>. At just 3 years old, LIO has already
            become the heart and soul of this project. LIOSH is the only meme coin backed by a
            real Shiba Inu mascot, bringing fun and community power together!
          </p>

          <p className="text-xl sm:text-2xl text-gray-200 font-medium leading-relaxed">
            Our mission is to build a strong, community-driven cryptocurrency that celebrates the
            love for Shiba Inu while offering real-world utility, staking rewards, and exciting
            upcoming partnerships. Join us early and be part of LIO’s journey to the moon! 🚀
          </p>
        </div>
      </section>

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
    </>
  );
}
