export default function VideoBackground({ pageName }) {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      {/* ✅ וידאו יוצג רק בדסקטופ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden sm:block w-full h-full object-cover"
        src={`/videos/${pageName}-bg.mp4`}
      />

      {/* ✅ תמונה מותאמת למובייל */}
      <img
        src={`/images/${pageName}-bg-mobile.jpg`}
        alt="Background"
        className="block sm:hidden w-full h-full object-contain bg-black"
        style={{ objectFit: "contain" }} // לא יחתוך את התמונה
      />
    </div>
  );
}
