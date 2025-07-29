import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { FaUsers, FaLock, FaGift, FaChartLine, FaBullhorn } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const labels = [
    { title: "Presale", value: 40, icon: <FaChartLine />, color: "#FACC15", desc: "40% of the total supply allocated to early investors during the presale phase." },
    { title: "Liquidity", value: 30, icon: <FaLock />, color: "#22D3EE", desc: "30% of tokens locked to ensure stable and secure trading." },
    { title: "Staking Rewards", value: 20, icon: <FaGift />, color: "#4ADE80", desc: "20% reserved for staking rewards to incentivize long-term holders." },
    { title: "Team & Advisors", value: 5, icon: <FaUsers />, color: "#F472B6", desc: "5% allocated to the team and advisors with vesting for long-term commitment." },
    { title: "Marketing", value: 5, icon: <FaBullhorn />, color: "#A78BFA", desc: "5% dedicated to marketing, partnerships, and community growth." },
  ];

  const data = {
    labels: labels.map((l) => l.title),
    datasets: [
      {
        data: labels.map((l) => l.value),
        backgroundColor: labels.map((l) => l.color),
        borderColor: "#000",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: { color: "white", font: { size: 14, weight: "bold" } },
      },
    },
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/videos/tokenomics-bg.mp4"
      />
      <div className="absolute inset-0 bg-black/80 -z-10 backdrop-blur-sm"></div>

      <div className="text-center pt-10 px-3">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-2"
        >
          <span>📊</span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tokenomics
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-gray-300 mt-2 max-w-lg mx-auto"
        >
          Transparent distribution of LIOSH Token designed for growth, stability, and rewarding the community.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 px-3">
        <div className="relative w-[260px] md:w-[350px] lg:w-[400px]">
          <Pie data={data} options={options} />
        </div>

        <div className="grid grid-cols-1 gap-3 max-w-sm w-full">
          {labels.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex gap-3 p-3 rounded-lg shadow border border-gray-700"
              style={{ background: `linear-gradient(90deg, ${item.color}33, rgba(20,20,20,0.7))` }}
            >
              <div className="text-xl" style={{ color: item.color }}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold" style={{ color: item.color }}>
                  {item.title} – {item.value}%
                </h3>
                <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10 px-3 pb-16">
        <h2 className="text-2xl font-bold text-center mb-5 text-yellow-400">
          📄 Token Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-700 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-800 text-yellow-400 text-lg">
                <th className="p-4 border border-gray-700">Parameter</th>
                <th className="p-4 border border-gray-700">Value</th>
              </tr>
            </thead>
            <tbody>
              {labels.map((item, i) => (
                <tr key={i}>
                  <td className="p-4 border border-gray-700 font-bold" style={{ color: item.color }}>
                    {item.title}
                  </td>
                  <td className="p-4 border border-gray-700">
                    {item.value}% ({(1000000000000 * item.value) / 100} LIOSH)
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-4 border border-gray-700 font-bold text-white">Total Supply</td>
                <td className="p-4 border border-gray-700">1,000,000,000,000 LIOSH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
