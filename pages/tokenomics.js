import Header from "../components/Header";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const data = {
    labels: ["Presale", "Liquidity", "Staking Rewards", "Team & Advisors", "Marketing"],
    datasets: [
      {
        data: [40, 30, 20, 5, 5],
        backgroundColor: ["#FACC15", "#22D3EE", "#4ADE80", "#F472B6", "#A78BFA"],
        borderColor: "#111",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
      {/* 🔹 וידאו רקע */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
        src="/videos/tokenomics-bg.mp4" // 👈 שים כאן את קובץ הווידאו
      />

      {/* שכבת כהות כדי לשפר קריאות */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

      <Header />

      <div className="max-w-6xl mx-auto pt-28 px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          📊 Tokenomics
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Overview of LIOSH Token distribution and allocation
        </p>

        {/* Grid מתאים לנייד ולמסך רחב */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* תרשים */}
          <div className="flex justify-center">
            <div className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-[60%]">
              <Pie data={data} />
            </div>
          </div>

          {/* כרטיסיות */}
          <div className="space-y-4">
            {[
              { title: "Presale", text: "40% allocated for early investors" },
              { title: "Liquidity", text: "30% locked to ensure stable trading" },
              { title: "Staking Rewards", text: "20% dedicated to staking incentives" },
              { title: "Team & Advisors", text: "5% locked for long-term growth" },
              { title: "Marketing", text: "5% reserved for promotions and growth" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-lg md:text-xl font-bold text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
