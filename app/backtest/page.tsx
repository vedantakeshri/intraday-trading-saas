"use client";

import { useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

export default function BacktestPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [symbol, setSymbol] = useState("NIFTY");
  const [strategy, setStrategy] = useState("RSI + EMA Strategy");
  const [capital, setCapital] = useState("10000");
  const [fromDate, setFromDate] = useState("2024-01-01");
  const [toDate, setToDate] = useState("2024-12-31");

  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<any>(null);

  // 🔥 Simulated Backtest Engine
  const runBacktest = () => {
    setRunning(true);

    setTimeout(() => {
      const trades = Math.floor(Math.random() * 80) + 20;
      const winRate = (55 + Math.random() * 15).toFixed(2);
      const pnl = (Math.random() * 50000 - 5000).toFixed(0);
      const drawdown = (Math.random() * 10).toFixed(2);

      setResult({
        trades,
        winRate,
        pnl,
        drawdown,
        profitFactor: (1 + Math.random()).toFixed(2),
      });

      setRunning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">
      
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="md:ml-64 transition-all duration-300">
        
        {/* Topbar */}
        <Topbar
          onLogout={() => {}}
          onMenuClick={() => setSidebarOpen((p) => !p)}
        />

        <main className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">

          {/* HEADER */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Backtesting Engine
            </h1>
            <p className="text-gray-400 text-sm">
              Validate your strategy using historical market data
            </p>
          </div>

          {/* INPUT PANEL */}
          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <Input label="Symbol" value={symbol} setValue={setSymbol} />

            <Select
              label="Strategy"
              value={strategy}
              setValue={setStrategy}
              options={[
                "RSI + EMA Strategy",
                "Breakout Strategy",
                "Scalping Strategy",
              ]}
            />

            <Input label="Capital (₹)" value={capital} setValue={setCapital} />

            <Input label="From Date" value={fromDate} setValue={setFromDate} type="date" />

            <Input label="To Date" value={toDate} setValue={setToDate} type="date" />

          </div>

          {/* RUN BUTTON */}
          <button
            onClick={runBacktest}
            className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            {running ? "Running Backtest..." : "Run Backtest"}
          </button>

          {/* RESULTS */}
          {result && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

                <Stat title="Trades" value={result.trades} />
                <Stat title="Win Rate" value={`${result.winRate}%`} />
                <Stat title="PnL" value={`₹${result.pnl}`} green />
                <Stat title="Drawdown" value={`${result.drawdown}%`} red />
                <Stat title="Profit Factor" value={result.profitFactor} />

              </div>

              {/* EQUITY CURVE */}
              <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5">
                <h2 className="mb-3 text-lg">Equity Curve</h2>

                <div className="h-40 flex items-end gap-1">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const h = Math.random() * 100;
                    return (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 bg-green-400/40 rounded"
                      />
                    );
                  })}
                </div>
              </div>
            </>
          )}

        </main>
      </div>
    </div>
  );
}

/* 🔹 Components */

function Input({ label, value, setValue, type = "text" }: any) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-black/40 border border-white/10 px-3 py-2 rounded-lg focus:ring-1 focus:ring-green-400"
      />
    </div>
  );
}

function Select({ label, value, setValue, options }: any) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-black/40 border border-white/10 px-3 py-2 rounded-lg"
      >
        {options.map((opt: string) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Stat({ title, value, green, red }: any) {
  return (
    <div className="bg-black/40 rounded-lg p-3 text-center">
      <p className="text-xs text-gray-400">{title}</p>
      <h3
        className={`font-bold mt-1 ${
          green ? "text-green-400" : red ? "text-red-400" : ""
        }`}
      >
        {value}
      </h3>
    </div>
  );
}