import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo({ src, poster }) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const onLoad = () => video.load();
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
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
      className={\`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-700 \${loaded ? "opacity-100" : "opacity-0"}\`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
