import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link href="/presale">
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 px-6 py-3 rounded-full text-lg font-bold text-black  hover:scale-110 transition">
          🚀 Join Presale
        </button>
      </div>
    </Link>
  );
}
