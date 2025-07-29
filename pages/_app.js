import "../styles/globals.css";
import FloatingButton from "../components/FloatingButton";
import Layout from "../components/Layout";
import "../i18n"; // ✅ טעינת i18n פעם אחת עבור כל האפליקציה

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div style={{ paddingTop: "64px" }}>
        <Component {...pageProps} />
      </div>
      <FloatingButton />
    </Layout>
  );
}
