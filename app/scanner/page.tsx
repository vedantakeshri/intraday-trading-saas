"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

const initialStocks = [
  { name: "RELIANCE", price: 2450, change: 1.2, volume: 120000 },
  { name: "TCS", price: 3800, change: -0.8, volume: 80000 },
  { name: "INFY", price: 1500, change: 2.5, volume: 150000 },
  { name: "HDFCBANK", price: 1650, change: -1.5, volume: 95000 },
];

const ScannerPage = () => {
  const [stocks, setStocks] = useState(initialStocks);
  const [search, setSearch] = useState("");
  const [aiOnly, setAiOnly] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  // Simulated loading
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  // 🔄 Live market simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((stock) => ({
          ...stock,
          price: stock.price + (Math.random() * 10 - 5),
          change: Math.random() * 4 - 2,
          volume: stock.volume + Math.floor(Math.random() * 5000),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🤖 AI ENGINE
  // const getAISignal = (stock) => {
  //   if (stock.change > 1 && stock.volume > 100000) {
  //     return {
  //       signal: "BUY",
  //       confidence: 85,
  //       reason: "Momentum breakout + volume spike",
  //     };
  //   }

  //   if (stock.change < -1 && stock.volume > 90000) {
  //     return {
  //       signal: "SELL",
  //       confidence: 80,
  //       reason: "Heavy selling pressure",
  //     };
  //   }

  //   return {
  //     signal: "HOLD",
  //     confidence: 60,
  //     reason: "No clear trend",
  //   };
  // };


  const getAISignal = (stock: Stock): AISignal => {
  if (stock.change > 1 && stock.volume > 100000) {
    return {
      signal: "BUY",
      confidence: 85,
      reason: "Momentum breakout + volume spike",
    };
  }

  if (stock.change < -1 && stock.volume > 90000) {
    return {
      signal: "SELL",
      confidence: 80,
      reason: "Heavy selling pressure",
    };
  }

  return {
    signal: "HOLD",
    confidence: 60,
    reason: "No clear trend",
  };
};

  // Filters
  const filtered = stocks.filter((stock) => {
    const ai = getAISignal(stock);

    if (aiOnly) return ai.confidence > 75;
    return stock.name.toLowerCase().includes(search.toLowerCase());
  });

  // KPI DATA
  const gainers = stocks.filter((s) => s.change > 0).length;
  const losers = stocks.filter((s) => s.change < 0).length;
  const strongSignals = stocks.filter(
    (s) => getAISignal(s).confidence > 80
  ).length;

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d]">
      <Sidebar />

      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>
        <Topbar />

        <div className="p-6">
          {/* Heading */}
          <h1 className="text-2xl font-bold mb-6">
            🤖 AI Market Scanner
          </h1>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Stocks", value: stocks.length },
              { label: "Gainers", value: gainers, color: "text-green-400" },
              { label: "Losers", value: losers, color: "text-red-400" },
              {
                label: "AI Signals",
                value: strongSignals,
                color: "text-purple-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10"
              >
                <p className="text-sm text-gray-400">{item.label}</p>
                <h2 className={`text-xl font-bold ${item.color}`}>
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex gap-4 mb-6">
            <input
              placeholder="Search stock..."
              className="p-2 bg-white/5 border border-white/10 rounded-lg"
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={() => setAiOnly(!aiOnly)}
              className={`px-4 py-2 rounded-lg ${
                aiOnly
                  ? "bg-purple-600 shadow-lg shadow-purple-500/20"
                  : "bg-gray-700"
              }`}
            >
              AI Signals Only
            </button>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="text-center py-10 text-gray-400">
              Loading market data...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              No stocks found 🚫
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10">
                  <tr>
                    <th className="p-3">Stock</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Change</th>
                    <th className="p-3">Volume</th>
                    <th className="p-3">Signal</th>
                    <th className="p-3">Confidence</th>
                    <th className="p-3">Reason</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((stock, i) => {
                    const ai = getAISignal(stock);

                    return (
                      <tr
                        key={i}
                        className={`border-t border-white/10 hover:bg-white/5 transition ${
                          ai.confidence > 80
                            ? "ring-1 ring-purple-500/40"
                            : ""
                        }`}
                      >
                        <td className="p-3 font-medium">{stock.name}</td>
                        <td className="p-3">
                          ₹{stock.price.toFixed(2)}
                        </td>

                        <td
                          className={`p-3 ${
                            stock.change > 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {stock.change.toFixed(2)}%
                        </td>

                        <td className="p-3">{stock.volume}</td>

                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded text-xs font-bold ${
                              ai.signal === "BUY"
                                ? "bg-green-500/20 text-green-400"
                                : ai.signal === "SELL"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {ai.signal}
                          </span>
                        </td>

                        <td className="p-3 text-purple-400">
                          {ai.confidence}%
                        </td>

                        <td className="p-3 text-gray-400 text-xs">
                          {ai.reason}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScannerPage;