
// "use client";

// import { useEffect, useState, useMemo } from "react";

// function Sparkline({ data }: { data: number[] }) {
//   const max = Math.max(...data);
//   const min = Math.min(...data);

//   const points = data
//     .map((value, index) => {
//       const x = (index / (data.length - 1)) * 100;
//       const y = ((value - min) / (max - min || 1)) * 100;
//       return `${x},${100 - y}`;
//     })
//     .join(" ");

//   return (
//     <svg viewBox="0 0 100 100" className="w-full h-10">
//       <polyline
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         points={points}
//         className="text-green-400"
//       />
//     </svg>
//   );
// }

// export default function StatsCards() {
//   const card =
//     "relative bg-[#0f172a]/70 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.03] hover:border-green-500/40 hover:shadow-xl cursor-pointer";

//   const [pnl, setPnl] = useState(13753);
//   const [change, setChange] = useState(2.41);

//   const [history, setHistory] = useState<number[]>([12000, 12500, 12300, 13000, 13500, 13753]);

//   const capital = 500000;

//   const isProfit = pnl >= 0;

//   // 🔥 Smooth + realistic animation (not random jumps)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPnl((prev) => {
//         const delta = (Math.random() - 0.5) * 200; // smaller = realistic
//         const newPnl = prev + delta;

//         setChange((newPnl / capital) * 100);

//         setHistory((h) => {
//           const updated = [...h, newPnl];
//           if (updated.length > 20) updated.shift(); // keep last 20 points
//           return updated;
//         });

//         return newPnl;
//       });
//     }, 1500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//       {/* 🔥 P&L CARD */}
//       <div className={card}>
//         <div className="flex justify-between items-start">
//           <p className="text-gray-400 text-sm">Today's P&L</p>

//           <div
//             className={`text-xs px-2 py-0.5 rounded-full ${
//               isProfit
//                 ? "bg-green-500/20 text-green-400"
//                 : "bg-red-500/20 text-red-400"
//             }`}
//           >
//             {isProfit ? "Profit" : "Loss"}
//           </div>
//         </div>

//         <h2
//           className={`text-3xl font-bold mt-2 transition-all duration-500 ${
//             isProfit ? "text-green-400" : "text-red-400"
//           }`}
//         >
//           {isProfit ? "+" : "-"}₹{Math.abs(pnl).toFixed(0)}
//         </h2>

//         <p className="text-xs text-gray-500 mt-1">
//           {isProfit ? "+" : "-"}
//           {Math.abs(change).toFixed(2)}% on capital
//         </p>

//         {/* 🔥 Sparkline */}
//         <div className="mt-3 opacity-80">
//           <Sparkline data={history} />
//         </div>
//       </div>

//       {/* 📊 OPEN POSITIONS */}
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Open Positions</p>

//         <h2 className="text-3xl font-bold mt-2 text-white">2</h2>

//         <div className="mt-4 text-xs text-gray-500">
//           Active trades running
//         </div>
//       </div>

//       {/* ⚡ TRADES */}
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Trades Today</p>

//         <h2 className="text-3xl font-bold mt-2 text-yellow-400">7</h2>

//         <div className="mt-4 text-xs text-gray-500">
//           Executed trades count
//         </div>
//       </div>

//       {/* 💰 MARGIN */}
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Available Margin</p>

//         <h2 className="text-3xl font-bold mt-2 text-blue-400">
//           ₹1,94,520
//         </h2>

//         <div className="mt-4 text-xs text-gray-500">
//           Funds available for trading
//         </div>
//       </div>
//     </div>
//   );
// }









"use client";

import { useEffect, useState } from "react";

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = ((value - min) / (max - min || 1)) * 100;
      return `${x},${100 - y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="w-full h-12">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        points={points}
        className="text-green-400"
      />
    </svg>
  );
}

export default function StatsCards() {
  const baseCard =
    "relative overflow-hidden bg-[#0f172a]/70 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.03] hover:border-green-500/40 hover:shadow-xl";

  const [pnl, setPnl] = useState(13753);
  const [history, setHistory] = useState<number[]>([
    12000, 12500, 12300, 13000, 13500, 13753,
  ]);

  const capital = 500000;
  const isProfit = pnl >= 0;
  const change = (pnl / capital) * 100;

  // 🔥 Smooth trending logic
  useEffect(() => {
    const interval = setInterval(() => {
      setPnl((prev) => {
        const trend = prev > 13000 ? -50 : 50; // directional bias
        const noise = (Math.random() - 0.5) * 80;
        const next = prev + trend + noise;

        setHistory((h) => {
          const updated = [...h, next];
          if (updated.length > 25) updated.shift();
          return updated;
        });

        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {/* 🔥 P&L */}
      <div className={`${baseCard}`}>
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm">Today’s P&L</p>

          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              isProfit
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {isProfit ? "▲ Profit" : "▼ Loss"}
          </span>
        </div>

        <h2
          className={`text-3xl font-bold mt-2 ${
            isProfit ? "text-green-400" : "text-red-400"
          }`}
        >
          {isProfit ? "+" : "-"}₹{Math.abs(pnl).toFixed(0)}
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          {isProfit ? "+" : "-"}
          {Math.abs(change).toFixed(2)}% • vs capital
        </p>

        {/* Insight */}
        <p className="text-xs mt-2 text-green-400">
          {isProfit
            ? "Strong performance today"
            : "Drawdown under control"}
        </p>

        <div className="mt-3">
          <Sparkline data={history} />
        </div>

        {/* Glow */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-400/10 blur-2xl rounded-full" />
      </div>

      {/* 📊 OPEN POSITIONS */}
      <div className={baseCard}>
        <p className="text-gray-400 text-sm">Open Positions</p>

        <h2 className="text-3xl font-bold mt-2 text-white">2</h2>

        <p className="text-xs text-gray-500 mt-1">
          1 profitable • 1 running
        </p>

        <p className="text-xs mt-2 text-blue-400">
          Monitoring active trades
        </p>
      </div>

      {/* ⚡ TRADES */}
      <div className={baseCard}>
        <p className="text-gray-400 text-sm">Trades Today</p>

        <h2 className="text-3xl font-bold mt-2 text-yellow-400">7</h2>

        <p className="text-xs text-gray-500 mt-1">
          Win rate ~78%
        </p>

        <p className="text-xs mt-2 text-yellow-400">
          High activity session
        </p>
      </div>

      {/* 💰 MARGIN */}
      <div className={baseCard}>
        <p className="text-gray-400 text-sm">Available Margin</p>

        <h2 className="text-3xl font-bold mt-2 text-blue-400">
          ₹1,94,520
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          38% utilized
        </p>

        <p className="text-xs mt-2 text-blue-400">
          Sufficient liquidity available
        </p>
      </div>
    </div>
  );
}