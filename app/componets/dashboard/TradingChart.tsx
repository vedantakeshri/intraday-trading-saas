// "use client";

// import { useEffect } from "react";

// declare global {
//   interface Window {
//     TradingView: any;
//   }
// }

// export default function TradingChart() {
//   useEffect(() => {
//     // Load script only once
//     if (document.getElementById("tradingview-script")) {
//       createWidget();
//       return;
//     }

//     const script = document.createElement("script");
//     script.id = "tradingview-script";
//     script.src = "https://s3.tradingview.com/tv.js";
//     script.async = true;

//     script.onload = () => createWidget();

//     document.body.appendChild(script);
//   }, []);

//   const createWidget = () => {
//     if (!window.TradingView) return;

//     new window.TradingView.widget({
//       autosize: true,
//       symbol: "NSE:NIFTY",
//       interval: "5",
//       timezone: "Asia/Kolkata",
//       theme: "dark",
//       style: "1",
//       locale: "en",
//       enable_publishing: false,
//       hide_top_toolbar: false,
//       hide_legend: false,
//       container_id: "tv_chart_container",
//     });
//   };

//   return (
//     <div className="bg-gray-900 border border-gray-800 rounded-xl p-2 h-[420px]">
//       <div id="tv_chart_container" className="h-full w-full" />
//     </div>
//   );
// }







"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function TradingChart() {
  const [symbol, setSymbol] = useState("NSE:NIFTY");
  const [interval, setIntervalState] = useState("5");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadScript();
  }, []);

  useEffect(() => {
    if (window.TradingView) {
      createWidget();
    }
  }, [symbol, interval]);

  const loadScript = () => {
    if (document.getElementById("tradingview-script")) {
      createWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = "tradingview-script";
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => createWidget();

    document.body.appendChild(script);
  };

  const createWidget = () => {
    if (!window.TradingView) return;

    setLoading(true);

    new window.TradingView.widget({
      autosize: true,
      symbol,
      interval,
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      container_id: "tv_chart_container",
    });

    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden shadow-lg">
      
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
        
        <div>
          <h2 className="text-sm font-semibold text-white">
            Trading Chart
          </h2>
          <p className="text-xs text-gray-400">
            {symbol.replace("NSE:", "")} • {interval}m
          </p>
        </div>

        {/* Live Indicator */}
        <span className="flex items-center gap-2 text-xs text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live
        </span>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-white/10 text-xs">
        
        {/* Symbol */}
        <div className="flex gap-2">
          {["NSE:NIFTY", "NSE:BANKNIFTY"].map((s) => (
            <button
              key={s}
              onClick={() => setSymbol(s)}
              className={`px-2 py-1 rounded ${
                symbol === s
                  ? "bg-green-400 text-black"
                  : "bg-white/5 text-gray-300"
              }`}
            >
              {s.replace("NSE:", "")}
            </button>
          ))}
        </div>

        {/* Interval */}
        <div className="flex gap-2">
          {["1", "5", "15"].map((i) => (
            <button
              key={i}
              onClick={() => setIntervalState(i)}
              className={`px-2 py-1 rounded ${
                interval === i
                  ? "bg-green-400 text-black"
                  : "bg-white/5 text-gray-300"
              }`}
            >
              {i}m
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-[420px]">
        
        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a]/80 z-10">
            <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div id="tv_chart_container" className="h-full w-full" />
      </div>
    </div>
  );
}