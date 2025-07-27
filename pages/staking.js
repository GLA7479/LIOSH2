import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Staking() {
  const [amount, setAmount] = useState("");

  return (
    <>
      <Header />
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-start p-6 pt-28 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ וידאו כרקע */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/staking-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <motion.h1
          className="text-4xl font-bold text-center text-yellow-400 mb-6 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🔒 STAKING
        </motion.h1>

        <p className="text-center max-w-xl mb-6 text-lg drop-shadow-lg">
          Stake your LIOSH tokens and earn rewards over a 2-year period. Rewards will be claimable after presale ends.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 mb-6 shadow-lg"
        >
          Withdraw Staked Tokens
        </motion.button>

        {/* ✅ סטטוס */}
        <div className="space-y-4 mb-6 w-full max-w-md">
          {["Staked Balance", "Your Stakeable"].map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex justify-between bg-black/40 p-3 rounded-lg backdrop-blur-md"
            >
              <span className="font-semibold">{label}</span>
              <span>0 LIOSH</span>
            </motion.div>
          ))}
        </div>

        {/* ✅ קלט סכום */}
        <motion.div
          className="flex mb-6 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="flex-1 px-3 py-2 text-black rounded-l-lg focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 px-4 py-2 rounded-r-lg font-bold hover:bg-yellow-500"
          >
            Buy & Stake
          </motion.button>
        </motion.div>

        {/* ✅ נתונים נוספים */}
        <motion.div
          className="bg-black/40 p-3 rounded-lg mb-4 backdrop-blur-md w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="mb-1">
            <strong>% of Pool:</strong> 0%
          </p>
          <p className="mb-1">
            <strong>Total Staked:</strong> 0 LIOSH
          </p>
        </motion.div>

        <motion.div
          className="bg-black/40 p-3 rounded-lg mb-4 backdrop-blur-md w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="font-bold text-yellow-300 text-lg mb-2">
            Estimated Rewards: 0 LIOSH / year
          </p>
          <ul className="text-sm text-gray-200">
            <li>• Rewards rate is dynamic</li>
            <li>• Monthly = Rewards ÷ 12</li>
            <li>• Daily = Rewards ÷ 365</li>
          </ul>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 mb-4 shadow-lg"
        >
          Claim Rewards
        </motion.button>

        <motion.div
          className="bg-black/40 p-3 rounded-lg backdrop-blur-md w-full max-w-md flex justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="font-semibold">Current Rewards</span>
          <span>0 per ETH Block</span>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  );
}
