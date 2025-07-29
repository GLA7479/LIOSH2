import React from "react";
import { motion } from "framer-motion";

export default function VideoBackground() {
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
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
          style={{
            maxHeight: "100vh",
            width: "100% !important",
            height: "auto !important",
            objectFit: "cover !important",
          }}
        />
      </motion.div>
    </div>
  );
}