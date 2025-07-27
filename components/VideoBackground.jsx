import { useEffect, useState } from "react";

export default function VideoBackground({ pageName }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videoSrc = `/videos/${pageName}-bg.mp4`;
  const imageSrc = `/images/${pageName}-bg-mobile.jpg`;

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      {!isMobile ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={videoSrc}
        />
      ) : (
        <img
          src={imageSrc}
          alt="Background"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
