import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // נטען את הסרטון רק אחרי שהעמוד מוכן
      video.load();
    }
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center -z-10 overflow-hidden bg-black"
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        animate={{ y: ["0%", "-10%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{
          width: "100%",
          maxWidth: "1920px",
          height: "auto",
          aspectRatio: "16/9",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/video-placeholder.jpg"  // ✅ תמונת רקע עד שהווידאו מוכן
          onCanPlay={() => setIsLoaded(true)}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
