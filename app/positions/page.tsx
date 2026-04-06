"use client";

import { useState, useEffect } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

type Position = {
  symbol: string;
  qty: number;
  avgPrice: number;
  ltp: number;
  type: "BUY" | "SELL";
};

export default function PositionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [tab, setTab] = useState<"open" | "closed">("open");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  const [positions, setPositions] = useState<Position[]>([
    { symbol: "RELIANCE", qty: 10, avgPrice: 2450, ltp: 2460, type: "BUY" },
    { symbol: "TCS", qty: 5, avgPrice: 3500, ltp: 3525, type: "BUY" },
    { symbol: "BANKNIFTY", qty: 15, avgPrice: 48200, ltp: 48120, type: "SELL" },
  ]);

  const [closed, setClosed] = useState<Position[]>([]);

  // 🔥 LIVE PRICE SIMULATION
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => ({
          ...p,
          ltp: p.ltp + (Math.random() - 0.5) * 20,
        }))
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // 🔥 PnL
  const pnl = (p: Position) =>
    p.type === "BUY"
      ? (p.ltp - p.avgPrice) * p.qty
      : (p.avgPrice - p.ltp) * p.qty;

  const pnlPercent = (p: Position) =>
    (pnl(p) / (p.avgPrice * p.qty)) * 100;

  const totalPnL = positions.reduce((acc, p) => acc + pnl(p), 0);
  const totalInvestment = positions.reduce(
    (acc, p) => acc + p.avgPrice * p.qty,
    0
  );

  const filtered = positions.filter((p) =>
    p.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 EXIT LOGIC
  const exitPosition = (index: number) => {
    setClosed((prev) => [...prev, positions[index]]);
    setPositions((prev) => prev.filter((_, i) => i !== index));
  };

  // 🤖 AI ENGINE
  const getAIInsight = (p: Position) => {
    const movement = (p.ltp - p.avgPrice) / p.avgPrice;

    if (p.type === "BUY") {
      if (movement > 0.01)
        return {
          signal: "HOLD",
          confidence: 85,
          reason: "Strong bullish momentum",
          risk: "LOW",
        };

      if (movement < -0.01)
        return {
          signal: "EXIT",
          confidence: 80,
          reason: "Bearish breakdown",
          risk: "HIGH",
        };

      return {
        signal: "WATCH",
        confidence: 60,
        reason: "Sideways market",
        risk: "MEDIUM",
      };
    }

    if (movement < -0.01)
      return {
        signal: "HOLD",
        confidence: 82,
        reason: "Downtrend continues",
        risk: "LOW",
      };

    if (movement > 0.01)
      return {
        signal: "EXIT",
        confidence: 75,
        reason: "Possible reversal",
        risk: "HIGH",
      };

    return {
      signal: "WATCH",
      confidence: 55,
      reason: "Uncertain trend",
      risk: "MEDIUM",
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">
   <Sidebar />

      {/* 🔥 Main */}
      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>

        {/* 🔥 Topbar */}
        <Topbar onLogout={() => {}} />

        <main className="p-6 space-y-6 max-w-[1400px] mx-auto">

          {/* 🔥 Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Positions</h1>

            <input
              placeholder="Search stock..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm"
            />
          </div>

          {/* 🔥 Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card title="Total P&L" value={totalPnL} highlight />
            <Card title="Investment" value={totalInvestment} />
            <Card title="Open" value={positions.length} />
            <Card title="Closed" value={closed.length} />
          </div>

          {/* 🔥 Tabs */}
          <div className="flex gap-6 border-b border-white/10 pb-2">
            {["open", "closed"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as any)}
                className={`capitalize pb-2 ${
                  tab === t
                    ? "border-b-2 border-blue-400 text-blue-400"
                    : "text-gray-400"
                }`}
              >
                {t} positions
              </button>
            ))}
          </div>

          {/* 🔥 Positions */}
          <div className="space-y-3">
            {(tab === "open" ? filtered : closed).map((p, i) => {
              const profit = pnl(p);
              const percent = pnlPercent(p);
              const isProfit = profit >= 0;
              const ai = getAIInsight(p);

              return (
                <div
                  key={i}
                  className="bg-[#0f172a]/60 border border-white/10 rounded-xl p-4 hover:bg-white/5 transition"
                >
                  {/* 🔥 Row */}
                  <div
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="flex justify-between cursor-pointer"
                  >
                    <div>
                      <h3 className="font-semibold">{p.symbol}</h3>
                      <p className="text-xs text-gray-400">
                        {p.qty} qty • ₹{p.avgPrice}
                      </p>
                    </div>

                    <div className="text-right">
                      <p
                        className={`font-semibold ${
                          isProfit ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        ₹{profit.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400">
                        {percent.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  {/* 🔥 Expanded */}
                  {expanded === i && (
                    <div className="mt-4 border-t border-white/10 pt-3 space-y-3">

                      <Row label="LTP" value={`₹${p.ltp.toFixed(2)}`} />
                      <Row label="Type" value={p.type} />

                      {/* 🤖 AI PANEL */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-lg p-3 space-y-2">

                        <div className="flex justify-between">
                          <span className="text-xs text-gray-400">AI Signal</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              ai.signal === "HOLD"
                                ? "text-green-400 bg-green-500/20"
                                : ai.signal === "EXIT"
                                ? "text-red-400 bg-red-500/20"
                                : "text-yellow-400 bg-yellow-500/20"
                            }`}
                          >
                            {ai.signal}
                          </span>
                        </div>

                        <Row label="Confidence" value={`${ai.confidence}%`} />
                        <Row label="Risk" value={ai.risk} />

                        <p className="text-xs text-gray-400">
                          🤖 {ai.reason}
                        </p>
                      </div>

                      {/* 🔥 Actions */}
                      {tab === "open" && (
                        <div className="flex gap-2 pt-2">

                          <button
                            onClick={() =>
                              setPositions((prev) =>
                                prev.map((pos, idx) =>
                                  idx === i
                                    ? {
                                        ...pos,
                                        qty: Math.max(1, pos.qty - 1),
                                      }
                                    : pos
                                )
                              )
                            }
                            className="flex-1 bg-yellow-500/20 text-yellow-400 py-2 rounded text-xs"
                          >
                            Partial Exit
                          </button>

                          <button
                            onClick={() => exitPosition(i)}
                            className="flex-1 bg-red-500/20 text-red-400 py-2 rounded text-xs"
                          >
                            Exit
                          </button>

                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

/* 🔥 Components */

function Card({
  title,
  value,
  highlight,
}: {
  title: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div className="bg-[#0f172a]/60 border border-white/10 rounded-xl p-4">
      <p className="text-xs text-gray-400">{title}</p>
      <h2
        className={`text-lg font-semibold ${
          highlight
            ? value >= 0
              ? "text-green-400"
              : "text-red-400"
            : ""
        }`}
      >
        ₹{value.toFixed(0)}
      </h2>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{label}</span>
      <span>{value}</span>
    </div>
  );
}