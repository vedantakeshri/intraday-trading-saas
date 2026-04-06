"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";
import { useRouter } from "next/navigation";
import {
  createChart,
  CandlestickSeries,
  UTCTimestamp,
} from "lightweight-charts";

export default function ChartPage() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);

  const router = useRouter();

  const [symbol, setSymbol] = useState("NIFTY");
  const [timeframe, setTimeframe] = useState("1m");
  const [sidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    /* ✅ CREATE CHART ONLY ONCE */
    if (!chartRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        layout: {
          background: { color: "#0b1220" },
          textColor: "#CBD5E1",
        },
        grid: {
          vertLines: { color: "#1f2937" },
          horzLines: { color: "#1f2937" },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      seriesRef.current = chartRef.current.addSeries(
        CandlestickSeries,
        {
          upColor: "#22c55e",
          downColor: "#ef4444",
          borderVisible: false,
          wickUpColor: "#22c55e",
          wickDownColor: "#ef4444",
        }
      );
    }

    const chart = chartRef.current;
    const candleSeries = seriesRef.current;

    /* 🔥 TIME + PRICE ENGINE */
    let price = 22000;
    let lastTime = Math.floor(Date.now() / 1000);

    const getStep = () => {
      if (timeframe === "1m") return 60;
      if (timeframe === "5m") return 300;
      if (timeframe === "15m") return 900;
      return 3600;
    };

    const generateCandle = () => {
      const open = price;
      const close = open + (Math.random() - 0.5) * 200;
      const high = Math.max(open, close) + Math.random() * 100;
      const low = Math.min(open, close) - Math.random() * 100;

      price = close;
      lastTime += getStep();

      return {
        time: lastTime as UTCTimestamp,
        open,
        high,
        low,
        close,
      };
    };

    /* 🔥 RESET DATA WHEN SYMBOL/TIMEFRAME CHANGES */
    const initialData = [];
    for (let i = 0; i < 50; i++) {
      initialData.push(generateCandle());
    }

    candleSeries.setData(initialData);

    /* 🔴 LIVE UPDATE */
    const interval = setInterval(() => {
      candleSeries.update(generateCandle());
    }, 1500);

    /* ✅ RESPONSIVE FIX */
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [symbol, timeframe]);

  return (
    <div className="h-screen bg-gradient-to-br from-[#0b1220] to-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>
        {/* Topbar */}
        <Topbar onLogout={handleLogout} />

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">📊 Pro Chart</h2>

            <div className="flex gap-3">
              <select
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="bg-gray-800 px-3 py-1 rounded"
              >
                <option>NIFTY</option>
                <option>BANKNIFTY</option>
                <option>TCS</option>
                <option>RELIANCE</option>
              </select>

              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="bg-gray-800 px-3 py-1 rounded"
              >
                <option value="1m">1m</option>
                <option value="5m">5m</option>
                <option value="15m">15m</option>
                <option value="1h">1h</option>
              </select>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
            <div ref={chartContainerRef} className="w-full h-[400px]" />
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Symbol</p>
              <p className="text-lg font-semibold">{symbol}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Timeframe</p>
              <p className="text-lg font-semibold">{timeframe}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Status</p>
              <p className="text-green-400 font-semibold">LIVE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}