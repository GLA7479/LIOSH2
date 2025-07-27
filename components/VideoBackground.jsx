export default function VideoBackground({ pageName }) {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      {/* וידאו יוצג רק במסכים גדולים */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden sm:block w-full h-full object-cover"
        src={`/videos/${pageName}-bg.mp4`}
      />

      {/* תמונה תוצג רק במובייל */}
      <img
        src={`/images/${pageName}-bg-mobile.jpg`}
        alt="Background"
        className="block sm:hidden w-full h-full object-cover"
      />
    </div>
  );
}
