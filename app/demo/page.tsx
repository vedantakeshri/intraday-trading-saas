"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DemoPage() {
  const [pnl, setPnl] = useState(12450);

  // Simulate live PnL updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPnl((prev) => prev + Math.floor(Math.random() * 200 - 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const signals = [
    { name: "NIFTY", type: "BUY", price: "22450", sl: "22420", target: "22520" },
    { name: "BANKNIFTY", type: "SELL", price: "48230", sl: "48300", target: "48050" },
    { name: "FINNIFTY", type: "BUY", price: "21480", sl: "21440", target: "21560" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white p-6">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">
          TradeFlow
        </h1>

        <Link
          href="/register"
          className="bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
        >
          Start Free Trial
        </Link>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">
        
        {/* Chart */}
        <div className="lg:col-span-3 bg-[#13182A] p-6 rounded-xl border border-white/10">
          <div className="flex justify-between mb-4">
            <h3 className="text-sm text-gray-400">Market Chart</h3>

            <span className="flex items-center gap-2 text-xs text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live
            </span>
          </div>

          {/* Chart */}
          <div className="h-64 flex items-end gap-2">
            {[20, 40, 30, 60, 50, 80, 70, 90, 75].map((h, i) => (
              <div
                key={i}
                className="w-3 bg-green-400/70 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          {/* PnL */}
          <div className="bg-[#13182A] p-6 rounded-xl border border-white/10">
            <p className="text-xs text-gray-400">Today’s PnL</p>
            <h2
              className={`text-2xl font-bold ${
                pnl >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              ₹{pnl.toLocaleString()}
            </h2>
          </div>

          {/* Win Rate */}
          <div className="bg-[#13182A] p-6 rounded-xl border border-white/10">
            <p className="text-xs text-gray-400">Win Rate</p>
            <h2 className="text-xl font-bold">78%</h2>
          </div>

          {/* Trades */}
          <div className="bg-[#13182A] p-6 rounded-xl border border-white/10">
            <p className="text-xs text-gray-400">Trades Today</p>
            <h2 className="text-xl font-bold">12</h2>
          </div>
        </div>
      </div>

      {/* Signals */}
      <div className="max-w-7xl mx-auto mt-6 bg-[#13182A] p-6 rounded-xl border border-white/10">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm text-gray-300 uppercase">
            Live Signals
          </h3>

          <span className="flex items-center gap-2 text-xs text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        </div>

        <div className="space-y-3">
          {signals.map((s, i) => {
            const isBuy = s.type === "BUY";

            return (
              <div
                key={i}
                className="flex justify-between items-center bg-black/40 px-4 py-3 rounded-lg hover:bg-black/60 transition"
              >
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-gray-400">
                    SL: {s.sl} • Target: {s.target}
                  </p>
                </div>

                <div className="text-right">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      isBuy
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {s.type}
                  </span>
                  <p className="text-xs text-gray-400">@ {s.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          href="/register"
          className="bg-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Unlock Full Access
        </Link>
        <p className="text-xs text-gray-500 mt-2">
          Demo version • Simulated data
        </p>
      </div>
    </main>
  );
}