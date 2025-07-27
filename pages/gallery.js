import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        const images = data.images.map((src) => ({ type: "image", src }));
        const videos = data.videos.map((src) => ({ type: "video", src }));
        setItems([...images, ...videos]);
      });
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const openModal = (i) => setSelectedIndex(i);
  const closeModal = () => setSelectedIndex(null);
  const prevItem = () =>
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const nextItem = () =>
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <>
      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ רקע וידאו אחד */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/gallery-bg.mp4" // 🔹 שם הסרטון שלך
        />
        <div className="absolute inset-0 bg-black/30 -z-10"></div>

        <h1 className="text-4xl text-yellow-400 mb-6 font-bold drop-shadow-lg">
          🐾 LIOSH Gallery
        </h1>

        {items.length === 0 ? (
          <p className="text-gray-200">Loading gallery...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="cursor-pointer rounded-lg overflow-hidden hover:scale-105 transform transition relative"
                onClick={() => openModal(index)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`media-${index}`}
                    className="w-40 h-40 object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-40 h-40 object-cover"
                    muted
                    playsInline
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {items[selectedIndex].type === "image" ? (
                <img
                  src={items[selectedIndex].src}
                  className="max-h-[90vh] rounded-lg"
                />
              ) : (
                <video
                  src={items[selectedIndex].src}
                  autoPlay
                  controls
                  className="max-h-[90vh] rounded-lg"
                />
              )}

              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                ✖ Close
              </button>

              <button
                onClick={prevItem}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-500"
              >
                ⬅
              </button>
              <button
                onClick={nextItem}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-500"
              >
                ➡
              </button>
            </motion.div>
          </div>
        )}
      </motion.main>
      <Footer />
    </>
  );
}
