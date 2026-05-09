"use client";

import { useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

export default function RiskPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [enabled, setEnabled] = useState(true);

  // 🔥 Risk Settings
  const [capital, setCapital] = useState("10000");
  const [riskPerTrade, setRiskPerTrade] = useState("1"); // %
  const [dailyLossLimit, setDailyLossLimit] = useState("3"); // %
  const [maxTrades, setMaxTrades] = useState("5");
  const [maxLossStreak, setMaxLossStreak] = useState("3");

  // 🔥 Simulated Stats
  const todayLoss = 1200;
  const tradesTaken = 3;
  const lossStreak = 2;

  // 🔥 Calculations
  const riskAmount =
    (Number(capital) * Number(riskPerTrade)) / 100;

  const dailyLossAmount =
    (Number(capital) * Number(dailyLossLimit)) / 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">
      
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="md:ml-64 transition-all duration-300">
        
        <Topbar
          onLogout={() => {}}
          onMenuClick={() => setSidebarOpen((p) => !p)}
        />

        <main className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Risk Control Engine
              </h1>
              <p className="text-gray-400 text-sm">
                Protect capital with rule-based risk management
              </p>
            </div>

            <button
              onClick={() => setEnabled(!enabled)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                enabled
                  ? "bg-green-400 text-black"
                  : "bg-red-400 text-black"
              }`}
            >
              {enabled ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* SETTINGS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#13182A]/70 border border-white/10 rounded-xl p-5">

            <Input
              label="Total Capital (₹)"
              value={capital}
              setValue={setCapital}
            />

            <Input
              label="Risk per Trade (%)"
              value={riskPerTrade}
              setValue={setRiskPerTrade}
            />

            <Input
              label="Daily Loss Limit (%)"
              value={dailyLossLimit}
              setValue={setDailyLossLimit}
            />

            <Input
              label="Max Trades per Day"
              value={maxTrades}
              setValue={setMaxTrades}
            />

            <Input
              label="Max Loss Streak"
              value={maxLossStreak}
              setValue={setMaxLossStreak}
            />

          </div>

          {/* LIVE SUMMARY */}
          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg mb-4">Live Risk Summary</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">

              <Stat
                title="Risk / Trade"
                value={`₹${riskAmount}`}
              />

              <Stat
                title="Daily Loss Limit"
                value={`₹${dailyLossAmount}`}
                red
              />

              <Stat
                title="Trades Taken"
                value={`${tradesTaken}/${maxTrades}`}
              />

              <Stat
                title="Loss Streak"
                value={`${lossStreak}/${maxLossStreak}`}
                red
              />

            </div>
          </div>

          {/* ALERT SYSTEM */}
          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg mb-4">System Alerts</h2>

            <div className="space-y-2 text-sm">

              {todayLoss > dailyLossAmount && (
                <Alert text="Daily loss limit exceeded. Trading blocked." />
              )}

              {tradesTaken >= Number(maxTrades) && (
                <Alert text="Max trades reached. No more trades allowed." />
              )}

              {lossStreak >= Number(maxLossStreak) && (
                <Alert text="Loss streak limit reached. Stop trading." />
              )}

              {todayLoss <= dailyLossAmount &&
                tradesTaken < Number(maxTrades) &&
                lossStreak < Number(maxLossStreak) && (
                  <p className="text-green-400">
                    All systems normal. Trading allowed ✅
                  </p>
                )}

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

/* 🔹 Components */

function Input({ label, value, setValue }: any) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-black/40 border border-white/10 px-3 py-2 rounded-lg focus:ring-1 focus:ring-green-400"
      />
    </div>
  );
}

function Stat({ title, value, red }: any) {
  return (
    <div className="bg-black/40 rounded-lg p-3">
      <p className="text-xs text-gray-400">{title}</p>
      <h3
        className={`font-bold mt-1 ${
          red ? "text-red-400" : "text-green-400"
        }`}
      >
        {value}
      </h3>
    </div>
  );
}

function Alert({ text }: { text: string }) {
  return (
    <div className="bg-red-500/10 border border-red-400/30 px-3 py-2 rounded-lg text-red-400">
      ⚠️ {text}
    </div>
  );
}