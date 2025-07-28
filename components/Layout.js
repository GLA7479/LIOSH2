import Header from "./Header";
import Footer from "./Footer";
import VideoBackground from "./VideoBackground";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}