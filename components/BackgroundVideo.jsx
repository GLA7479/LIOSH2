import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo({ src, poster }) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const loadVideo = () => videoRef.current.load();
      window.addEventListener("load", loadVideo);
      return () => window.removeEventListener("load", loadVideo);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      onCanPlay={() => setLoaded(true)}
      className={`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
