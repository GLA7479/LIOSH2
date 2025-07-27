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
        backgroundColor: [
          "#FACC15",
          "#22D3EE",
          "#4ADE80",
          "#F472B6",
          "#A78BFA",
        ],
        borderColor: "#111",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="max-w-5xl mx-auto pt-32 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-6">
          📊 Tokenomics
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Overview of LIOSH Token distribution and allocation
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-full md:w-1/2">
            <Pie data={data} />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Presale</h3>
              <p>40% allocated for early investors</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Liquidity</h3>
              <p>30% locked to ensure stable trading</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Staking Rewards</h3>
              <p>20% dedicated to staking incentives</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Team & Advisors</h3>
              <p>5% locked for long-term growth</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Marketing</h3>
              <p>5% reserved for promotions and growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
