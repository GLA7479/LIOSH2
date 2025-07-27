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
        className="relative min-h-screen flex flex-col items-center justify-start p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ רקע וידאו */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/staking-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <motion.div
          className="relative z-10 w-full max-w-md bg-yellow-50 rounded-xl p-6 shadow-xl border-2 border-yellow-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl font-bold text-center text-yellow-700 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            🔒 STAKING
          </motion.h1>

          <p className="text-center text-gray-700 mb-6 text-sm">
            The distribution of the $LIOSH token reward will take place over a
            2-year period and will be claimable once presale ends.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 mb-6"
          >
            Withdraw Staked Tokens
          </motion.button>

          {/* ✅ שדות סטטוס */}
          <div className="space-y-4 mb-6">
            {["Staked Balance", "Your Stakeable"].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-3 rounded-lg flex justify-between shadow"
              >
                <span className="font-semibold">{label}</span>
                <span>0 LIOSH</span>
              </motion.div>
            ))}
          </div>

          {/* ✅ Buy & Stake */}
          <motion.div
            className="flex mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 px-4 py-2 rounded-r-lg font-bold hover:bg-yellow-500"
            >
              Buy & Stake
            </motion.button>
          </motion.div>

          {/* ✅ נתוני Pool */}
          <motion.div
            className="bg-white p-3 rounded-lg mb-4 shadow text-sm"
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

          {/* ✅ Estimated Rewards */}
          <motion.div
            className="bg-white p-3 rounded-lg mb-4 shadow text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="font-bold text-yellow-700 text-lg mb-2">
              Estimated Rewards: 0 LIOSH / year
            </p>
            <ul className="text-xs text-gray-600">
              <li>• Rewards rate is dynamic</li>
              <li>• Monthly = Rewards ÷ 12</li>
              <li>• Daily = Rewards ÷ 365</li>
            </ul>
          </motion.div>

          {/* ✅ Claim Rewards */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 mb-4"
          >
            Claim Rewards
          </motion.button>

          {/* ✅ תגמולים */}
          <motion.div
            className="bg-white p-3 rounded-lg shadow flex justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="font-semibold">Current Rewards</span>
            <span>0 per ETH Block</span>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  );
}
