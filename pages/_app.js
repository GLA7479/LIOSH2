import "../styles/globals.css";
import FloatingButton from "../components/FloatingButton";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <FloatingButton />
    </>
  );
}
