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
        {/* ✅ רקע וידאו */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/videos/staking-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <motion.h1
          className="text-5xl font-extrabold text-center text-yellow-400 mb-4 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🔒 LIOSH Staking
        </motion.h1>
        <p className="text-center max-w-2xl mb-10 text-lg text-gray-200">
          Stake your LIOSH tokens to earn **passive rewards**!  
          The longer you stake, the more you earn. Rewards will be claimable after the presale ends.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-5xl">
          {/* 📊 צד שמאל – סטטוס */}
          <div className="flex-1 space-y-5">
            {/* Progress Bar */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-3 text-yellow-300">Pool Status</h2>
              <div className="bg-gray-700 rounded-full h-4 w-full mb-2">
                <div className="bg-yellow-400 h-4 rounded-full" style={{ width: "25%" }}></div>
              </div>
              <p className="text-sm text-gray-300">25% of pool staked</p>
            </div>

            {/* כרטיסי סטטוס */}
            {[
              { label: "Your Staked Balance", value: "0 LIOSH" },
              { label: "Available to Stake", value: "0 LIOSH" },
              { label: "Total Staked", value: "1,250,000 LIOSH" },
              { label: "Current APR", value: "120% / Year" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 p-4 rounded-lg flex justify-between items-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <span className="font-semibold">{item.label}</span>
                <span className="text-yellow-300 font-bold">{item.value}</span>
              </motion.div>
            ))}

            {/* Rewards Card */}
            <motion.div
              className="bg-yellow-400 text-black p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-1">Estimated Rewards</h3>
              <p className="text-2xl font-extrabold">0 LIOSH / year</p>
              <p className="text-sm mt-1">Rewards are updated dynamically based on the pool size.</p>
            </motion.div>
          </div>

          {/* 📥 צד ימין – טופס סטייקינג */}
          <motion.div
            className="flex-1 bg-gray-900 p-6 rounded-lg shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Stake Your Tokens</h2>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to stake"
              className="w-full px-4 py-3 text-black rounded-lg mb-4 focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              🚀 Stake Tokens
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full mt-4 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
            >
              💰 Claim Rewards
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full mt-4 bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition"
            >
              🔓 Withdraw Tokens
            </motion.button>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
