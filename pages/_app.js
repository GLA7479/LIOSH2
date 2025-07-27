import "../styles/globals.css";
import FloatingButton from "../components/FloatingButton"; // ✅ מייבאים את הכפתור

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingButton /> {/* ✅ הכפתור הצף */}
    </>
  );
}
